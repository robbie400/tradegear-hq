/** Match Next.js's non-trailing-slash routes while retaining query strings and fragments. */
export function canonicalPath(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const boundary = path.search(/[?#]/);
  const pathname = boundary === -1 ? path : path.slice(0, boundary);
  const suffix = boundary === -1 ? '' : path.slice(boundary);
  return (pathname.replace(/\/+$/, '') || '/') + suffix;
}
