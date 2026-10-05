import {plumberCategories} from './plumber-catalog';
import {electricianCategories} from "./electrician-catalog";
type GuideEditorial = {
  answer: string;
  note: string;
  criteria: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};
export const guideEditorial: Record<string, GuideEditorial> = {
  electricians: {
    answer:
      "Start with the Fluke 117 for everyday service work that benefits from LoZ and automatic AC/DC selection. Choose Fluke 115 for general measurements, Klein MM720 when the required CAT rating and temperature function matter, MM450 for a slimmer kit, or Southwire 14090T for Bluetooth records.",
    note: "The discontinued Klein MM600 has been replaced here with the MM720. These are alternatives for different jobs, not a ranking based on hands-on testing or live prices.",
    criteria: [
      {
        title: "Match the electrical environment",
        body: "Select a measurement category and voltage rating suitable for the intended work, including the leads. A voltage limit alone does not describe transient protection. Follow your training and the manufacturer's instructions.",
      },
      {
        title: "Choose the functions you will use",
        body: "LoZ can help evaluate misleading induced readings; temperature is useful for some diagnostic tasks. A handheld meter does not replace a clamp meter, insulation tester or a suitable safe-isolation procedure.",
      },
      {
        title: "Think about carrying and recording",
        body: "MM450 emphasizes a smaller format; Southwire adds a connected record workflow. Check app support if logging matters, and compare the complete kit rather than a bare instrument's headline features.",
      },
    ],
    faqs: [
      {
        q: "Fluke 117 or Fluke 115 for an electrician?",
        a: "117 is the more electrician-focused choice because of AutoVolt, VoltAlert and LoZ. 115 is the general-purpose alternative if those functions are not needed. Both need to meet the requirements of the intended measurement.",
      },
      {
        q: "Why is MM720 listed instead of MM600?",
        a: "Klein marks MM600 discontinued and identifies MM720 as its replacement. The MM720 review explains its CAT III 1000 V / CAT IV 600 V rating and low-impedance function.",
      },
      {
        q: "Does a non-contact tester prove a circuit is safe?",
        a: "No. Non-contact indication is not proof of absence of voltage. Use the appropriate instrument and safe-isolation procedure required by your training and workplace.",
      },
      {
        q: "Do I need True-RMS?",
        a: "It is useful for AC measurements on non-sinusoidal waveforms, within the meter's specified limits. It is not a substitute for the correct range, safety rating or measurement method.",
      },
    ],
  },
  plumbers: {
    answer:
      "Choose RIDGID CA-25 for a simple local view, Klein ET20 if a phone-based camera suits you, Teslong NTS300 for probe and screen options, DEPSTECH DS520 for a dual-view format, or Milwaukee 2323-21 when M12 batteries and saved images fit your existing kit.",
    note: "These are short-range inspection cameras, not complete sewer-camera systems. The Milwaukee pick is the 2323-21 M-SPECTOR 360 kit; the earlier 2317 reference described a different product.",
    criteria: [
      {
        title: "Access before image resolution",
        body: "Probe diameter, cable length and flexibility decide whether the camera can reach the area. Measure the available opening and buy the exact probe variant needed; a high pixel count cannot overcome an inaccessible route.",
      },
      {
        title: "Viewing versus evidence",
        body: "CA-25 emphasizes direct viewing. The other formats offer different capture workflows. If photographs are needed for a customer or report, verify storage and export rather than assuming every display camera records.",
      },
      {
        title: "Check the complete kit",
        body: "Phone compatibility matters for ET20. NTS300 and DS520 come in different camera and cable configurations. A probe's water-resistance rating does not make its screen, battery or entire assembly submersible.",
      },
    ],
    faqs: [
      {
        q: "Can these cameras survey a sewer line?",
        a: "They are aimed at local access and short-range inspection. Long drain runs generally require a purpose-built push-rod sewer camera with appropriate length, guidance and protection.",
      },
      {
        q: "Does the RIDGID CA-25 record video?",
        a: "It is primarily a view-only inspection monitor with video output, rather than an internal recording camera. Choose another option if saving evidence is central to the job.",
      },
      {
        q: "Is a waterproof probe enough for drain work?",
        a: "No. Check the permitted immersion, chemical exposure, cable and head design. The display housing may have a different protection rating.",
      },
      {
        q: "Single lens or dual lens?",
        a: "A side-facing view can help inspect alongside a cavity or pipe without turning the whole cable. It is worthwhile only if the exact kit includes the lens arrangement and probe size you need.",
      },
    ],
  },
  hvac: {
    answer:
      "Fieldpiece SM480V fits a Job Link-centered service kit. Testo 550s is the compact two-way option; Yellow Jacket TITANMAX adds a touchscreen four-way workflow. Elitech EMG-40V and CPS BMD200A offer other app-connected approaches, with kit contents and vacuum accessories needing careful comparison.",
    note: "The discontinued Yellow Jacket P51-870 has been replaced with TITANMAX 40881. CPS is now identified as BMD200A rather than the broad BLACKMAX family name. Refrigerant suitability must be checked for the exact model and current documentation.",
    criteria: [
      {
        title: "Two-way versus four-way",
        body: "A four-way manifold adds a dedicated connection path that may suit evacuation and charging. A compact two-way unit may be easier to carry. Compare your hose setup and existing instruments before treating more valves as an automatic upgrade.",
      },
      {
        title: "Pressure and vacuum are different",
        body: "A manifold's pressure display is not automatically a suitable evacuation measurement. Check whether a micron gauge or external vacuum probe is included, how it connects and where the manufacturer's procedure places it.",
      },
      {
        title: "Buy into the workflow deliberately",
        body: "Fieldpiece, Testo and CPS have distinct probe and app ecosystems. Check supported accessories, current refrigerant information, device compatibility and included clamps. A bare manifold and a complete wireless kit are different purchases.",
      },
    ],
    faqs: [
      {
        q: "Do all digital manifolds include a micron gauge?",
        a: "No. Some use an integrated vacuum measurement and others require a separate probe or accessory. Read the exact kit contents; do not assume a pressure sensor measures deep vacuum adequately.",
      },
      {
        q: "Are these automatically suitable for A2L refrigerants?",
        a: "Do not infer suitability from a digital display or refrigerant library. Check the manufacturer's current approval and instructions for the exact instrument, hoses and refrigerant, and use the required training and equipment.",
      },
      {
        q: "Why replace the P51-870?",
        a: "Yellow Jacket marks P51-870 discontinued. TITANMAX is the current touchscreen platform evaluated here, with its own specifications and accessories.",
      },
      {
        q: "Which is best if I already use wireless probes?",
        a: "Start with the ecosystem you already own, then verify model-specific compatibility. Reusing supported probes and a familiar reporting routine may matter more than a longer feature list.",
      },
    ],
  },
  "home-inspectors": {
    answer:
      "FLIR C5 is our documentation-focused pick. HIKMICRO B01 prioritizes native thermal detail in a standalone instrument. Klein TI250 is the simple standalone option, TOPDON TC001 suits compatible Android users, and FLIR TG165-X is the targeted spot-check format.",
    note: "Native detector resolution is different from display pixels or image enhancement. Current TI250 specifications differ from older documentation; confirm the version supplied. None of these cameras proves the cause of a temperature anomaly by itself.",
    criteria: [
      {
        title: "Compare native thermal pixels",
        body: "B01 and TC001 specify 256 × 192; C5 specifies 160 × 120; TG165-X specifies 80 × 60. Screen resolution and visual overlays do not increase measured detector pixels. Resolution is only one part of useful image quality.",
      },
      {
        title: "Plan the report",
        body: "Thermal findings need an identifiable object, location and inspection context. C5 emphasizes visible-image context and transfer. Phone attachments share the host's display and battery; standalone cameras add a separate charging and export routine.",
      },
      {
        title: "Confirm the cause",
        body: "Thermal cameras observe surface temperature patterns. Reflections, environmental conditions and surface properties affect the image. Confirm suspected moisture or defects with appropriate further assessment rather than reporting a color as a diagnosis.",
      },
    ],
    faqs: [
      {
        q: "Can a thermal camera see through walls?",
        a: "No. It detects infrared radiation from visible surfaces. Hidden conditions may influence a surface pattern, but that pattern does not establish what is behind the wall.",
      },
      {
        q: "Is TC001 compatible with iPhone?",
        a: "The manufacturer lists the standard TC001 for supported Android devices and Windows computers. A USB-C connector is not proof of iPhone compatibility.",
      },
      {
        q: "Does FLIR MSX add thermal pixels?",
        a: "No. It overlays visible-image detail to help identify objects. Compare the native thermal detector separately.",
      },
      {
        q: "Do thermal cameras replace moisture meters?",
        a: "No. A temperature anomaly can suggest an area to investigate. Moisture requires independent confirmation using an appropriate assessment.",
      },
    ],
  },
};

for (const c of electricianCategories) guideEditorial[c.slug]={answer:c.answer,note:c.note,criteria:c.criteria,faqs:c.faqs};

for (const c of plumberCategories) guideEditorial[c.slug] = {answer:c.answer,note:c.note,criteria:c.criteria,faqs:c.faqs};
