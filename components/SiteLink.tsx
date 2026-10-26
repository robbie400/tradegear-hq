import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { canonicalPath } from '@/lib/site-urls';

/** Normalize navigation at the shared rendering boundary, including catalogue-driven links. */
export default function SiteLink({ href, ...props }: ComponentProps<typeof NextLink>) {
  const destination = typeof href === 'string'
    ? canonicalPath(href)
    : { ...href, pathname: href.pathname ? canonicalPath(href.pathname) : href.pathname };
  return <NextLink href={destination} {...props} />;
}
