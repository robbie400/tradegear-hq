import {canonicalPath} from '@/lib/site-urls';
import {AutomotiveDirectory} from '@/components/Automotive';
import styles from './ToolDirectory.module.css';
import type {Metadata} from 'next';
import Link from '@/components/SiteLink';
import {notFound} from 'next/navigation';
import {hubs} from '@/lib/data';
import {getToolDirectory} from '@/lib/tool-directory';
import {ProductRating} from '@/components/ProductRating';
import {ProductPhoto} from '@/components/ProductPhoto';
import {ToolDirectorySearch} from '@/components/ToolDirectorySearch';
import {ApprenticeEssentialCard} from '@/components/ApprenticeEssentialCard';
import {PageSchema} from '@/components/Editorial';

const titles:Record<string,string>={electricians:'Electrician Tools',plumbers:'Plumber Tools',hvac:'HVAC Tools','home-inspectors':'Home Inspector Tools',carpenters:'Carpenter & Joiner Tools','automotive-mechanics':'Automotive Mechanic Tools'};
export function generateStaticParams(){return hubs.map(h=>({trade:h.slug}));}
export async function generateMetadata({params}:{params:Promise<{trade:string}>}):Promise<Metadata>{
  const {trade}=await params;const directory=getToolDirectory(trade);if(!directory)return {};
  const title=`${titles[trade]}: Browse Reviews & Buying Advice`;
  const description=`Browse ${directory.products.length} reviewed and compared tools plus ${directory.essentials.length} apprentice essentials for ${directory.hub.name.toLowerCase()}. Search by tool, brand or model.`;
  return {title,description,alternates:{canonical:canonicalPath(`/${trade}/tools/`)},openGraph:{title,description,url:canonicalPath(`/${trade}/tools/`)}};
}
export default async function TradeTools({params}:{params:Promise<{trade:string}>}){
  const {trade}=await params;const directory=getToolDirectory(trade);if(!directory)notFound();
  if(trade==='automotive-mechanics')return <AutomotiveDirectory/>;
  const {hub,groups,products,essentials}=directory;
  const description=`Search ${products.length} reviewed and compared tools plus ${essentials.length} apprentice essentials for ${hub.name.toLowerCase()}.`;
  const items=products.map(p=>({id:p.id,searchText:p.searchText,card:<article className="allToolCard" id={p.groupAnchor}>
    <Link href={p.detailHref} className="allToolIdentity"><ProductPhoto photo={p.photo} className="hubProductPhoto"/><span className="eyebrow orange">{p.cluster}</span><h2>{p.brand} {p.model}</h2></Link>
    <ProductRating trade={trade} brand={p.brand} model={p.model} amazonUrl={p.amazonUrl} compact tone="light"/><p className="toolCardFit">{p.role}</p>{p.intro && <p>{p.intro}</p>}<Link href={p.detailHref} className="detailLink">{p.detailLabel}</Link>
  </article>}));
  return <>
    <PageSchema kind="CollectionPage" title={titles[trade]} description={description} path={`/${trade}/tools/`} date="2026-10-15" crumbs={[{name:'Home',path:'/'},{name:hub.name,path:`/${trade}/`},{name:'All tools',path:`/${trade}/tools/`}]}/>
    <section className={`section light ${styles.directory}`}><div className="shell">
      <div className={`crumb ${styles.crumb}`}><Link href="/">Home</Link> / <Link href={`/${trade}/`}>{hub.name}</Link> / All tools</div>
      <h1>{titles[trade]}</h1>
      <p className={styles.intro}>{products.length} reviewed and compared tools, plus {essentials.length} apprentice essentials. Find what fits your kit.</p>
      <nav className={styles.navigation} aria-label="Other ways to shop"><Link href={`/${trade}/#tool-guides`}>Compare tool categories →</Link><Link href={`/${trade}/#job-kits`}>Find a job kit →</Link></nav>
      <ToolDirectorySearch items={[...items,...essentials.map(product=>({id:product.id,searchText:product.searchText,essential:true,card:<ApprenticeEssentialCard product={product} trade={trade}/>}))]} groups={groups}/>
    </div></section>
  </>;
}
