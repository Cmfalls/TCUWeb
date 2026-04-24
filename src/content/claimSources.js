export const claimSources = {
  foodSystemEmissions31: {
    id: "foodSystemEmissions31",
    value: "~1/3",
    claim: "Agrifood systems account for about one-third of global anthropogenic greenhouse-gas emissions.",
    source: "FAO agrifood systems emissions update, 2025; Crippa et al., Nature Food, 2021",
    reference: "TCU Stats food-system synthesis",
    href: "https://www.fao.org/statistics/highlights-archive/highlights-detail/greenhouse-gas-emissions-from-agrifood-systems.-global--regional-and-country-trends--2001-2023/en",
    lastReviewed: "April 2026",
  },
  soilWaterHolding20k: {
    id: "soilWaterHolding20k",
    value: "20,000 gal",
    claim: "Each 1% gain in soil organic matter can add roughly 20,000 gallons of water-holding capacity per acre.",
    source: "USDA NRCS soil health guidance; Bryant et al. water-holding estimate; TCU SOM model",
    reference: "TCU Stats SOM readout",
    href: "/evidence-hub/index.html",
    lastReviewed: "April 2026",
  },
  soilCarbon58: {
    id: "soilCarbon58",
    value: "5.8 tons C",
    claim: "A 1% soil organic matter gain in the site model corresponds to about 5.8 tons of carbon stored per acre.",
    source: "TCU SOM-to-carbon conversion; USDA NRCS soil carbon standards; Lal, Science, 2004",
    reference: "TCU Stats SOM model",
    href: "/evidence-hub/index.html",
    lastReviewed: "April 2026",
  },
  climateEquivalent213: {
    id: "climateEquivalent213",
    value: "21.3 tons CO2e",
    claim: "The 5.8 tons of stored carbon converts to about 21.3 tons CO2e using the standard 3.67 carbon-to-CO2 ratio.",
    source: "IPCC carbon-to-CO2 conversion standard; TCU derived equivalent",
    reference: "TCU Stats derived equivalent",
    href: "/evidence-hub/index.html",
    lastReviewed: "April 2026",
  },
  cropCalories24: {
    id: "cropCalories24",
    value: "24%",
    claim: "Under high-emissions warming, global staple-crop calories could fall by 24% by 2100, with major breadbasket regions among the hardest hit.",
    source: "Stanford Doerr School of Sustainability crop-yield modeling summary",
    reference: "TCU evidence packet: food-security risk",
    href: "https://sustainability.stanford.edu/news/climate-change-cuts-global-crop-yields-even-when-farmers-adapt",
    lastReviewed: "April 2026",
  },
  soilLifespanCaution: {
    id: "soilLifespanCaution",
    value: "contested",
    claim: "The '60 harvests' line is a contested communications shorthand; the safer public claim is that soil degradation is urgent and region-specific.",
    source: "Our World in Data review of soil-lifespan claims",
    reference: "TCU evidence packet: soil degradation urgency",
    href: "https://ourworldindata.org/soil-lifespans",
    lastReviewed: "April 2026",
  },
  residualClimate3001000: {
    id: "residualClimate3001000",
    value: "300-1,000 years",
    claim: "Without active drawdown, excess atmospheric carbon can continue affecting climate for centuries after emissions stop.",
    source: "NOAA carbon-cycle and atmospheric persistence summaries",
    reference: "TCU evidence packet: legacy carbon",
    lastReviewed: "April 2026",
  },
  centralValleyFarmland1: {
    id: "centralValleyFarmland1",
    value: "1%",
    claim: "The Central Valley represents a very small share of U.S. farmland while carrying outsized food-system importance.",
    source: "California Fourth Climate Assessment climate justice summary",
    reference: "Edison source packet: Central Valley land concentration",
    href: "https://www.energy.ca.gov/sites/default/files/2019-11/Statewide%20Reports-%20SUM-CCCA4-2018-012%20ClimateJusticeSummary_ADA.pdf",
    lastReviewed: "April 2026",
  },
  centralValleyFood25: {
    id: "centralValleyFood25",
    value: "25%",
    claim: "The Central Valley is commonly cited as producing about one-quarter of the nation's food.",
    source: "California Fourth Climate Assessment climate justice summary",
    reference: "Edison source packet: regional food concentration",
    href: "https://www.energy.ca.gov/sites/default/files/2019-11/Statewide%20Reports-%20SUM-CCCA4-2018-012%20ClimateJusticeSummary_ADA.pdf",
    lastReviewed: "April 2026",
  },
  centralValleyFruitNuts40: {
    id: "centralValleyFruitNuts40",
    value: "40%",
    claim: "The Central Valley is commonly cited as producing roughly 40% of U.S. fruits and nuts.",
    source: "California Fourth Climate Assessment climate justice summary",
    reference: "Edison source packet: specialty crop concentration",
    href: "https://www.energy.ca.gov/sites/default/files/2019-11/Statewide%20Reports-%20SUM-CCCA4-2018-012%20ClimateJusticeSummary_ADA.pdf",
    lastReviewed: "April 2026",
  },
  sgmaRetired17k: {
    id: "sgmaRetired17k",
    value: "17K acres",
    claim: "California SGMA implementation is already forcing permanent or long-term farmland retirement in the Central Valley.",
    source: "California SGMA and land-repurposing reporting reviewed for Edison",
    reference: "Edison source packet: 2024 land-use pressure",
    lastReviewed: "April 2026",
  },
  subsidence28ft: {
    id: "subsidence28ft",
    value: "28 ft",
    claim: "Parts of the San Joaquin Valley have experienced extreme land subsidence since the 1920s.",
    source: "USGS and California Department of Water Resources subsidence reporting",
    reference: "Edison source packet: water infrastructure and subsidence",
    lastReviewed: "April 2026",
  },
  valleyEconomy50b: {
    id: "valleyEconomy50b",
    value: "$50B",
    claim: "The Central Valley agricultural economy is a major regional and national food-system asset under water pressure.",
    source: "California Department of Food and Agriculture regional agricultural economy summaries",
    reference: "Edison source packet: regional economic exposure",
    lastReviewed: "April 2026",
  },
  valleyWaterDecline20: {
    id: "valleyWaterDecline20",
    value: "20%",
    claim: "Regional water-supply decline could put Central Valley farmland and jobs under additional pressure by 2040.",
    source: "Public Policy Institute of California, future of San Joaquin Valley agriculture",
    reference: "Edison source packet: water security risk",
    href: "https://www.ppic.org/publication/policy-brief-the-future-of-agriculture-in-the-san-joaquin-valley/",
    lastReviewed: "April 2026",
  },
};

export function sourceLabel(id) {
  const item = claimSources[id];
  return item ? item.source : "";
}

export function sourceReference(id) {
  const item = claimSources[id];
  return item ? item.reference : "";
}

export const evidenceClaimTrail = [
  "foodSystemEmissions31",
  "soilWaterHolding20k",
  "soilCarbon58",
  "climateEquivalent213",
  "cropCalories24",
  "soilLifespanCaution",
  "residualClimate3001000",
];

export const edisonClaimTrail = [
  "centralValleyFarmland1",
  "centralValleyFood25",
  "centralValleyFruitNuts40",
  "sgmaRetired17k",
  "subsidence28ft",
  "valleyEconomy50b",
  "valleyWaterDecline20",
];
