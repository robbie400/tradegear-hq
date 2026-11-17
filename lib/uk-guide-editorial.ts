export const ukEditorial = {
  "clamp-meters": {
    trade:"Electricians", verdict:"Choose the Fluke 323 if your regular work calls for AC clamp readings. Choose the 325 if your workload also requires DC clamp current. If your biggest concern is very small currents, start with the accuracy table rather than either model name.",
    criteria:[
      ["Choose the right measurement","Read the jaw-current and lead-voltage specifications separately. A dial setting for DC voltage does not make the jaws DC capable. The 323 covers AC current at the jaws; the 325 covers AC and DC. Write down the measurements you expect to make before comparing feature lists."],
      ["Check the low end","Both meters are sold as 400 A clamps, but that ceiling tells you little about readings near the bottom of the range. Compare resolution and stated accuracy together. If your main job is small DC current, compare a purpose-built low-current instrument rather than paying for a higher maximum."],
      ["Match the work and the kit","Consider jaw size and access as well as electrical ratings. Check the measurement category and voltage rating of the meter and leads for the intended environment. If this is for college or an apprenticeship, check the required instrument list; a clamp meter is not a replacement for the equipment specified for safe isolation."],
    ],
    detail:[
      ["AC load checks","A sensible choice when you regularly need an AC load reading and already carry any separate instruments your work requires. DC voltage remains a lead measurement.","Skip if you expect the jaws to measure DC current. Buying a case or a different lead set will not add that capability."],
      ["Mixed AC and DC work","The better fit where the same kit must cover AC and DC clamp current. Read the manufacturer’s range and accuracy table against your expected readings before paying for the extra functions.","Skip if most of your DC work is at currents too low for the stated accuracy to be useful, or if you only need routine AC readings."],
    ],
    faq:[
      ["Does the Fluke 323 measure DC amps through the jaws?","No. It can measure DC voltage at the leads, but its jaws measure AC current. The Fluke 325 adds DC clamp current."],
      ["Is a higher current range always better?","No. For small currents, the lowest usable range and its stated accuracy matter more than the maximum number on the box."],
      ["Should an apprentice buy both a clamp meter and a multimeter?","Ask for the course or employer tool list first. A multimeter and a clamp overlap on some measurements, but they solve different current-measurement problems."],
    ],
    images:["fluke-323","fluke-325"],
  },
  "cable-routing-rods": {
    trade:"Electricians", verdict:"Compare the Super Rod CRSK12 if you want a broad attachment selection in one kit. Compare the C.K T5410 if its 14-piece set covers your routine routes. Start with the access opening and the turns, then compare reach.",
    criteria:[
      ["Start at the access point","A rod kit is useful when you need to steer across a void and retrieve the end at a second opening. Check the room available to feed a section into the first opening. In a cupboard or beside a wall, the section length you can handle may matter more than the kit’s assembled reach."],
      ["Match stiffness to the route","A firmer rod is easier to direct across an unsupported gap; a more flexible section can be easier to introduce through a restricted opening. For a route with several turns, more total length does not solve a handling problem. A fish tape is often a better comparison when the route is inside conduit."],
      ["Count useful parts rather than all parts","Compare rods, connectors and attachments separately. Look for an attachment that fits the cable and access route, and verify whether spare sections and ends are available for the exact kit. Do not assume connectors from different brands or ranges will fit."],
    ],
    detail:[
      ["Longer kit with more attachments","The CRSK12 listing identifies a 12 m kit and 13 handling attachments. Consider it if your work repeatedly calls for different ends and routes, and you want to buy them together.","Skip if you mostly make short pulls from tight access points and a smaller kit is easier to carry and feed."],
      ["A second full kit to compare","The T5410 listing identifies a 14-piece set. Compare the actual sections and ends in the pack against the way you retrieve and pull cable, rather than treating the part count as a measure of reach.","Skip if you need compatibility with rods you already own and cannot verify the connectors."],
    ],
    faq:[
      ["Are cable rods the same as fish tape?","No. Sectional rods help steer through an accessible void. A coiled tape is a useful alternative for many conduit pulls."],
      ["Will a 12 m kit reach 12 m on every job?","The length is nominal assembled reach. Turns, clearance and the space needed to feed or retrieve the rod can make the usable distance shorter."],
      ["Can I mix rods and tips from different kits?","Only if the manufacturer confirms the connectors match. Check the exact product range before buying spares."],
    ],
    images:[],
  },
  "copper-pipe-cutters": {
    trade:"Plumbers", verdict:"Choose the Monument 1715C when you regularly cut 15 mm copper. Choose the Rothenberger 88822 for 22 mm copper. If both diameters are routine, compare carrying two dedicated cutters with one adjustable cutter.",
    criteria:[
      ["Measure the pipe, not the fitting","These two tools are dedicated to different outside diameters. Measure an accessible straight section of the pipe itself, especially on older work where a familiar-looking fitting can hide a different size. Check the marking on the cutter and in the listing before buying."],
      ["Check clearance all the way round","A compact cutter only helps if it can rotate without hitting a wall, a bracket or an adjacent pipe. Consider both the room to place it and the room to turn it. If you frequently cut near a wall, that clearance test is more useful than comparing body size from photos."],
      ["Buy for the mix of jobs","Two dedicated cutters make sense when the same two sizes account for most of the work. An adjustable cutter may be better value if you regularly see other copper diameters and have room for it. For plastic or multilayer pipe, choose a cutter specified for that material and follow the fitting maker’s preparation instructions."],
    ],
    detail:[
      ["Dedicated 15 mm option","A useful first buy if your recurring repairs involve 15 mm copper and the cutter can turn freely around the pipe. The 1715C listing is the single 15 mm tool.","Skip if you need 22 mm or want one adjustable tool for several sizes. Check the listing carefully: Monument also offers packs with more than one size."],
      ["Dedicated 22 mm option","The 88822 is the 22 mm ROSLICE. It complements the 15 mm pick when both diameters come up regularly and you value a dedicated tool for each.","Skip if the pipe is 15 mm or another diameter. Do not assume a listing photo or the ROSLICE name identifies the size; check the model and selected variant."],
    ],
    faq:[
      ["Will a 15 mm pipe slice cut 22 mm copper?","No. A dedicated 15 mm cutter is sized for 15 mm outside diameter. Choose a dedicated 22 mm tool or an adjustable cutter rated for both."],
      ["Do I need two dedicated cutters?","Only if both sizes come up often enough to justify carrying two. For varied sizes and open access, an adjustable copper cutter is worth comparing."],
      ["Does a compact cutter work against a wall?","It still needs clearance to fit and rotate. Check the full path around the pipe before committing to a tool for that job."],
    ],
    images:[],
  },
} as const;
