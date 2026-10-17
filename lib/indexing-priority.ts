/** Oct 17 2026 GSC: these eight final URLs remained unknown to Google when
 * 54 other supposedly-discovered URLs and all 23 distinct 'crawled not indexed'
 * pages proved indexed via fresh URL inspection. Keep the change scoped to these
 * targets; DO NOT silently migrate already-indexed pages' URL signals.
 * Remove this compatibility list only after a separately approved sitewide
 * trailing-slash consistency project.
 */
export const indexingPriorityPaths = new Set<string>([
  "/electricians/best-wire-strippers-for-electricians",
  "/electricians/workflows/commercial-electrician-tool-kit",
  "/electricians/workflows/electrician-service-call-tool-kit",
  "/home-inspectors/workflows/home-inspector-crawlspace-and-basement-tool-kit",
  "/plumbers/best-tubing-cutters-for-plumbers",
  "/reviews/hvac-fieldpiece-vp87-review",
  "/reviews/inspector-klein-et140-review",
  "/reviews/klein-11055-review"
]);
/** The server returns HTTP 200 at non-trailing-slash paths, redirecting slash aliases (308).
 *  For these 8 only, emit the final 200 URL as sitemap/canonical/JSON-LD.
 *  For every other URL keep existing output unchanged.
 */
export function indexingPriorityCanonicalPath(path:string):string {
 const candidate=path==='/' ? '/' : path.replace(/\\/+$/, '');
 return indexingPriorityPaths.has(candidate) ? candidate : path;
}
