import { sourceLabel } from "./claimSources";

export const homeContent = {
  hero: {
    eyebrow: "The Carbon Underground",
    kicker: "What if we could reinvent agriculture and help restore farming, food security, and the climate?",
    title: "We can. It all begins with Soil Intelligence.",
    lede:
      "No industry is more threatened by climate change than the one that feeds us. The Carbon Underground is advancing Soil Intelligence - the science of restoring living soil - to turn agriculture from a source of damage into one of the largest immediate opportunities for climate repair.",
    posterImage: "/images/library/brand-photography_undated_rick-van-der-haar-v0j9vnwpos8_0001-hero.jpg",
    mobilePoster: "/images/library/brand-photography_undated_rick-van-der-haar-v0j9vnwpos8_0001-hero.jpg",
    backgroundVideo: "/video/SplitGrassfield.mp4",
    filmPoster: "/images/library/people-programs-community_2011-06-29_dk-sow_0001.jpg",
    filmVideo: "/video/video-other-half-founder-film.mp4",
    filmEyebrow: "Founder film",
    filmTitle: "Larry Kopald on the long work of repair",
    filmText:
      "Larry explains why cutting emissions is only half the job, and why repairing depleted living systems belongs at the center of climate recovery.",
    filmLink: { label: "Read Larry's message", to: "/larrys-message" },
    actions: [
      { label: "Explore Edison", to: "/edison" },
      { label: "See the evidence", to: "/evidence", variant: "secondary" },
    ],
  },
  proofLead: {
    eyebrow: "Why this belongs in the field",
    lede:
      "Climate repair, food production, and institutional adoption meet on the same ground. The work becomes persuasive when those pressures are seen together.",
  },
  proofStrip: [
    {
      num: "01",
      label: "Climate",
      title: "Past emissions are still doing the damage",
      text: "The atmosphere is already carrying the carbon load that continues to shape heat, drought, and flood risk.",
    },
    {
      num: "02",
      label: "Food system",
      title: "Agriculture is exposed and implicated at the same time",
      text: "The way we grow food is vulnerable to climate disruption while also contributing materially to the crisis.",
    },
    {
      num: "03",
      label: "Institutional need",
      title: "Adoption depends on visible proof",
      text: "Growers, funders, and public institutions need research they can inspect, compare, and use.",
    },
  ],
  twoHalves: {
    eyebrow: "The other half",
    title: "One half without the other will not work.",
    lede:
      "Most climate work is focused on stopping future emissions. That remains essential. TCU focuses on the other half too: drawing down the excess carbon already overhead and returning it to living systems that can hold it.",
    cards: [
      {
        title: "Cut future emissions",
        text:
          "Reducing new greenhouse gases slows the damage still being added. It is necessary, urgent, and incomplete on its own.",
      },
      {
        title: "Repair legacy carbon",
        text:
          "Past emissions are still driving climate instability. Healthy soil, plants, and photosynthesis are part of nature's way of bringing carbon back into living cycles.",
      },
    ],
    action: { label: "Understand The Other Half", to: "/why" },
    visual: {
      eyebrow: "See the two jobs together",
      title: "Restraint slows the damage. Repair changes the ground underneath us.",
      text:
        "The contrast is the point: climate recovery has to address dry, stressed landscapes while rebuilding the living systems that hold carbon and water.",
      primary: {
        src: "/images/visuals/photo-bank/drought-mead.jpg",
        alt: "Low reservoir water level showing drought pressure",
        caption: "Water stress makes the cost of delay visible.",
      },
      secondary: {
        src: "/images/visuals/photo-bank/eco-delta-2018.jpg",
        alt: "Restored wetland and living landscape",
        caption: "Living systems show what repair has to rebuild.",
      },
    },
  },
  soilIntelligence: {
    eyebrow: "Soil Intelligence",
    title: "The missing climate technology is also the oldest one.",
    lede:
      "Soil Intelligence is TCU's practical frame for the science of living soil: how carbon, water, microbes, roots, crops, and farm decisions behave together when land is managed for regeneration.",
    points: [
      {
        title: "Nature as a working partner",
        text:
          "Photosynthesis already moves atmospheric carbon into plants and soil. The job is to restore the conditions that let that biological work continue.",
      },
      {
        title: "Food security inside climate repair",
        text:
          "The same living soil functions that store carbon can improve water holding, crop resilience, biodiversity, and farmer viability.",
      },
      {
        title: "Proof before scale",
        text:
          "Soil Intelligence becomes persuasive when it is measured on working land, translated clearly, and connected to adoption decisions.",
      },
    ],
  },
  soilCase: {
    eyebrow: "Why soil matters",
    title: "Living soil acts like climate and water infrastructure.",
    paragraphs: [
      "Healthy soil helps move carbon back into living cycles, improves infiltration, and reduces the volatility that growers face when drought and flood pressure rise together.",
      "That makes soil restoration more than a symbolic climate gesture. It becomes part of the practical work of protecting farmland, water systems, and food production.",
    ],
    stat: { value: "20,000 gal", label: "of water held per acre for every 1% gain in soil organic matter" },
    image: "/images/visuals/home/lemons-wide.webp",
    imageAlt: "Lemons growing in orchard rows",
    image2: "/images/visuals/support/field-support.webp",
    image2Alt: "Hands holding living soil and plants",
    image3: "/images/visuals/home/lemons-portrait.webp",
    image3Alt: "Portrait crop of lemons growing on a tree",
    facts: [
      "Soil condition influences how land absorbs, stores, and releases water.",
      "Biological soil function can improve resilience across carbon, biodiversity, and crop health.",
      "The strongest case for regenerative agriculture is operational, not rhetorical.",
    ],
  },
  edison: {
    eyebrow: "Announcing the launch",
    title: "The Carbon Underground is proud to announce the launch of The Edison Institute.",
    tagline: "Advancing the evolution of agriculture in an era of climate change.",
    body: [
      "The Edison Institute is a working farm and living laboratory in California's Central Valley. It studies three pressures together: the mutual impact of agriculture and climate change, the economics of transition, and the immediate threat of water shortages.",
      "That matters because the barrier to adoption is rarely inspiration alone. It is confidence: what transition looks like in practice, how long it takes, and what it changes for growers, supply chains, and communities.",
    ],
    image: "/images/visuals/photo-bank/water-sanluis-03.jpg",
    imageAlt: "Citrus farm pump station and irrigation infrastructure",
    caption:
      "One of the most agriculturally important and climate-stressed regions in the country is also one of the clearest places to study change.",
    cue: "Edison gives funders, growers, and institutions a place where theory is tested against real land, real water limits, and real operating decisions.",
    stats: [
      { value: "325", label: "acres dedicated to research and demonstration" },
      { value: "25%", label: "of the nation's food tied to the Central Valley" },
      { value: "40%", label: "of U.S. fruits and nuts connected to this region" },
      { value: "1%", label: "of U.S. farmland carrying outsized national importance" },
    ],
    details: [
      {
        title: "Baseline studies and monitoring",
        text: "The work starts with measuring soil, water, infrastructure, and farm condition so change can be tracked credibly over time.",
      },
      {
        title: "Carbon and research plans",
        text: "Field trials, research design, and a carbon farm plan help keep the science anchored in a coherent systems strategy.",
      },
      {
        title: "Education and implementation",
        text: "Student learning, grower engagement, and practical implementation are treated as part of the same long-term mission.",
      },
    ],
  },
  institutional: {
    eyebrow: "Institutional credibility",
    title: "Visible leadership and visible partners keep the case grounded.",
    lede:
      "Trust should not rest on abstraction. Leadership, governance, research relationships, and food-system partners should be clear early.",
    people: [
      {
        name: "Larry Kopald",
        role: "Founder",
        title: "Founder and president",
        summary:
          "Larry has spent decades connecting environmental communication, public persuasion, and the case for restoring living systems at scale.",
        image: "/images/people/person-larry-kopald-headshot.webp",
        alt: "Portrait of Larry Kopald",
      },
      {
        name: "Randi Fiat",
        role: "Leadership",
        title: "Director of strategic partnerships",
        summary:
          "Randi helps guide partnerships, alignment, and institutional continuity as the work expands across research, philanthropy, and public communication.",
        image: "/images/people/person-randi-fiat-headshot.webp",
        alt: "Portrait of Randi Fiat",
      },
      {
        name: "Zak Zaidman",
        role: "Leadership",
        title: "Programs and partnerships",
        summary:
          "Zak helps connect partnerships, program direction, and outward communication across the work.",
        image: "/images/people/person-zak-zaidman-headshot.jpg",
        alt: "Portrait of Zak Zaidman",
      },
    ],
    statements: [
      {
        title: "Research grounding",
        text: "CRARS and Edison tie the argument to field observation, agricultural realities, and long-term measurement.",
      },
      {
        title: "Food-system context",
        text: "Partners across agriculture and food help connect soil health to land stewardship, supply chains, and public consequence.",
      },
    ],
    logos: [
      {
        name: "CRARS",
        logo: "/images/partners/partner-crars-logo.png",
        alt: "CRARS logo",
        note: "Applied research close to the field.",
      },
      {
        name: "American Farmland Trust",
        logo: "/images/partners/partner-american-farmland-trust-logo.png",
        alt: "American Farmland Trust logo",
        note: "Working-land stewardship and agricultural credibility.",
      },
      {
        name: "General Mills",
        logo: "/images/partners/partner-general-mills-logo.png",
        alt: "General Mills logo",
        note: "Food-system institutions recognize the stakes.",
      },
      {
        name: "Danone",
        logo: "/images/partners/partner-danone-logo.png",
        alt: "Danone logo",
        note: "Regenerative agriculture has major institutional relevance.",
      },
    ],
  },
  evidenceSnapshot: {
    eyebrow: "Evidence snapshot",
    title: "Measured gains matter because they change how land handles stress.",
    lede:
      "Water buffering, carbon storage, and farm resilience do not sit in separate silos. The numbers below matter because they shape conditions on real farms.",
    stats: [
      {
        label: "Food-system emissions",
        value: "~1/3",
        detail: "Agrifood systems account for about one-third of human-made greenhouse-gas emissions, which is why agricultural transition matters so much.",
        sourceId: "foodSystemEmissions31",
        source: sourceLabel("foodSystemEmissions31"),
      },
      {
        label: "Water buffering",
        value: "20K gal",
        detail: "Per acre for every 1% soil organic matter gain in the imported SOM model used by TCU Stats.",
        icon: "/images/evidence/icon-water-infiltration.webp",
        sourceId: "soilWaterHolding20k",
        source: sourceLabel("soilWaterHolding20k"),
      },
      {
        label: "Carbon storage",
        value: "5.8 tons C",
        detail: "Per acre at the same example level, showing how soil condition changes atmospheric impact.",
        icon: "/images/evidence/icon-carbon-sequestered.webp",
        sourceId: "soilCarbon58",
        source: sourceLabel("soilCarbon58"),
      },
      {
        label: "Climate equivalent",
        value: "21.3 tons CO2e",
        detail: "An atmospheric equivalent that helps translate soil gains into language climate audiences already recognize.",
        icon: "/images/evidence/icon-carbon-moved.webp",
        sourceId: "climateEquivalent213",
        source: sourceLabel("climateEquivalent213"),
      },
    ],
  },
  fieldReel: {
    eyebrow: "Field proof reel",
    title: "The work needs to feel inspectable before it feels scalable.",
    text:
      "The visual system should keep visitors close to land, water, crops, infrastructure, and the people who have to make decisions in real conditions.",
    items: [
      {
        src: "/images/visuals/home/aerial-field.webp",
        alt: "Aerial view of working agricultural land",
        caption: "Working land at regional scale",
      },
      {
        src: "/images/visuals/photo-bank/subsidence-lucerne.jpg",
        alt: "Aqueduct infrastructure affected by subsidence",
        caption: "Water infrastructure under pressure",
      },
      {
        src: "/images/visuals/photo-bank/eco-delta-2019.jpg",
        alt: "Delta landscape showing water and restored habitat",
        caption: "Restored living systems",
      },
      {
        src: "/images/visuals/photo-bank/people-roberta-walker.jpg",
        alt: "Community members gathered around a public program table",
        caption: "Public participation",
      },
    ],
  },
  extension: {
    eyebrow: "Beyond the flagship",
    title: "Public participation and clear public understanding still matter.",
    lede:
      "Edison is the flagship proof engine. These supporting routes widen participation and make the core ideas easier to carry forward.",
    cards: [
      {
        title: "Adopt-A-Meter",
        tag: "Public participation",
        image: "/images/library/landscapes-wildflowers_2024-03-25_oroville-table-xm-mounain_0011.jpg",
        text: "A public-facing way to support restoration without losing the connection to land, evidence, and real outcomes.",
        bullets: ["A tangible first step", "Support tied to restoration", "A bridge into deeper commitment"],
        href: "/projects/adopt-a-meter",
        cta: "See Adopt-A-Meter",
      },
      {
        title: "Learn",
        tag: "Resource center",
        image: "/images/library/people-programs-community_undated_kids-fair_0004.jpg",
        text: "A compact library for visitors who need the core ideas around legacy carbon, soil, water, and regenerative agriculture clearly explained.",
        bullets: ["Climate and legacy carbon", "Soil and water basics", "Common questions and reading paths"],
        href: "/learn",
        cta: "Open Learn",
      },
    ],
  },
};

export const edisonSpotlight = {
  eyebrow: homeContent.edison.eyebrow,
  title: homeContent.edison.title,
  body: homeContent.edison.body,
  image: homeContent.edison.image,
  caption: homeContent.edison.caption,
  pillars: homeContent.edison.details.map((item) => ({
    title: item.title,
    text: item.text,
  })),
};
