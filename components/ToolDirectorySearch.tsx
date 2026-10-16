"use client";

import {useEffect,useRef,useState,type ReactNode} from 'react';
import {matchesToolSearch} from '@/lib/tool-search';
import styles from './ToolDirectorySearch.module.css';

type Item={id:string;searchText:string;card:ReactNode;essential?:boolean};
function EssentialsCarousel({items}:{items:Item[]}){
  const track=useRef<HTMLDivElement>(null);
  const [edges,setEdges]=useState({start:true,end:true});
  useEffect(()=>{
    const element=track.current;
    if(!element)return;
    const update=()=>{
      const start=element.scrollLeft<2;
      const end=element.scrollLeft+element.clientWidth>=element.scrollWidth-2;
      setEdges(previous=>previous.start===start && previous.end===end?previous:{start,end});
    };
    update();
    element.addEventListener('scroll',update,{passive:true});
    const observer=new ResizeObserver(update);
    observer.observe(element);
    return ()=>{element.removeEventListener('scroll',update);observer.disconnect();};
  },[items.length]);
  const move=(direction:number)=>{
    const element=track.current;
    if(!element)return;
    const first=element.firstElementChild;
    const step=first?first.getBoundingClientRect().width+14:element.clientWidth;
    const count=Math.max(1,Math.floor((element.clientWidth+14)/step));
    element.scrollBy({left:direction*step*count,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  };
  return <div className={styles.carousel}>
    <button type="button" className={`${styles.carouselArrow} ${styles.previous}`} onClick={()=>move(-1)} disabled={edges.start} aria-label="Previous apprentice essentials" aria-controls="essentials-track"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg></button>
    <div ref={track} id="essentials-track" className={styles.essentialGrid} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Apprentice essentials">{items.map(item=><div key={item.id} className={styles.cardWrapper}>{item.card}</div>)}</div>
    <button type="button" className={`${styles.carouselArrow} ${styles.next}`} onClick={()=>move(1)} disabled={edges.end} aria-label="Next apprentice essentials" aria-controls="essentials-track"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></button>
  </div>;
}
export function ToolDirectorySearch({items,groups,catalogueHeading="Reviews & comparisons"}:{items:Item[];groups:{slug:string;name:string}[];catalogueHeading?:string}){
  const [query,setQuery]=useState('');
  const results=items.filter(item=>matchesToolSearch(item.searchText,query));
  const essentials=results.filter(item=>item.essential);
  const catalogue=results.filter(item=>!item.essential);
  return <>
    <div className={styles.searchBox}>
      <label htmlFor="tool-search">Search tools</label>
      <div className={styles.inputRow}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>
        <input id="tool-search" type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search by tool, brand or model…" aria-describedby="tool-search-help" autoComplete="off" />
        {query && <button type="button" onClick={()=>setQuery('')} aria-label="Clear tool search">Clear</button>}
      </div>
      <p id="tool-search-help" className={styles.searchHelp}>Start typing to find your tool. Try a name, brand, model number or tool type.</p>
      <p className={styles.count} role="status" aria-live="polite" aria-atomic="true">{results.length} {results.length===1?'tool':'tools'}{query.trim() ? ` matching “${query.trim()}”` : ' to browse'}</p>
    </div>
    {!query.trim() && <nav className={styles.groupNav} aria-label="Jump to tool group">{essentials.length>0 && <a href="#tools-apprentice-essentials">Apprentice Essentials</a>}{groups.map(group=><a key={group.slug} href={`#tools-${group.slug}`}>{group.name}</a>)}</nav>}
    {catalogue.length>0 && <><h2 className={styles.catalogueHeading}>{catalogueHeading}</h2><div className="allToolsGrid">{catalogue.map(item=><div key={item.id} className={styles.cardWrapper}>{item.card}</div>)}</div></>}
    {essentials.length>0 && <section id="tools-apprentice-essentials" className={styles.essentials} aria-labelledby="essentials-heading">
      <div className={styles.sectionHeading}><div><span className={styles.kicker}>Start with the basics</span><h2 id="essentials-heading">Apprentice Essentials</h2></div><span className={styles.essentialCount}>{essentials.length} {essentials.length===1?'essential':'essentials'}</span></div>
      <p className={styles.sectionIntro}>Small tools for the everyday kit. Check your employer’s list and what you already own before buying.</p>
      <p className={styles.disclosure}>As an Amazon Associate, we earn from qualifying purchases.</p>
      <EssentialsCarousel key={query} items={essentials}/>
    </section>}
    {!results.length && <div className={styles.empty}><h2>No tools found</h2><p>Try a shorter name, a brand or another model number.</p><button type="button" onClick={()=>setQuery('')}>Show all tools</button></div>}
  </>;
}
