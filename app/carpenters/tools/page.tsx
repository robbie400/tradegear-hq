import type {Metadata} from 'next';
import Link from 'next/link';
import {carpenterCatalogGuides} from '@/lib/carpenter-catalog';
import {ProductRating} from '@/components/ProductRating';
import {ProductPhoto} from '@/components/ProductPhoto';
import {getProductImage} from '@/lib/product-images';
import {PageSchema} from '@/components/Editorial';

export const metadata:Metadata={title:'Carpenter Tools: Browse Product Reviews & Buying Advice',description:'Browse every carpenter and joiner tool in the TradeGear HQ shortlist. Open individual product reviews, check job fit and compare alternatives before buying.',alternates:{canonical:'/carpenters/tools/'}};
export default function CarpenterTools(){
  const products=carpenterCatalogGuides.flatMap(g=>g.products.map(p=>({p,g})));
  return <>
    <PageSchema kind="CollectionPage" title="Browse Carpenter & Joiner Tools" description="Individual carpenter tool reviews covering layout, hand tools, saws, work supports, routing, sanding and fastening, with job-fit advice and sourced feedback." path="/carpenters/tools/" date="2026-10-14" crumbs={[{name:'Home',path:'/'},{name:'Carpenters & Joiners',path:'/carpenters/'},{name:'All tools',path:'/carpenters/tools/'}]} />
    <section className="section light"><div className="shell">
      <div className="crumb"><Link href="/">Home</Link> / <Link href="/carpenters/">Carpenters & Joiners</Link> / All tools</div>
      <span className="eyebrow orange">BROWSE THE TOOLS</span><h1>Carpenter & Joiner Tools</h1>
      <div className="sectionHeading"><h2>Find a tool. Open its full review.</h2><p>{products.length} tools in the current shortlist. See who each suits, what it needs to work and when a simpler alternative makes sense.</p></div>
      <nav className="articleNav" aria-label="Other ways to shop"><Link href="/carpenters/#tool-guides">Compare tool categories →</Link><Link href="/carpenters/#job-kits">Find a job kit →</Link></nav>
      <nav className="articleNav" aria-label="Jump to tool group">{carpenterCatalogGuides.map(g=><a key={g.slug} href={`#tools-${g.slug}`}>{g.cluster}</a>)}</nav><div className="allToolsGrid">{products.map(({p,g})=><article key={p.productId} className="allToolCard" id={p.productId===g.products[0].productId?`tools-${g.slug}`:undefined}>
        <Link href={`/reviews/${p.reviewSlug}/`} className="allToolIdentity"><ProductPhoto photo={getProductImage(p.productId)} className="hubProductPhoto" /><span className="eyebrow orange">{g.cluster}</span><h2>{p.brand} {p.model}</h2></Link>
        <ProductRating trade="carpenters" brand={p.brand} model={p.model} amazonUrl={p.url} compact tone="light" /><p className="toolCardFit">{p.role}</p><p>{p.assessment!.intro}</p><Link href={`/reviews/${p.reviewSlug}/`} className="detailLink">Read full product review →</Link>
      </article>)}</div>
    </div></section>
  </>;
}
