export const ukGuides = [
  {slug:"clamp-meters", title:"Clamp meters for UK electricians", intro:"Choose by the current you actually need to measure. A meter that measures DC voltage at its leads does not necessarily measure DC current through its jaws.", note:"Check the measurement category and voltage rating of both the instrument and leads for the intended work. If you're buying for training, start with the course tool list.", picks:[
    ["Fluke 323","B01HR46YF6","For AC clamp current. Consider it if DC current is outside your regular work."],
    ["Fluke 325","B0091EXB2A","Compare this if you also need DC current through the jaws. Check accuracy at the lower end of the range you expect to use."],
  ], source:"https://assets.fluke.com/manuals/32x_____umeng0100.pdf", sourceLabel:"Fluke 323/324/325 manual"},
  {slug:"cable-routing-rods", title:"Cable routing rods for UK electricians", intro:"A sectional rod kit makes sense when you need to steer a cable across a ceiling or wall void. A fish tape is a different purchase, better suited to a route where the tape is supported by conduit.", note:"Compare the working length, rod stiffness and attachments in the exact UK kit. A compact starter kit may be easier to handle in a cupboard even if a longer kit looks better on paper.", picks:[
    ["Super Rod CRSK12 12 m Cable Installation Kit","B005C3HBE8","Compare the assortment of rod flexes and included pulling attachments before choosing a kit."],
    ["C.K MightyRod T5410 14-piece Cable Rod Set","B00LUPQ0IU","Compare the assembled reach and whether you can replace or extend individual rods."],
  ], source:"https://super-rod.co.uk/", sourceLabel:"Super Rod manufacturer site"},
  {slug:"copper-pipe-cutters", title:"Copper pipe cutters for UK plumbers", intro:"For repairs on familiar 15 mm copper, a dedicated cutter saves you resetting the tool each time. If you also work on 22 mm regularly, compare two dedicated sizes with an adjustable cutter before buying.", note:"Check the actual outside diameter and the clearance around the pipe. A compact body still needs room to turn. Match the cutter to the pipe material as well as its size.", picks:[
    ["Monument Autocut 1715C 15 mm","B000X2CSWS","A dedicated 15 mm copper choice. Check the part number on the listing, especially if it presents multiple sizes."],
    ["Rothenberger ROSLICE 88822 22 mm","B00EIIMO40","A 22 mm option for a different pipe size. It complements a 15 mm cutter rather than replacing it."],
  ], source:"https://www.uktoolstore.co.uk/monument-tools-autocut-copper-pipe-cutter-1715c-15mm/", sourceLabel:"UK listing for the Monument 1715C"},
] as const;

export function ukAmazonProduct(asin: string) {
  return `https://www.amazon.co.uk/dp/${asin}?tag=robbieom-21`;
}
