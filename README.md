# TradeGear HQ

US-focused affiliate comparison and buyer-guide website for professional tradespeople.

## First build

This repository now contains a Vercel-ready Next.js frontend with:

- Premium navy/orange/green TradeGear HQ visual system
- Four trade hubs
- One working buyer-guide route per launch trade
- Five mapped Amazon product candidates per demo guide
- Affiliate disclosure and sponsored link attributes
- Per-guide metadata and canonical URLs
- `noindex` by default while editorial/product verification is incomplete
- Responsive product cards, comparison blocks and Q&A sections

## Stack

- Next.js App Router
- TypeScript
- CSS design system
- Vercel-ready

## Vercel environment variables

For the preview build, set:

```text
NEXT_PUBLIC_INDEX_SITE=false
```

Later, when a real domain is connected and every page is verified, set:

```text
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_INDEX_SITE=true
```

## Next phase

The master blueprint contains 50 launch guides, 206 product candidates and 250 product placements. This first commit establishes the frontend/component pattern before loading the complete catalogue and doing source-verified editorial content.

Amazon US tracking ID: `robbieom0e-20`
