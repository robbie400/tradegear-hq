// Set these only to tracking IDs created in this Amazon.com Associates account.
const tags: Record<string, string | undefined> = {
  electricians: process.env.AMAZON_TAG_ELECTRICIANS,
  plumbers: process.env.AMAZON_TAG_PLUMBERS,
  hvac: process.env.AMAZON_TAG_HVAC,
  "home-inspectors": process.env.AMAZON_TAG_INSPECTORS,
};
export function affiliateUrl(original: string, trade: string): string {
  const tag = tags[trade];
  if (!tag || !/^[a-zA-Z0-9-]+-20$/.test(tag)) return original;
  const url = new URL(original);
  if (url.hostname !== "amazon.com" && !url.hostname.endsWith(".amazon.com")) return original;
  url.searchParams.set("tag", tag);
  return url.toString();
}
