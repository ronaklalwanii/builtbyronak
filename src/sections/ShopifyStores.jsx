import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { SHOPIFY_STORES } from '../constants'
import { useRevealList } from '../lib/useReveal'
import Shots, { ShotLightbox } from '../components/Shots'

const PREVIEW_COUNT = 6

/**
 * Full-screen gallery. Esc closes, Tab stays inside, focus returns to the
 * trigger, and the page behind cannot scroll while it is open.
 */
function StoreGallery({ stores, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const [activeStore, setActiveStore] = useState(null)
  const [lightbox, setLightbox] = useState(-1)

  useEffect(() => {
    const previous = document.activeElement
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      // The lightbox handles Esc itself while it is open.
      if (event.key === 'Escape' && lightbox < 0) {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || lightbox >= 0) return

      const root = dialogRef.current
      if (!root) return

      const focusable = Array.from(
        root.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ).filter((el) => el.getClientRects().length > 0)

      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (!root.contains(document.activeElement)) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [lightbox, onClose])

  const openStore = (store) => {
    setActiveStore(store)
    setLightbox(0)
  }

  return (
    <div className="fixed inset-0 z-[60] bg-canvas/95 backdrop-blur-md">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="shopify-gallery-title"
        aria-describedby="shopify-gallery-desc"
        className="h-full overflow-y-auto overscroll-contain"
      >
        <div className="shell py-6 md:py-10">
          <div className="flex items-start justify-between gap-6 pb-8 md:pb-10">
            <div className="flex flex-col gap-2">
              <h2
                id="shopify-gallery-title"
                className="text-title font-semibold text-ink text-balance"
              >
                All {stores.length} Shopify stores
              </h2>
              <p id="shopify-gallery-desc" className="text-[14px] text-ink-soft">
                Open any store to view its screenshots.
              </p>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-hair-strong text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {stores.map((store) => (
              <li key={store.name}>
                <button
                  type="button"
                  onClick={() => openStore(store)}
                  className="group block w-full text-left"
                >
                  <div className="shot transition-colors group-hover:border-hair-strong">
                    <img
                      src={store.images[0]}
                      alt=""
                      width="1280"
                      height="720"
                      loading="lazy"
                      decoding="async"
                      className="block aspect-[16/9] w-full object-cover object-top"
                    />
                  </div>
                  <h3 className="pt-2.5 text-[13.5px] font-medium text-ink">{store.name}</h3>
                  <p className="line-clamp-2 pt-1 text-[12.5px] leading-snug text-ink-dim">
                    {store.blurb}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ShotLightbox
        images={activeStore?.images ?? []}
        name={activeStore?.name ?? ''}
        index={lightbox}
        onClose={() => setLightbox(-1)}
      />
    </div>
  )
}

export default function ShopifyStores() {
  const stores = SHOPIFY_STORES
  const preview = stores.slice(0, PREVIEW_COUNT)
  const getRef = useRevealList(preview.length)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const closeGallery = useCallback(() => setGalleryOpen(false), [])

  if (!stores.length) return null

  return (
    <section id="shopify" className="rule">
      <div className="shell section-pad">
        <div className="flex items-baseline justify-between gap-6 pb-4">
          <h2 className="section-h">Shopify stores</h2>
          <p className="meta">{stores.length} stores</p>
        </div>

        <p className="pb-12 text-[15px] leading-relaxed text-ink-soft max-w-prose">
          Done-for-you launches for UK brands. For most of these I sourced the range,
          created the brand identity, and designed and built the Shopify store.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {preview.map((store, i) => (
            <article key={store.name} ref={getRef(i)} className="reveal flex flex-col gap-4">
              <Shots images={store.images} name={store.name} />

              <div className="flex flex-col gap-2.5">
                <h3 className="text-[16px] font-medium text-ink">{store.name}</h3>

                <p className="text-[14px] leading-relaxed text-ink-soft">{store.blurb}</p>

                <details className="group text-[13.5px] leading-relaxed text-ink-soft">
                  <summary className="min-h-11 cursor-pointer select-none text-[13px] text-ink-dim hover:text-ink transition-colors">
                    What I built
                  </summary>
                  <p className="pt-2">{store.summary}</p>
                </details>

                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {store.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-14">
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className="btn-ghost"
          >
            Show all {stores.length} stores
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>

      {galleryOpen && <StoreGallery stores={stores} onClose={closeGallery} />}
    </section>
  )
}
