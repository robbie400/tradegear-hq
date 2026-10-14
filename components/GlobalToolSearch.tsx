"use client";

import {useState} from 'react';
import Link from 'next/link';
import type {GlobalToolSearchItem} from '@/lib/tool-directory';
import {matchesToolSearch} from '@/lib/tool-search';
import styles from './GlobalToolSearch.module.css';

export function GlobalToolSearch({items}:{items:GlobalToolSearchItem[]}){
  const [query,setQuery]=useState('');
  const active=query.trim().length>0;
  const matches=active ? items.filter(item=>matchesToolSearch(item.searchText,query)) : [];
  return <div className={styles.search} role="search" aria-label="Search all trade tools">
    <label className={styles.label} htmlFor="global-tool-search">Search tools across all trades</label>
    <div className={styles.field}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>
      <input id="global-tool-search" type="search" placeholder="Search any tool, brand or model…" value={query} onChange={event=>setQuery(event.target.value)} onKeyDown={event=>{if(event.key==='Escape')setQuery('');}} autoComplete="off" aria-controls="global-tool-results"/>
      {active ? <button type="button" aria-label="Clear global tool search" onClick={()=>setQuery('')}>Clear</button> : null}
    </div>
    <div id="global-tool-results">
      {active ? <div className={styles.results}>
        <div className={styles.status} role="status" aria-live="polite" aria-atomic="true">{matches.length ? `${matches.length} ${matches.length===1?'tool':'tools'} found${matches.length>6?' · showing the first 6':''}` : 'No tools found. Try a brand or shorter name.'}</div>
        {matches.length ? <ul>{matches.slice(0,6).map(item=><li key={item.id}><Link href={item.href} prefetch={false}><span>{item.name}</span><small>{item.trades.join(' · ')}</small></Link></li>)}</ul> : null}
      </div> : null}
    </div>
  </div>;
}
