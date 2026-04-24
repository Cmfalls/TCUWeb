import { sourceLabel } from "./claimSources";

export const evidenceContent = {
  meta: {
    title: "Evidence | The Carbon Underground",
    description:
      "A visual evidence brief on living soil, carbon drawdown, water resilience, food security, and field proof through The Edison Institute.",
  },
  hero: {
    eyebrow: "Evidence",
    title: "Climate recovery needs proof people can stand on.",
    lede:
      "Cutting future emissions is essential. It is not the whole climate job. The atmosphere is already carrying legacy carbon, agriculture is under pressure from climate change, and the food system itself is part of the problem.",
    text:
      "The evidence below shows why living soil belongs in the climate conversation: it stores carbon, holds water, supports farm economics, and gives institutions a practical place to test what restoration can change.",
    primary: { label: "Open TCU Stats", href: "/evidence-hub/index.html" },
    secondary: { label: "See Edison", to: "/edison" },
    visuals: [
      {
        src: "/images/visuals/photo-bank/drought-mono.jpg",
        alt: "United States drought monitor map",
        caption: "Drought pressure is visible before it reaches the field.",
      },
      {
        src: "/images/visuals/photo-bank/subsidence-lucerne.jpg",
        alt: "Aqueduct infrastructure affected by subsidence",
        caption: "Water stress is also an infrastructure problem.",
      },
    ],
  },
  missionClaim: {
    eyebrow: "The proof standard",
    title: "Rebuild the soil. Store the carbon. Hold the water. Strengthen food security.",
    text:
      "That is the evidence standard for The Carbon Underground. Soil health is not a slogan here. It has to be measured across carbon, water, farm performance, and real operating conditions.",
    proofLines: [
      "The Other Half: draw down part of the carbon already overhead.",
      "Food security: protect the working land that feeds people.",
      "Field proof: test claims under real climate, water, and economic pressure.",
    ],
  },
  proofDashboard: {
    eyebrow: "Evidence dashboard",
    title: "Four numbers make the climate case concrete.",
    text:
      "The public case gets stronger when climate risk, soil function, water buffering, and farm viability can be read together.",
    metrics: [
      {
        id: "food-system-emissions",
        sourceId: "foodSystemEmissions31",
        value: "~1/3",
        label: "Agrifood-system emissions",
        detail:
          "Agrifood systems account for about one-third of human-made greenhouse-gas emissions, so agricultural transition belongs inside climate strategy.",
        source: sourceLabel("foodSystemEmissions31"),
      },
      {
        id: "water-buffered",
        sourceId: "soilWaterHolding20k",
        value: "20K gal",
        label: "Water buffered",
        detail:
          "Per acre for every 1% soil organic matter gain in the SOM readout, translating soil health into water resilience.",
        source: sourceLabel("soilWaterHolding20k"),
      },
      {
        id: "carbon-stored",
        sourceId: "soilCarbon58",
        value: "5.8 tons C",
        label: "Carbon stored",
        detail:
          "Per acre at the same SOM example level, showing how soil condition changes the climate math on working land.",
        source: sourceLabel("soilCarbon58"),
      },
      {
        id: "climate-equivalent",
        sourceId: "climateEquivalent213",
        value: "21.3 tons CO2e",
        label: "Climate equivalent",
        detail:
          "A drawdown equivalent that translates soil carbon gains into climate language audiences already use.",
        source: sourceLabel("climateEquivalent213"),
      },
    ],
  },
  proofPath: {
    eyebrow: "How to read the proof",
    title: "Follow the argument from risk to field evidence.",
    lede:
      "The page moves from system-wide climate and food risk, into measurable soil function, then into Central Valley field context and the source trail behind the claims.",
    steps: [
      { label: "Dashboard", href: "#evidence-dashboard", text: "Four headline metrics." },
      { label: "Scale", href: "#evidence-scale", text: "Why delay is costly." },
      { label: "Field context", href: "#evidence-field-context", text: "Where the work is tested." },
      { label: "Source trail", href: "#evidence-source-trail", text: "What backs the claims." },
    ],
  },
  crisisStats: {
    eyebrow: "The scale of the problem",
    title: "The numbers that make inaction unthinkable.",
    stats: [
      {
        id: "crop-calories-24",
        sourceId: "cropCalories24",
        value: "24%",
        label: "potential global staple-crop calorie decline by 2100 under high-emissions warming",
        source: sourceLabel("cropCalories24"),
      },
      {
        id: "residual-climate-300-1000",
        sourceId: "residualClimate3001000",
        value: "300-1,000",
        label: "years post carbon neutrality before climate heals - without active drawdown",
        source: sourceLabel("residualClimate3001000"),
      },
    ],
  },
  foodClimateBridge: {
    eyebrow: "Food, climate, and land",
    title: "The climate story runs through the ground that feeds us.",
    text:
      "No industry is more threatened by climate change than agriculture, and few systems are more important to changing the outcome. Heat, drought, water scarcity, soil degradation, and farm economics arrive together in the same fields.",
    image: "/images/library/brand-photography_undated_zoe-richardson-d-vjfp1ds1y_0001.jpg",
    imageAlt: "Person planting seedlings in a working field",
    callout:
      "Evidence has to show more than carbon. It has to show whether land can keep producing food under rising stress.",
    signals: [
      "Legacy carbon keeps shaping heat, drought, flood, and water risk.",
      "Living soil can improve water behavior while storing carbon.",
      "Adoption depends on field results that growers and institutions trust.",
    ],
  },
  pillarEvidence: {
    eyebrow: "Three connected pillars",
    title: "Carbon, water, and economics are one field system.",
    text:
      "The strongest evidence does not isolate the climate claim from farm reality. It follows the same land through carbon storage, water behavior, biological function, and economic resilience.",
    pillars: [
      {
        kicker: "Carbon drawdown",
        title: "Soil is a living carbon bank.",
        text:
          "Soil carbon loss helped create part of the climate imbalance. Restoring soil structure and biology is one way working land can help move carbon back into living cycles.",
        metric: "0.30-1.00",
        unit: "Mg C/ha/yr",
        note: "Range represented in TCU Stats for regenerative practice carbon gains.",
        image: "/images/library/brand-photography_undated_viktor-talashuk-na5sul7hqr0_0001.jpg",
        imageAlt: "Dark soil profile beneath grass and stone",
        signals: ["Soil carbon pools", "Microbial life", "Practice-based gains"],
      },
      {
        kicker: "Water resilience",
        title: "Healthier soil changes how land handles water.",
        text:
          "Soil organic matter, aggregation, and roots can change infiltration, storage, runoff, and drought response. That makes soil function a public water issue, not only an agronomic one.",
        metric: "+35%",
        unit: "infiltration",
        note: "Cover-crop infiltration improvement represented in the Soil Stats water pillar.",
        image: "/images/evidence/aquifer-irrigation.webp",
        imageAlt: "Irrigation moving across a working crop field",
        signals: ["Infiltration", "Water holding", "Aquifer pressure"],
      },
      {
        kicker: "Farm economics",
        title: "Adoption depends on whether the transition works.",
        text:
          "Growers face cost, timing, risk, yield, and water constraints. Climate evidence matters more when it also explains why healthier soil can make operational and financial sense.",
        metric: "+78%",
        unit: "profit",
        note: "Regenerative profitability signal represented in the Soil Stats economics pillar.",
        image: "/images/evidence/agronomist-clipboard-inspecting-red-green-lettuce-rows.jpeg",
        imageAlt: "Agronomist inspecting red and green lettuce rows with a clipboard",
        signals: ["Input pressure", "Risk buffering", "Long-term resilience"],
      },
    ],
  },
  somReadoutIntro: {
    eyebrow: "Interactive readout",
    title: "Use soil organic matter to see the system move.",
    text:
      "The SOM readout turns one soil change into several visible outcomes at once: water buffered, carbon stored, atmospheric equivalent, infiltration, and microbial response.",
  },
  centralValleyEvidence: {
    eyebrow: "Edison field context",
    title: "The Central Valley is where food security, water stress, and climate risk meet.",
    text:
      "Edison matters because the region is both nationally important and visibly exposed. It concentrates food production, water pressure, climate stress, jobs, and farm decision-making in one landscape.",
    image: "/images/visuals/photo-bank/subsidence-lucerne.jpg",
    imageAlt: "Aqueduct infrastructure affected by subsidence",
    caption:
      "The evidence becomes more consequential when it is tested in a place where land, water, food, and economics are already under pressure.",
    stats: [
      {
        sourceId: "centralValleyFood25",
        value: "25%",
        label: "of the nation's food tied to the Central Valley",
      },
      {
        sourceId: "centralValleyFarmland1",
        value: "1%",
        label: "of U.S. farmland carrying outsized national importance",
      },
      {
        sourceId: "valleyWaterDecline20",
        value: "20%",
        label: "possible regional water-supply decline by 2040",
      },
      {
        value: "50K",
        label: "jobs threatened if that decline accelerates",
      },
    ],
    consequences: [
      {
        title: "Food concentration",
        text: "A region that produces so much food cannot be treated as a local agricultural issue alone.",
      },
      {
        title: "Water limits",
        text: "Drought, groundwater pressure, subsidence, and allocation risk turn soil function into infrastructure.",
      },
      {
        title: "Field proof",
        text: "Edison gives the broader climate claim a place to be tested against real farm decisions.",
      },
    ],
  },
  visualProof: {
    eyebrow: "Visual proof",
    title: "The evidence gets clearer when the system can be seen.",
    text:
      "Maps, soil images, field comparisons, and infrastructure stress help visitors understand why the same evidence has climate, water, food, and institutional consequences.",
    items: [
      {
        tag: "Land condition",
        title: "Management changes become visible.",
        text:
          "Before-and-after field imagery makes soil cover, root presence, and land condition easier to understand than claims alone.",
        image: "/images/visuals/photo-bank/eco-delta-2019.jpg",
        imageAlt: "Delta landscape showing water and restored habitat",
      },
      {
        tag: "Soil biology",
        title: "Carbon moves through living systems.",
        text:
          "Roots, fungi, microbes, aggregation, and organic matter are the biological machinery behind drawdown and resilience.",
        image: "/images/visuals/photo-bank/agri-antelope-07.jpg",
        imageAlt: "Close view of citrus fruit and leaves",
      },
      {
        tag: "Water pressure",
        title: "Stress is visible beyond the field.",
        text:
          "Drought maps, aquifer stress, and infrastructure damage show why soil-water evidence has public stakes.",
        image: "/images/visuals/photo-bank/drought-mono.jpg",
        imageAlt: "United States drought monitor map",
      },
    ],
  },
  deepStatsBridge: {
    eyebrow: "Deep evidence",
    title: "TCU Stats carries the full evidence library.",
    text:
      "Evidence is the public brief. TCU Stats is the deeper destination for interactive visuals, claim inventory, pillar-specific context, and a longer technical trail.",
    action: { label: "Open TCU Stats", href: "/evidence-hub/index.html" },
    secondary: { label: "Explore Edison", to: "/edison" },
    image: "/images/visuals/photo-bank/brand-bruno.jpg",
    imageAlt: "Citrus fruit and leaves in an orchard",
  },
  sourceGroups: [
    {
      label: "Core references",
      title: "TCU Stats and evidence synthesis",
      description:
        "Primary material informing the SOM readout, dashboard metrics, pillar evidence, and public-facing summaries above.",
      items: [
        {
          title: "TCU Stats overview and SOM slider",
          note: "Primary source for the interactive soil organic matter readout and headline soil, water, and carbon metrics.",
          strength: "Primary",
          href: "/evidence-hub/index.html",
        },
        {
          title: "TCU Stats carbon, water, and economics pillars",
          note: "Evidence synthesis used to connect soil carbon, water security, farm economics, and food-system resilience.",
          strength: "Primary",
          href: "/evidence-hub/index.html",
        },
      ],
    },
    {
      label: "Field and institutional context",
      title: "Edison and Central Valley source materials",
      description:
        "Reviewed Edison and TCU source materials that ground the evidence in food security, water pressure, and field proof.",
      items: [
        {
          title: "The Edison Institute case for giving and funder deck",
          note: "Source context for the farm-based R&D role, food and water insecurity framing, and Central Valley stakes.",
          strength: "Primary",
        },
        {
          title: "New TCU website draft and TCU mission materials",
          note: "Source context for The Other Half, Soil Intelligence, food security, and the public climate argument.",
          strength: "Primary",
        },
      ],
    },
  ],
};
