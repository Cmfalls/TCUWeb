export const sourceTrailIntro = {
  eyebrow: "The Other Half",
  title: "The key claims now have a public trail.",
  lede:
    "The highest-stakes numbers used on this site — each traceable to a source note or TCU evidence reference.",
};

export const sourceTrailFilters = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "water", label: "Water" },
  { id: "carbon", label: "Carbon" },
  { id: "time", label: "Time" },
  { id: "contest", label: "Contested" },
];

export const sourceTrailClaims = [
  {
    id: "food-system-emissions",
    index: "01",
    tag: "food",
    label: "Food System",
    displayValue: "~1/3",
    unit: "Of all GHG",
    title: "Agricultural systems account for about one-third of all human-made greenhouse gas emissions.",
    description:
      "Food systems account for around 30% of global GHG emissions, including land use, production, and supply chains.",
    sourceLines: ["Crippa et al.,", "Nature Food 2021;", "IPCC AR6 WGIII"],
    detailBlocks: [
      {
        label: "The Claim",
        text:
          "Food systems, including production, land use change, and supply chains, contribute roughly one-third of global greenhouse gas emissions, making agriculture both a major source and a key lever.",
      },
      {
        label: "Why It Matters",
        text:
          "This makes agricultural transition not a peripheral issue but a central requirement for any serious climate strategy. The same land that emits can sequester.",
      },
      {
        label: "Sources",
        sources: ["Crippa et al., Nature Food 2021", "IPCC AR6 Working Group III", "TCU evidence synthesis"],
      },
    ],
  },
  {
    id: "water-buffering",
    index: "02",
    tag: "water",
    label: "Water Buffering",
    displayValue: "20K",
    unit: "Gallons / acre",
    title: "Each 1% gain in soil organic matter can add 20,000 gallons of water-holding capacity per acre.",
    description:
      "Soil organic matter acts as a water reservoir. A 1% SOM gain in the imported SOM model used by TCU Stats translates to roughly 20,000 gallons per acre per year.",
    sourceLines: ["USDA NRCS soil", "health; Bryant et al.;", "TCU SOM model"],
    detailBlocks: [
      {
        label: "The Claim",
        text:
          "Each percentage point increase in soil organic matter allows the soil to hold approximately 20,000 additional gallons of water per acre, reducing runoff, improving drought resilience, and lowering irrigation demand.",
      },
      {
        label: "Why It Matters",
        text:
          "This makes soil health a water infrastructure question, not just an agricultural one. In the Central Valley and drought-prone regions, SOM improvement is a direct climate adaptation tool.",
      },
      {
        label: "Sources",
        sources: ["USDA NRCS Soil Health Guidelines", "Bryant et al. water retention research", "TCU SOM model derivation"],
      },
    ],
  },
  {
    id: "carbon-storage",
    index: "03",
    tag: "carbon",
    label: "Carbon Storage",
    displayValue: "5.8",
    unit: "Tons C / acre",
    title: "A 1% soil organic matter gain stores 5.8 tons of carbon per acre at the SOM model level.",
    description:
      "Per acre at the same example level, showing how soil condition changes atmospheric impact. Belowground carbon capital stored in living soil.",
    sourceLines: ["TCU SOM-to-C", "conversion; USDA", "NRCS; Lal, Science 2004"],
    detailBlocks: [
      {
        label: "The Claim",
        text:
          "At the SOM-to-carbon conversion used in TCU Stats, a 1% SOM gain stores approximately 5.8 tons of carbon per acre as living belowground capital, measurable, persistent, and scalable.",
      },
      {
        label: "Why It Matters",
        text:
          "This connects soil management directly to atmospheric carbon accounting. At scale across millions of acres, the sequestration potential is significant and verifiable.",
      },
      {
        label: "Sources",
        sources: ["TCU SOM-to-C conversion model", "USDA NRCS carbon guidelines", "Lal, Science 2004"],
      },
    ],
  },
  {
    id: "climate-equivalent",
    index: "04",
    tag: "carbon",
    label: "Climate Equivalent",
    displayValue: "21.3",
    unit: "Tons CO2e",
    title:
      "The 5.8 tons of stored carbon converts to about 21.3 tons of CO2 equivalent using the standard x3.67 conversion.",
    description:
      "An atmospheric equivalent that helps translate soil gains into language climate audiences already recognize. C x 3.67 = CO2e.",
    sourceLines: ["IPCC carbon-to-CO2", "standard; TCU", "derived"],
    detailBlocks: [
      {
        label: "The Conversion",
        text:
          "Carbon (C) to CO2 equivalent uses the standard atomic weight ratio: C x 3.67 = CO2e. This is the IPCC-standard conversion, not a TCU-specific adjustment.",
      },
      {
        label: "Why It Matters",
        text:
          "Most climate communication uses CO2e units. Expressing soil carbon gains in CO2e makes the comparison legible to funders, policymakers, and the public without inflating the underlying science.",
      },
      {
        label: "Sources",
        sources: ["IPCC carbon-to-CO2 standard conversion", "TCU Stats derived application"],
      },
    ],
  },
  {
    id: "food-land-use-emissions",
    index: "05",
    tag: "food",
    label: "Food System",
    displayValue: "24%",
    unit: "Of global GHG",
    title:
      "Some estimates place food and land-use emissions closer to 24%, making agriculture the hardest sector to decarbonize.",
    description:
      "Studies of Food and Land-Use Coalition estimates and Shukla et al. confirm food systems' outsized emissions share while identifying regional variation as highest difficulty for transition.",
    sourceLines: ["Food and Land-Use", "Coalition; Shukla", "et al., IPCC 2019"],
    detailBlocks: [
      {
        label: "The Range",
        text:
          "Estimates range from about 21% to 37% depending on what is included: production only, full supply chain, land-use change, or food waste. TCU uses about one-third as a conservative synthesis figure, with 24% as the production-focused lower bound.",
      },
      {
        label: "Why It Matters",
        text:
          "Agriculture is uniquely difficult to decarbonize through technology substitution alone. Biological regeneration is the primary available tool, making soil health a climate imperative, not a niche practice.",
      },
      {
        label: "Sources",
        sources: ["Food and Land-Use Coalition (FOLU)", "Shukla et al., IPCC 2019 SRCCL", "TCU synthesis note"],
      },
    ],
  },
  {
    id: "one-percent-solution",
    index: "06",
    tag: "contest",
    label: "Contested Claim",
    displayValue: "0.4%",
    unit: "Contested",
    title: 'The "1% solution" idea is a contested but consequential public claim in the soil and climate space.',
    description:
      "The 4 per mille initiative suggests increasing soil carbon by 0.4% per year globally could offset annual fossil fuel emissions. TCU is a supporter but this claim requires careful context.",
    sourceLines: ["4 per mille", "initiative; Minasny", "et al., GCB 2017"],
    detailBlocks: [
      {
        label: "The Claim",
        text:
          "The 4 per mille initiative proposes that a 0.4% annual increase in soil carbon globally would theoretically offset all annual fossil fuel CO2 emissions. TCU supports this framing as directionally important.",
      },
      {
        label: "The Contest",
        text:
          "Critics note that global uniformity is unrealistic and that not all soils can sequester at that rate. TCU treats this as an aspirational framing that highlights scale, not a site-specific target.",
      },
      {
        label: "Sources",
        sources: ["4 per mille initiative (2015)", "Minasny et al., Global Change Biology 2017", "TCU position note"],
      },
    ],
  },
  {
    id: "atmospheric-persistence",
    index: "07",
    tag: "time",
    label: "Time Scale",
    displayValue: "300+",
    unit: "Years in sky",
    title:
      "Without active drawdown, excess atmospheric carbon will continue affecting climate for hundreds to thousands of years.",
    description:
      "NOAA carbon cycle research indicates that while some CO2 is absorbed relatively quickly, a substantial fraction persists in the atmosphere for centuries, making active removal essential.",
    sourceLines: ["NOAA carbon cycle", "research; Archer", "et al., 2009"],
    detailBlocks: [
      {
        label: "The Claim",
        text:
          "CO2 in the atmosphere is not rapidly neutralized. NOAA carbon cycle research indicates a significant fraction persists for 300-1,000 years, meaning emissions today affect climate centuries from now even if we stop emitting tomorrow.",
      },
      {
        label: "The Implication",
        text:
          "Stopping emissions alone does not remove existing damage. Active drawdown is a separate and necessary task: the atmosphere will not self-correct on any policy-relevant timescale.",
      },
      {
        label: "Sources",
        sources: ["NOAA carbon cycle research", "Archer et al., 2009 atmospheric lifetime", "TCU evidence synthesis"],
      },
    ],
  },
];
