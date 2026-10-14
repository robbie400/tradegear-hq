export function normalizeToolSearch(value:string):string {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
}
export function matchesToolSearch(searchText:string,query:string):boolean {
  const words=normalizeToolSearch(query).split(/\s+/).filter(Boolean);
  return words.every(word=>searchText.includes(word));
}
