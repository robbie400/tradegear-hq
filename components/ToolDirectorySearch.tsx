"use client";

import {useState,type ReactNode} from 'react';
import {matchesToolSearch} from '@/lib/tool-search';
import styles from './ToolDirectorySearch.module.css';

type Item={id:string;searchText:string;card:ReactNode};
export function ToolDirectorySearch({items,groups}:{items:Item[];groups:{slug:string;name:string}[]}){
  const [query,setQuery]=useState('');
  const results=items.filter(item=>matchesToolSearch(item.searchText,query));
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
    {!query.trim() && <nav className={styles.groupNav} aria-label="Jump to tool group">{groups.map(group=><a key={group.slug} href={`#tools-${group.slug}`}>{group.name}</a>)}</nav>}
    {results.length ? <div className="allToolsGrid">{results.map(item=><div key={item.id} className={styles.cardWrapper}>{item.card}</div>)}</div> : <div className={styles.empty}><h2>No tools found</h2><p>Try a shorter name, a brand or another model number.</p><button type="button" onClick={()=>setQuery('')}>Show all tools</button></div>}
  </>;
}
