// A record sleeve: full-colour cover art
// with the record peeking out from behind it. `.disc` is turned by
// engine/spin.js; the sleeve slides and the record comes out in CSS.
export default function Sleeve({ cover, alt = '', eager = false, sizes, disc = true, className = '' }) {
  return (
    <span className={`sleeve ${className}`}>
      {disc && (
        <span className="disc" aria-hidden="true">
          <i />
        </span>
      )}
      <span className="sleeve__art" style={{ aspectRatio: `${cover.w} / ${cover.h}` }}>
        <img
          src={cover.small}
          srcSet={`${cover.small} 800w, ${cover.src} ${cover.w}w`}
          sizes={sizes}
          width={cover.w}
          height={cover.h}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          style={{ objectPosition: cover.position }}
        />
      </span>
    </span>
  )
}
