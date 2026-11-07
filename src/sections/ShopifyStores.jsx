import { SHOPIFY_STORES } from '../constants'
import { useRevealList } from '../lib/useReveal'
import Shots from '../components/Shots'

export default function ShopifyStores() {
  const getRef = useRevealList(SHOPIFY_STORES.length)

  if (!SHOPIFY_STORES.length) return null

  return (
    <section id="shopify" className="rule">
      <div className="shell section-pad">
        <div className="flex items-baseline justify-between gap-6 pb-4">
          <h2 className="section-h">Shopify stores</h2>
          <p className="meta">{SHOPIFY_STORES.length} stores</p>
        </div>

        <p className="pb-12 text-[15px] leading-relaxed text-ink-soft max-w-prose">
          Done-for-you launches for UK brands. For most of these I sourced the range,
          created the brand identity, and designed and built the Shopify store.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {SHOPIFY_STORES.map((store, i) => (
            <article key={store.name} ref={getRef(i)} className="reveal flex flex-col gap-4">
              <Shots images={store.images} name={store.name} />

              <div className="flex flex-col gap-2.5">
                <h3 className="text-[16px] font-medium text-ink">{store.name}</h3>

                <p className="text-[14px] leading-relaxed text-ink-soft">{store.blurb}</p>

                <details className="group text-[13.5px] leading-relaxed text-ink-soft">
                  <summary className="cursor-pointer select-none text-[13px] text-ink-dim hover:text-ink transition-colors">
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
      </div>
    </section>
  )
}
