import {canonicalPath} from '@/lib/site-urls';
import type {Metadata} from 'next';
import Link from '@/components/SiteLink';
import {hubs} from '@/lib/data';
import {getApprenticeEssentialsForTrade} from '@/lib/apprentice-essentials';
import styles from './page.module.css';

export const metadata:Metadata={
  title:'Apprentice Essentials by Trade',
  description:'Choose your trade to browse everyday apprentice essentials in the TradeGear HQ tool directories.',
  alternates:{canonical:canonicalPath('/apprentice-essentials/')},
};

export default function ApprenticeEssentials(){
  return <section className="section light"><div className={`shell ${styles.page}`}>
    <span className="eyebrow orange">Start with the basics</span>
    <h1>Apprentice Essentials</h1>
    <p>Choose your trade to jump to the essentials at the end of its tool directory. Check your employer’s list and what you already own before buying.</p>
    <nav className={styles.trades} aria-label="Apprentice essentials by trade">{hubs.map(hub=><Link key={hub.slug} href={`/${hub.slug}/tools#tools-apprentice-essentials`}>
      <h2>{hub.name}</h2><span>{getApprenticeEssentialsForTrade(hub.slug).length} essentials · Browse tools →</span>
    </Link>)}</nav>
  </div></section>;
}
