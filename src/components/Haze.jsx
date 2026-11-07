import { useEffect, useRef } from 'react'
import { gsap, reduced } from '../engine/motion'
import { driver } from '../engine/driver'

const vert = /* glsl */ `
attribute vec2 position; attribute vec2 uv; varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position, 0., 1.); }`

// Room haze: slow smoke in a blue-black room and one amber lamp that pulses
// on the backbeat. Ground color matches --ground so it blends into the page.
const frag = /* glsl */ `
precision mediump float;
uniform float uTime, uBeat; uniform vec2 uRes, uMouse; varying vec2 vUv;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
  return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float v = 0., a = .5; for(int i=0;i<4;i++){ v += a*n(p); p = p*2.03 + 7.1; a *= .5; } return v; }
void main(){
  vec2 uv = vUv; vec2 p = (uv - .5) * vec2(uRes.x / uRes.y, 1.);
  float t = uTime * .1;
  vec2 q = vec2(fbm(p*1.5 + vec2(0., t)), fbm(p*1.5 + vec2(5.2, 1.3) - t));
  float f = fbm(p*1.3 + 2.4*q + vec2(t*2., 0.));
  vec3 ground = vec3(.035, .043, .067);
  vec3 col = mix(ground, vec3(.115, .15, .23), smoothstep(.3, .95, f) * .85);
  vec2 lp = vec2(.8, .78) + uMouse * .025;
  float d = distance(uv * vec2(uRes.x / uRes.y, 1.), lp * vec2(uRes.x / uRes.y, 1.));
  float lamp = exp(-d*d*(7. + 9.*step(uRes.x, uRes.y))) * (.14 + .30 * uBeat);
  col += vec3(.91, .58, .16) * lamp * (.55 + .9 * f);
  col *= 1. - .55 * dot(uv - .5, uv - .5);
  col += (h(uv * uRes + uTime) - .5) * .012;
  gl_FragColor = vec4(col, 1.);
}`

export default function Haze() {
  const canvas = useRef(null)

  useEffect(() => {
    const el = canvas.current
    if (reduced()) return
    let cleanup
    let dead = false
    // OGL loads after first paint: the hero is already a poster without it.
    import('ogl').then(({ Renderer, Program, Mesh, Triangle }) => {
      if (dead) return
      cleanup = start(el, { Renderer, Program, Mesh, Triangle })
    })
    return () => {
      dead = true
      cleanup?.()
    }
  }, [])

  return <canvas className="haze" ref={canvas} aria-hidden="true" />
}

function start(el, { Renderer, Program, Mesh, Triangle }) {
  let renderer
  try {
    renderer = new Renderer({ canvas: el, dpr: 0.5, alpha: false, antialias: false })
  } catch {
    return
  }
  const gl = renderer.gl
  const program = new Program(gl, {
    vertex: vert,
    fragment: frag,
    uniforms: {
      uTime: { value: 0 },
      uBeat: { value: 0 },
      uRes: { value: [1, 1] },
      uMouse: { value: [0, 0] },
    },
  })
  const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })
  const resize = () => {
    renderer.setSize(el.parentElement.clientWidth, el.parentElement.clientHeight)
    program.uniforms.uRes.value = [gl.drawingBufferWidth, gl.drawingBufferHeight]
  }
  resize()
  window.addEventListener('resize', resize)

  // Paused while the hero is off screen.
  let visible = true
  const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
  io.observe(el)
  const m = [0, 0]
  // Phones get one still frame: no battery spent on smoke, and the first
  // screen settles. The beat still moves the figure and the brackets.
  const still = window.matchMedia('(hover: none)').matches
  const draw = (time) => {
    if (!visible || (still && time > 3)) return
    m[0] += (driver.px - m[0]) * 0.05
    m[1] += (-driver.py - m[1]) * 0.05
    program.uniforms.uTime.value = time
    program.uniforms.uBeat.value = driver.beat
    program.uniforms.uMouse.value = m
    renderer.render({ scene: mesh })
  }
  gsap.ticker.add(draw)
  el.dataset.live = 'true'
  return () => {
    gsap.ticker.remove(draw)
    io.disconnect()
    window.removeEventListener('resize', resize)
    gl.getExtension('WEBGL_lose_context')?.loseContext()
  }
}
