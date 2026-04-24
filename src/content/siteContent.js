export const tagline = "Field proof for climate recovery through living soil, water resilience, and practical adoption.";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/why", label: "Our Case" },
  { to: "/evidence", label: "Evidence" },
  {
    label: "Projects",
    children: [
      { label: "Edison Institute", to: "/edison", tag: "Flagship" },
      { label: "Soil Climate Initiative", href: "https://www.soilclimateinitiative.org", external: true },
      { label: "Adopt-A-Meter", href: "https://adopt-a-meter.org", external: true },
      { label: "Learn", to: "/learn" },
      { label: "Blog", to: "/blog" },
      { label: "All Projects", to: "/projects" },
    ],
  },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
];

export const headerAction = {
  label: "Join Updates",
  href: "mailto:info@thecarbonunderground.org?subject=Join%20the%20TCU%20newsletter",
};

export const footerContent = {
  scope:
    "The Carbon Underground connects field research, public evidence, leadership, and support around the case for restoring living soil.",
  nonprofit:
    "The Carbon Underground is a 501(c)(3) nonprofit organization. Tax ID #46-5582094. Mailing address: 8800 Venice Blvd., Suite 322, Los Angeles, CA 90034.",
  primaryLinks: [
    { label: "Home", href: "/" },
    { label: "The Other Half", href: "/why" },
    { label: "Evidence", href: "/evidence" },
    { label: "Edison", href: "/edison" },
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" },
  ],
  secondaryLinks: [
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Learn", href: "/learn" },
    { label: "Adopt-A-Meter", href: "/projects/adopt-a-meter" },
    { label: "Larry's Message", href: "/larrys-message" },
    { label: "TCU Stats", href: "/evidence-hub/index.html" },
    { label: "Image credits", href: "/image-credits" },
    { label: "Join updates", href: headerAction.href },
  ],
};
