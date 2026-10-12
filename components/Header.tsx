import Link from "next/link";
import { hubs } from "@/lib/data";
export function Header(){return <header className="header"><div className="shell headerInner"><Link href="/" className="brand"><span className="mark">TG</span><b>TRADEGEAR</b><i>HQ</i></Link><nav>{hubs.map(h=><Link key={h.slug} href={`/${h.slug}/`}>{h.name}</Link>)}</nav><Link className="headerCta" href="/#trades">Find a Tool</Link></div></header>}
