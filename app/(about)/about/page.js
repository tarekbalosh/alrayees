export const metadata = {
  title: "About Us | Al Rayees SDN BHD — International Commodity Trading Company",
  description: "Learn about Al Rayees SDN BHD, a Malaysia-based international trading company specializing in vegetable oils, grains, foodstuffs, agricultural inputs, and industrial commodities. Our vision, mission, and CEO's message.",
  keywords: "About Al Rayees, Malaysia trading company, international commodity trading, vegetable oils, grains, foodstuffs, agricultural inputs, vision mission, CEO message",
  alternates: { canonical: "https://www.alrayeesmy.com/about" },
  openGraph: { type: "website", title: "About Us | Al Rayees SDN BHD", description: "A Malaysia-based international trading company specializing in agricultural commodities, vegetable oils, grains, and industrial commodities.", url: "https://www.alrayeesmy.com/about", siteName: "Al Rayees SDN BHD" },
  manifest: "/manifest.json",
  icons: { icon: "/assets/images/favicon_icon.png", apple: "/assets/images/icon-192.png" },
  appleWebApp: { capable: true, title: "Al Rayees", statusBarStyle: "black-translucent" },
  other: { 'apple-mobile-web-app-capable': 'yes' },
};

// <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"> + <meta name="theme-color" content="#123c29">
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: "#123c29",
};

export default function Page() {
  return (
    <>
    {/* Page Loader */}
    <div id="page-loader" role="status" aria-label="Loading">
      <img className="loader-logo" src="/assets/images/al_rayees_sdn_bhd_logo.png" alt="Al Rayees SDN BHD" />
      <div className="loader-bar-track">
        <div className="loader-bar-fill"></div>
      </div>
      <p className="loader-text">
        Al Rayees — About Us
      </p>
    </div>
    {/* Nav injected by components.js */}
    <div id="nav-placeholder"></div>
    {/* PAGE HERO */}
    <header className="page-hero" aria-labelledby="about-h1">
      <img src="/assets/images/header_about_us.jpg" alt="" className="page-hero-bg" loading="eager" />
      <div className="page-hero-deco"></div>
      <div className="container page-hero-inner">
        <nav className="page-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">
            Home
          </a>
          <span className="sep">
            ›
          </span>
          <span>
            About Us
          </span>
        </nav>
        <h1 id="about-h1">
          About Us
        </h1>
        <p>
          A Malaysia-based international trading company connecting the world's producers and consumers through reliable, ethical, and value-driven trade.
        </p>
      </div>
    </header>
    {/* ═══════════════════════════════════════════════════
     SECTION 1 — WHY CHOOSE US
════════════════════════════════════════════════════ */}
    <section className="about-why section" id="main-content" aria-labelledby="why-heading">
      <div className="container">
        <div className="text-center section-title reveal">
          <span className="section-label">
            Who We Are
          </span>
          <h2 id="why-heading">
            Why Choose Us
          </h2>
        </div>
        <div className="about-why-lead reveal">
          <p>
            <strong>
              AL RAYEES SDN BHD
            </strong>
            {" is a Malaysia-based international trading company specializing in the sourcing, marketing, and distribution of agricultural commodities, vegetable oils, grains, foodstuffs, agricultural inputs, and industrial commodities. Established with a commitment to excellence, integrity, and long-term business relationships, we serve customers and partners across regional and international markets by delivering reliable products that meet recognized quality standards."}
          </p>
          <p>
            Our diverse product portfolio includes vegetable oils such as soybean oil, palm oil, sunflower oil, corn oil, canola oil, and olive oil; grains and foodstuffs including rice, wheat, beans, peas, lentils, tea, coffee, sugar, and salt; agricultural inputs such as fertilizers, herbicides, insecticides, and fungicides; as well as industrial commodities including natural fibers and industrial crops. Through an extensive network of trusted suppliers and strategic partners, we ensure consistent quality, competitive pricing, and dependable supply chain solutions.
          </p>
          <p>
            At AL RAYEES SDN BHD, we believe that sustainable growth is built on trust, transparency, and operational excellence. Our team is dedicated to understanding the unique requirements of every client and providing tailored trading solutions that create mutual value.
          </p>
          <p>
            By combining market expertise, global sourcing capabilities, and a customer-focused approach, we continue to strengthen our position as a reliable trading partner for businesses worldwide.
          </p>
        </div>
        {/* Vision & Mission */}
        <div className="vm-grid">
          <div className="vm-card reveal reveal-left">
            <div className="vm-icon" aria-hidden="true">
              🌟
            </div>
            <h3>
              Our Vision
            </h3>
            <p>
              To become a leading international trading company recognized for professionalism, quality, and innovation in global commodity markets.
            </p>
          </div>
          <div className="vm-card reveal reveal-right">
            <div className="vm-icon" aria-hidden="true">
              🎯
            </div>
            <h3>
              Our Mission
            </h3>
            <p>
              To connect producers and consumers through efficient, ethical, and value-driven trade while contributing to the development of sustainable and resilient supply chains across the world.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* ═══════════════════════════════════════════════════
     SECTION 2 — CEO MESSAGE
════════════════════════════════════════════════════ */}
    <section className="ceo-message section" aria-labelledby="ceo-heading">
      <div className="container">
        <div className="text-center section-title reveal">
          <span className="section-label">
            Leadership
          </span>
          <h2 id="ceo-heading">
            CEO Message
          </h2>
        </div>
        <div className="ceo-grid" style={{ marginTop: "var(--space-12)" }}>
          <div className="ceo-portrait-wrap reveal reveal-left">
            <figure className="ceo-portrait">
              <img src="/assets/images/husam_2026.jpg" alt="Husam-Aldin Alyousef, Chief Executive Officer of Al Rayees SDN BHD" loading="lazy" />
            </figure>
            <div className="ceo-name-card">
              <span className="ceo-name">
                Husam-Aldin Alyousef
              </span>
              {" "}
              <span className="ceo-title">
                Chief Executive Officer — Al Rayees SDN BHD
              </span>
            </div>
          </div>
          <blockquote className="ceo-quote reveal reveal-right">
            <p>
              At Al Rayees SDN BHD, we believe that trade is more than the exchange of goods — it is the bridge that connects civilizations, sustains communities, and drives global progress. Our commitment to quality is not merely a standard; it is the cornerstone of every relationship we build and every transaction we execute. We source only the finest commodities, verified against the most stringent international standards, because our partners deserve nothing less.
            </p>
            <p>
              As an active participant in the international trading of grains, basic foodstuffs, and vegetable oils, we recognize the critical role these essential commodities play in ensuring food security, economic resilience, and the stability of global supply chains. From staple grains that nourish populations to high-quality edible oils and food essentials that support everyday life, our focus remains on delivering trusted products with consistency, efficiency, and uncompromising standards.
            </p>
            <p>
              As we expand our global footprint, we remain steadfast in our mission: to deliver reliable, sustainable, and integrity-driven trading solutions that stand the test of time. Together, we will build supply chains that the world can depend on — strengthening partnerships, connecting markets, and contributing to a more secure and sustainable future.
            </p>
          </blockquote>
        </div>
        <div className="text-center" style={{ marginTop: "var(--space-12)" }}>
          <a href="/contact" className="btn btn-navy">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
    {/* Footer injected by components.js */}
    <div id="footer-placeholder"></div>
    {/* Scripts */}
    </>
  );
}
