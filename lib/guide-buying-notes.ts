type BuyingNote = {
  heading: string;
  paragraphs: string[];
  checks: { choice: string; check: string }[];
  sources: { label: string; href: string }[];
};

export const guideBuyingNotes: Partial<Record<string, BuyingNote>> = {
  "electricians/best-fish-tapes-for-electricians": {
    heading: "Buy for the hardest part of the pull",
    paragraphs: [
      "Start with the route that costs you time. A short, known conduit run is a different job from reaching across a ceiling cavity with nowhere to support the tool. For the first, the 50-foot Klein 56331 is the steel baseline in this guide. For the second, sectional fish rods give you a tool you can steer from the opening instead of paying for more tape length.",
      "If you're comparing fiberglass tapes, read the spec for the leader as well as the body. Klein lists a spiral steel leader on its 56350 and a nylon eyelet on its 56383. The word fiberglass alone doesn't tell you what's on the end, and no tape in this guide is a reason to work on an energized route.",
    ],
    checks: [
      { choice: "Conduit with bends", check: "Compare stiffness and leader profile before paying for extra reach." },
      { choice: "Open wall or ceiling", check: "Compare rod flexibility and clearance at the access hole." },
    ],
    sources: [
      { label: "Klein 56331 specifications", href: "https://www.kleintools.com/catalog/fish-tapes/steel-fish-tape-18-inch-x-50-foot" },
      { label: "Klein tape and leader chart", href: "https://data.kleintools.com/sites/all/product_assets/documents/brochures/klein/56335_WideSteelFishTape_SellSheet_Web.pdf" },
    ],
  },
  "electricians/best-circuit-breaker-finders-for-electricians": {
    heading: "Pay for the connection or the diagnostics you’re missing",
    paragraphs: [
      "For a job that's mostly matching standard outlets to breakers, the Klein ET310 is the simpler buy. If you frequently start at a light fixture, compare the standard set with the ET310KIT first. The kit already includes a light-socket adapter and other connection accessories, so you may need a different bundle rather than a different finder.",
      "The ET350 is the more useful upgrade when you routinely need outlet fault information, a voltage reading or GFCI trip timing as well as breaker identification. If you already carry a tester that covers that work, put the money toward the accessories you actually lack. A breaker finder identifies a likely match; it doesn't verify that a circuit is safe to work on.",
    ],
    checks: [
      { choice: "ET310 vs. ET310KIT", check: "Compare what's in the box against the connections you encounter." },
      { choice: "ET310 vs. ET350", check: "Check whether the added outlet diagnostics replace a tool you would otherwise bring." },
    ],
    sources: [
      { label: "Klein ET310KIT contents", href: "https://www.kleintools.com/catalog/electrical-testers/circuit-breaker-finder-kit" },
      { label: "Klein ET350 functions", href: "https://www.kleintools.com/catalog/electrical-testers/4-1-digital-circuit-breaker-finder" },
    ],
  },
  "hvac/best-refrigerant-recovery-machines-for-hvac": {
    heading: "Compare the stopping behavior before comparing speed",
    paragraphs: [
      "The Fieldpiece MR45 and Appion G5Twin solve different buying problems. The MR45 gives you an adjustable automatic stop point. That's useful if you want a documented shutoff behavior for recurring recovery work. The G5Twin is the alternative to compare if you value a twin-cylinder design built for liquid and vapor recovery. Published rates deserve a side-by-side look only when they describe the same refrigerant and recovery phase.",
      "Budget for the recovery setup, not just the machine. If A2L work is on the schedule, verify the exact unit and its manual, as well as the compatibility of your cylinder and accessories. The ability to use an existing cylinder and hose setup can matter more to the purchase decision than a modest difference in advertised recovery rates.",
    ],
    checks: [
      { choice: "Fieldpiece MR45", check: "Check the documented automatic shutoff settings against the work you perform." },
      { choice: "Appion G5Twin", check: "Compare the manual's rates for the refrigerants and recovery phases you actually encounter." },
    ],
    sources: [
      { label: "Fieldpiece MR45 specifications", href: "https://www.fieldpiece.com/product/mr45-digital-recovery-machine/" },
      { label: "Appion G5Twin manual", href: "https://appiontools.com/content/G5Twin_Manual.pdf" },
    ],
  },
  "plumbers/best-sewer-cameras-for-plumbers": {
    heading: "Price the full inspection setup, not just the reel",
    paragraphs: [
      "Compare a camera against the line you actually inspect. The RIDGID Compact M40 puts a 1-inch head on 131 feet of moderately stiff push cable. That's a useful middle ground to consider when you need reach without jumping straight to a stiffer cable. For short runs with tight bends, compare the smaller microDrain APX first. A longer reel doesn't help if the head or cable can't make the turns.",
      "Separate seeing a fault from finding it above ground. A sonde transmits a signal; a compatible locator is what lets you trace that signal. If you quote work that depends on locating the fault, price the locator too. And check the listing by package number: a reel-only M40 doesn't include the display you'll need.",
    ],
    checks: [
      { choice: "Adding a reel", check: "Check monitor compatibility with the SeeSnake equipment you already own." },
      { choice: "Starting from scratch", check: "Compare the included monitor, power and recording setup; price a locator separately if needed." },
    ],
    sources: [
      { label: "RIDGID Compact M40 configurations and specifications", href: "https://www.ridgid.com/us/en/seesnake-compact-m40" },
    ],
  },
  "electricians/best-clamp-meters-for-electricians": {
    heading: "Check what the jaws measure, not just the leads",
    paragraphs: [
      "The Fluke 323 and 325 both measure AC current up to 400 A through the jaws. The distinction that changes the purchase is DC current: the 325 measures it through the jaws, while the 323's DC voltage function uses the leads. If you work mostly on AC loads, the 323 may cover the job. If you also need DC clamp current, compare the 325 and Klein CL390 before buying.",
      "Write down the lowest current you care about as well as the highest. On the Fluke 325, the published 40 A range has finer display resolution than the 400 A range, but resolution isn't an accuracy guarantee. If very small currents are your main work, compare the accuracy at those readings with a meter intended for that job.",
    ],
    checks: [
      { choice: "Fluke 323", check: "Buy for AC current at the jaw and voltage at the leads." },
      { choice: "Fluke 325", check: "Compare DC current capability and accuracy at the low end of your working range." },
    ],
    sources: [
      { label: "Fluke 323/324/325 manual and accuracy tables", href: "https://assets.fluke.com/manuals/32x_____umeng0100.pdf" },
    ],
  },
};
