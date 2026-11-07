import { useRouter } from '../router'

// Internal links go through the router (curtain, no reload); everything else
// is a plain anchor.
export function A({ href, children, ...rest }) {
  const { go } = useRouter()
  const internal = href.startsWith('/')
  const external = /^https?:/.test(href)
  const onClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    go(href)
  }
  return (
    <a
      href={href}
      onClick={internal ? onClick : undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}

// Nav and utility links: the label rolls up and a copy rolls in.
export function Roll({ children, className = '', ...props }) {
  return (
    <A className={`roll ${className}`} {...props}>
      <span className="roll__in" data-text={children}>
        {children}
      </span>
    </A>
  )
}

// Primary button: a slash of whiskey floods the label.
export function Button({ children, className = '', ...props }) {
  return (
    <A className={`btn ${className}`} {...props}>
      <span className="btn__t">{children}</span>
    </A>
  )
}
