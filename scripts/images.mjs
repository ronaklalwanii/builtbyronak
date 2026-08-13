/**
 * Generates WebP derivatives for everything under public/images/projects.
 *
 *   - every source image gets a same-name .webp sibling at 1280px wide
 *   - the hero/LCP image also gets 800 / 1280 / 1920 variants for srcset
 *
 * Originals are kept as the <picture> fallback. Requires cwebp on PATH
 * (brew install webp). Idempotent: skips outputs newer than their source.
 */
import { execFileSync } from 'node:child_process'
import { readdirSync, statSync, existsSync, mkdirSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'

const ROOT = 'public/images/projects'
const HERO = 'public/images/projects/Chronology-Timeline.jpg'
const HERO_WIDTHS = [800, 1280, 1920]
const QUALITY = 82
const MAX_WIDTH = 1280

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else if (/\.(jpe?g|png)$/i.test(entry)) out.push(full)
  }
  return out
}

function stale(src, dest) {
  if (!existsSync(dest)) return true
  return statSync(src).mtimeMs > statSync(dest).mtimeMs
}

function encode(src, dest, width) {
  mkdirSync(dirname(dest), { recursive: true })
  const args = ['-quiet', '-q', String(QUALITY), '-resize', String(width), '0', src, '-o', dest]
  execFileSync('cwebp', args, { stdio: 'inherit' })
}

const sources = walk(ROOT)
let written = 0
let skipped = 0

for (const src of sources) {
  const dest = src.replace(new RegExp(`${extname(src)}$`), '.webp')
  if (stale(src, dest)) {
    encode(src, dest, MAX_WIDTH)
    written++
  } else {
    skipped++
  }
}

for (const width of HERO_WIDTHS) {
  const dest = HERO.replace(/\.jpg$/, `-${width}.webp`)
  if (stale(HERO, dest)) {
    encode(HERO, dest, width)
    written++
  } else {
    skipped++
  }
}

console.log(`images: ${written} written, ${skipped} up to date, ${sources.length} sources`)
