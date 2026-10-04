export type Product = { role:string; brand:string; model:string; url:string };
export type Hub = { slug:string; name:string; blurb:string; image:string };
export type Guide = { trade:string; tradeName:string; slug:string; title:string; keyword:string; meta:string; cluster:string; products:Product[] };

export const hubs: Hub[] = [
  {slug:"electricians", name:"Electricians", blurb:"Meters, testers, wire tools, lighting, storage and jobsite essentials.", image:"https://images.pexels.com/photos/29491360/pexels-photo-29491360.jpeg?cs=srgb&dl=pexels-elvan-lam-1105439946-29491360.jpg&fm=jpg"},
  {slug:"plumbers", name:"Plumbers", blurb:"Inspection, drain, pipe, leak detection, pumps and service-call gear.", image:"https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?cs=srgb&dl=pexels-ar-abnoy-536397811-16509869.jpg&fm=jpg"},
  {slug:"hvac", name:"HVAC Technicians", blurb:"Manifolds, vacuum tools, leak detection, meters and recovery equipment.", image:"https://images.pexels.com/photos/5463582/pexels-photo-5463582.jpeg?cs=srgb&dl=pexels-jose-andres-pacheco-cortes-3641213-5463582.jpg&fm=jpg"},
  {slug:"home-inspectors", name:"Home Inspectors", blurb:"Thermal imaging, moisture, electrical, gas, ladders and inspection tools.", image:"https://images.pexels.com/photos/8293640/pexels-photo-8293640.jpeg?cs=srgb&dl=pexels-rdne-8293640.jpg&fm=jpg"}
];

export const guides: Guide[] = [
 {trade:"electricians",tradeName:"Electricians",slug:"best-multimeters-for-electricians",title:"Best Multimeters for Electricians",keyword:"electrician multimeter",meta:"Compare five strong multimeter candidates for US electricians, with a fast shortlist and clear trade-specific buying criteria.",cluster:"Testing & Measurement",products:[
  {role:"Best Overall",brand:"Fluke",model:"117 Electrician's Multimeter",url:"https://www.amazon.com/dp/B01IH41CUW/ref=nosim?tag=robbieom0e-20"},
  {role:"Best Value",brand:"Fluke",model:"115 Compact True-RMS Digital Multimeter",url:"https://www.amazon.com/s?k=Fluke+115+Compact+True-RMS+Digital+Multimeter&tag=robbieom0e-20"},
  {role:"Best Premium",brand:"Klein Tools",model:"MM600 Auto-Ranging Digital Multimeter",url:"https://www.amazon.com/s?k=Klein+Tools+MM600+Auto-Ranging+Digital+Multimeter&tag=robbieom0e-20"},
  {role:"Best Compact",brand:"Klein Tools",model:"MM450 HVAC/Auto-Ranging Multimeter",url:"https://www.amazon.com/s?k=Klein+Tools+MM450+HVAC%2FAuto-Ranging+Multimeter&tag=robbieom0e-20"},
  {role:"Best Alternative",brand:"Southwire",model:"14090T TechnicianPRO Bluetooth Multimeter",url:"https://www.amazon.com/s?k=Southwire+14090T+TechnicianPRO+Bluetooth+Multimeter&tag=robbieom0e-20"}
 ]},
 {trade:"plumbers",tradeName:"Plumbers",slug:"best-inspection-cameras-for-plumbers",title:"Best Inspection Cameras for Plumbers",keyword:"plumbing inspection camera",meta:"Compare five inspection camera candidates for US plumbers and service technicians, organized around access, visibility and field use.",cluster:"Inspection & Diagnostics",products:[
  {role:"Best Overall",brand:"RIDGID",model:"micro CA-25 Handheld Inspection Camera",url:"https://www.amazon.com/s?k=RIDGID+micro+CA-25+Handheld+Inspection+Camera&tag=robbieom0e-20"},
  {role:"Best Value",brand:"Klein Tools",model:"ET20 WiFi Borescope",url:"https://www.amazon.com/s?k=Klein+Tools+ET20+WiFi+Borescope&tag=robbieom0e-20"},
  {role:"Best Premium",brand:"Teslong",model:"NTS300 Industrial Endoscope",url:"https://www.amazon.com/s?k=Teslong+NTS300+Industrial+Endoscope&tag=robbieom0e-20"},
  {role:"Best Compact",brand:"DEPSTECH",model:"DS520 Dual-Lens Inspection Camera",url:"https://www.amazon.com/s?k=DEPSTECH+DS520+Dual-Lens+Inspection+Camera&tag=robbieom0e-20"},
  {role:"Best Alternative",brand:"Milwaukee",model:"2317-20 M12 M-Spector 360 Inspection Camera",url:"https://www.amazon.com/s?k=Milwaukee+2317-20+M12+M-Spector+360+Inspection+Camera&tag=robbieom0e-20"}
 ]},
 {trade:"hvac",tradeName:"HVAC Technicians",slug:"best-digital-manifolds-for-hvac",title:"Best Digital Manifolds for HVAC",keyword:"digital HVAC manifold",meta:"Compare five digital manifold candidates for US HVAC technicians, with a shortlist built around real service and commissioning work.",cluster:"Refrigeration & Diagnostics",products:[
  {role:"Best Overall",brand:"Fieldpiece",model:"SM480V SMAN Digital Manifold and Micron Gauge",url:"https://www.amazon.com/s?k=Fieldpiece+SM480V+SMAN+Digital+Manifold+and+Micron+Gauge&tag=robbieom0e-20"},
  {role:"Best Value",brand:"Testo",model:"550s Digital Manifold Kit",url:"https://www.amazon.com/s?k=Testo+550s+Digital+Manifold+Kit&tag=robbieom0e-20"},
  {role:"Best Premium",brand:"Yellow Jacket",model:"P51-870 TITAN Digital Manifold",url:"https://www.amazon.com/s?k=Yellow+Jacket+P51-870+TITAN+Digital+Manifold&tag=robbieom0e-20"},
  {role:"Best Compact",brand:"Elitech",model:"EMG-40 Digital HVAC Manifold Gauge",url:"https://www.amazon.com/s?k=Elitech+EMG-40+Digital+HVAC+Manifold+Gauge&tag=robbieom0e-20"},
  {role:"Best Alternative",brand:"CPS",model:"BLACKMAX Digital Manifold",url:"https://www.amazon.com/s?k=CPS+BLACKMAX+Digital+Manifold&tag=robbieom0e-20"}
 ]},
 {trade:"home-inspectors",tradeName:"Home Inspectors",slug:"best-thermal-cameras-for-home-inspectors",title:"Best Thermal Cameras for Home Inspectors",keyword:"thermal camera home inspector",meta:"Compare five thermal camera candidates for US home inspectors, focused on practical inspection workflows and fast field interpretation.",cluster:"Thermal & Moisture",products:[
  {role:"Best Overall",brand:"FLIR",model:"C5 Compact Thermal Imaging Camera",url:"https://www.amazon.com/s?k=FLIR+C5+Compact+Thermal+Imaging+Camera&tag=robbieom0e-20"},
  {role:"Best Value",brand:"HIKMICRO",model:"B01 Handheld Thermal Camera",url:"https://www.amazon.com/s?k=HIKMICRO+B01+Handheld+Thermal+Camera&tag=robbieom0e-20"},
  {role:"Best Premium",brand:"Klein Tools",model:"TI250 Rechargeable Thermal Imager",url:"https://www.amazon.com/s?k=Klein+Tools+TI250+Rechargeable+Thermal+Imager&tag=robbieom0e-20"},
  {role:"Best Compact",brand:"TOPDON",model:"TC001 Thermal Imaging Camera for Android",url:"https://www.amazon.com/s?k=TOPDON+TC001+Thermal+Imaging+Camera+for+Android&tag=robbieom0e-20"},
  {role:"Best Alternative",brand:"FLIR",model:"TG165-X MSX Thermal Camera",url:"https://www.amazon.com/s?k=FLIR+TG165-X+MSX+Thermal+Camera&tag=robbieom0e-20"}
 ]}
];

export function getHub(slug:string){ return hubs.find(h=>h.slug===slug); }
export function getGuide(trade:string,slug:string){ return guides.find(g=>g.trade===trade&&g.slug===slug); }
