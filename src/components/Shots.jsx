import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'

/**
 * Screenshot viewer. Embla for swipe and keyboard, yet-another-react-lightbox
 * for full-size viewing. Click any shot to enlarge.
 */
export default function Shots({ images, name, aspect = 'aspect-[16/9]' }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: images.length > 1, align: 'start' })
  const [selected, setSelected] = useState(0)
  const [lightbox, setLightbox] = useState(-1)

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap())
  }, [embla])

  useEffect(() => {
    if (!embla) return undefined
    onSelect()
    embla.on('select', onSelect)
    embla.on('reInit', onSelect)
    return () => {
      embla.off('select', onSelect)
      embla.off('reInit', onSelect)
    }
  }, [embla, onSelect])

  if (!images?.length) return null

  const many = images.length > 1

  return (
    <div className="flex flex-col gap-3">
      <div className="shot group">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, i) => (
              <div key={src} className="min-w-0 flex-[0_0_100%]">
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Enlarge ${name} screenshot ${i + 1} of ${images.length}`}
                  className={`block w-full ${aspect} cursor-zoom-in`}
                >
                  <img
                    src={src}
                    alt={`${name} screenshot ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Enlarge affordance */}
        <div className="pointer-events-none absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-ink bg-black/65 backdrop-blur px-2 py-1 rounded-[2px]">
            <Maximize2 size={10} />
            Enlarge
          </span>
        </div>
      </div>

      {many && (
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => embla?.scrollTo(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === selected}
                className={`h-[3px] rounded-full transition-all duration-200 ${
                  i === selected ? 'w-6 bg-accent' : 'w-2.5 bg-hair-strong hover:bg-ink-faint'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-ink-dim tabular-nums">
              {String(selected + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => embla?.scrollPrev()}
                aria-label={`Previous ${name} screenshot`}
                className="w-7 h-7 grid place-items-center rounded-[2px] border border-hair text-ink-soft hover:text-ink hover:border-hair-strong transition-colors"
              >
                <ArrowLeft size={13} />
              </button>
              <button
                type="button"
                onClick={() => embla?.scrollNext()}
                aria-label={`Next ${name} screenshot`}
                className="w-7 h-7 grid place-items-center rounded-[2px] border border-hair text-ink-soft hover:text-ink hover:border-hair-strong transition-colors"
              >
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}

      <Lightbox
        open={lightbox >= 0}
        index={lightbox}
        close={() => setLightbox(-1)}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom, Counter]}
        carousel={{ finite: !many }}
        controller={{ closeOnBackdropClick: true }}
        zoom={{ maxZoomPixelRatio: 3 }}
        styles={{ container: { backgroundColor: 'rgba(6,8,11,0.96)' } }}
      />
    </div>
  )
}
