export const metadata = {
  title: "Vegetable Oils | Al Rayees SDN BHD — Palm Oil, Soybean Oil, Sunflower Oil",
  description: "Al Rayees SDN BHD exports premium vegetable oils: Palm Oil, Soybean Oil, Sunflower Oil, Corn Oil, Canola Oil, and Olive Oil. International quality standards.",
  keywords: "vegetable oils export Malaysia, palm oil supplier, soybean oil trader, sunflower oil, canola oil, corn oil, olive oil international",
  alternates: { canonical: "https://www.alrayeesmy.com/vegetable-oils" },
  openGraph: { title: "Vegetable Oils | Al Rayees SDN BHD", description: "Premium vegetable oils for international markets — sourced globally, delivered reliably." },
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
    <div id="page-loader" role="status" aria-label="Loading">
      <svg className="loader-logo" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="515" cy="255" r="70" fill="white" stroke="#123c29" strokeWidth="3"></circle>
        {" "}
        <path d="M450 255C470 235 560 235 580 255" stroke="#123c29" strokeWidth="2" opacity="0.5"></path>
        {" "}
        <path d="M450 275C470 295 560 295 580 275" stroke="#123c29" strokeWidth="2" opacity="0.5"></path>
        {" "}
        <path d="M515 185C495 220 495 290 515 325" stroke="#123c29" strokeWidth="2" opacity="0.5"></path>
        {" "}
        <path d="M365 315C470 180 670 180 775 255" stroke="#123c29" strokeWidth="18" strokeLinecap="round" fill="none"></path>
        {" "}
        <path d="M420 470L590 120L760 470H670L590 285L510 470H420Z" fill="#123c29"></path>
        {" "}
        <path d="M690 160H860C930 160 980 205 980 270C980 320 945 355 900 365L995 470H905L830 385H775V470H690V160ZM775 235V315H845C880 315 900 300 900 275C900 250 880 235 845 235H775Z" fill="#e8a317"></path>
        {" "}
        <text x="600" y="610" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="88" fontWeight="700" fill="#123c29">
          Al Rayees
        </text>
        {" "}
        <line x1="250" y1="675" x2="420" y2="675" stroke="#e8a317" strokeWidth="3"></line>
        {" "}
        <line x1="780" y1="675" x2="950" y2="675" stroke="#e8a317" strokeWidth="3"></line>
        {" "}
        <text x="600" y="695" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="42" letterSpacing="12" fill="#e8a317">
          SDN BHD
        </text>
      </svg>
      <div className="loader-bar-track">
        <div className="loader-bar-fill"></div>
      </div>
      <p className="loader-text">
        Al Rayees — Vegetable Oils
      </p>
    </div>
    <div id="nav-placeholder"></div>
    {/* PAGE HERO */}
    <header className="page-hero page-hero--motion" aria-labelledby="page-h1">
      <div className="hero-motion" aria-hidden="true">
        <div className="hero-layer hero-layer-bg" data-depth="0.45">
          <img src="/assets/images/vegetable_oils_bg.png" alt="" className="page-hero-bg" loading="eager" />
        </div>
        <div className="hero-layer hero-layer-fx" data-depth="1">
          {/* drifting olive leaves */}
          <svg className="fx fx-fall" style={{ left: "14%", width: "26px", "--dur": "19s", "--delay": "-6s" }} viewBox="0 0 24 12">
            <ellipse cx="12" cy="6" rx="11" ry="5" fill="#96ab72"></ellipse>
          </svg>
          {" "}
          <svg className="fx fx-fall" style={{ left: "34%", width: "20px", "--dur": "23s", "--delay": "-14s" }} viewBox="0 0 24 12">
            <ellipse cx="12" cy="6" rx="11" ry="5" fill="#88a061"></ellipse>
          </svg>
          {" "}
          <svg className="fx fx-fall fx-m-hide" style={{ left: "57%", width: "30px", "--dur": "17s", "--delay": "-2s" }} viewBox="0 0 24 12">
            <ellipse cx="12" cy="6" rx="11" ry="5" fill="#a3b77f"></ellipse>
          </svg>
          {" "}
          <svg className="fx fx-fall fx-m-hide" style={{ left: "80%", width: "22px", "--dur": "21s", "--delay": "-10s" }} viewBox="0 0 24 12">
            <ellipse cx="12" cy="6" rx="11" ry="5" fill="#8ea567"></ellipse>
          </svg>
          {/* rising oil droplets */}
          <svg className="fx fx-rise" style={{ left: "46%", width: "16px", "--dur": "11s", "--delay": "-3s" }} viewBox="0 0 24 32">
            <path d="M12 1C8 9 4 14 4 20a8 8 0 0 0 16 0C20 14 16 9 12 1Z" fill="rgba(232,163,23,0.5)"></path>
            <circle cx="9" cy="20" r="2.4" fill="rgba(255,255,255,0.55)"></circle>
          </svg>
          {" "}
          <svg className="fx fx-rise" style={{ left: "64%", width: "20px", "--dur": "14s", "--delay": "-8s" }} viewBox="0 0 24 32">
            <path d="M12 1C8 9 4 14 4 20a8 8 0 0 0 16 0C20 14 16 9 12 1Z" fill="rgba(210,148,0,0.45)"></path>
            <circle cx="9" cy="20" r="2.4" fill="rgba(255,255,255,0.5)"></circle>
          </svg>
          {" "}
          <svg className="fx fx-rise fx-m-hide" style={{ left: "76%", width: "13px", "--dur": "9s", "--delay": "-1s" }} viewBox="0 0 24 32">
            <path d="M12 1C8 9 4 14 4 20a8 8 0 0 0 16 0C20 14 16 9 12 1Z" fill="rgba(245,184,42,0.5)"></path>
            <circle cx="9" cy="20" r="2.4" fill="rgba(255,255,255,0.55)"></circle>
          </svg>
          {" "}
          <svg className="fx fx-rise fx-m-hide" style={{ left: "30%", width: "14px", "--dur": "13s", "--delay": "-6s" }} viewBox="0 0 24 32">
            <path d="M12 1C8 9 4 14 4 20a8 8 0 0 0 16 0C20 14 16 9 12 1Z" fill="rgba(232,163,23,0.4)"></path>
            <circle cx="9" cy="20" r="2.4" fill="rgba(255,255,255,0.5)"></circle>
          </svg>
          {/* slow-spinning sunflower */}
          <svg className="fx" style={{ right: "5%", bottom: "-28px", width: "108px" }} viewBox="0 0 100 100">
            <g className="fx-spin" fill="#dd9330">
              <ellipse cx="50" cy="22" rx="9.5" ry="19"></ellipse>
              {" "}
              <ellipse cx="50" cy="22" rx="9.5" ry="19" transform="rotate(45 50 50)"></ellipse>
              {" "}
              <ellipse cx="50" cy="22" rx="9.5" ry="19" transform="rotate(90 50 50)"></ellipse>
              {" "}
              <ellipse cx="50" cy="22" rx="9.5" ry="19" transform="rotate(135 50 50)"></ellipse>
              {" "}
              <ellipse cx="50" cy="22" rx="9.5" ry="19" transform="rotate(180 50 50)"></ellipse>
              {" "}
              <ellipse cx="50" cy="22" rx="9.5" ry="19" transform="rotate(225 50 50)"></ellipse>
              {" "}
              <ellipse cx="50" cy="22" rx="9.5" ry="19" transform="rotate(270 50 50)"></ellipse>
              {" "}
              <ellipse cx="50" cy="22" rx="9.5" ry="19" transform="rotate(315 50 50)"></ellipse>
            </g>
            {" "}
            <circle cx="50" cy="50" r="15" fill="#6f4f21"></circle>
          </svg>
        </div>
        <div className="hero-sweep"></div>
      </div>
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
            Vegetable Oils
          </span>
        </nav>
        <h1 id="page-h1">
          Vegetable Oils
        </h1>
        <p>
          Premium-grade vegetable oils sourced from the world's leading production regions, traded to international markets with full quality assurance and documentation.
        </p>
      </div>
    </header>
    {/* PRODUCTS */}
    <main className="products-section section" id="main-content">
      <div className="container">
        <div className="product-section-header reveal">
          <span className="section-label">
            Product Catalogue
          </span>
          <h2>
            Our Vegetable Oil Range
          </h2>
          <p>
            Six internationally traded vegetable oils available for bulk export with flexible packaging and competitive pricing.
          </p>
        </div>
        <div className="products-grid">
          {/* Soybean Oil */}
          <article className="product-card reveal" data-delay="0" aria-labelledby="prod-soybean">
            <div className="product-card-image">
              <img src="/assets/images/soya_2.jpg" alt="Soybean oil in a bottle" loading="lazy" />
              {" "}
              <span className="product-tag">
                Vegetable Oil
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-soybean">
                Soybean Oil
              </h3>
              <p className="product-scientific">
                Glycine max — Refined / Crude
              </p>
              <p>
                Soybean oil is one of the world's most widely traded vegetable oils, prized for its neutral flavour, high smoke point, and versatile industrial applications. Al Rayees supplies both refined and crude variants meeting international food-grade standards.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    FFA
                  </span>
                  <span className="spec-value">
                    ≤ 0.1%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 0.1%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Colour
                  </span>
                  <span className="spec-value">
                    ≤ 3 Red
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Smoke Point
                  </span>
                  <span className="spec-value">
                    234°C
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Cooking
                  </span>
                  <span className="app-tag">
                    Margarine
                  </span>
                  <span className="app-tag">
                    Biodiesel
                  </span>
                  <span className="app-tag">
                    Industrial
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                {"Bulk Tankers | 200L Drums | 20L & 5L Cans | IBC Tanks"}
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  ISO 9001 Certified
                </span>
                {" "}
                <a href="/contact?product=soybean-oil" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Palm Oil */}
          <article className="product-card reveal" data-delay="100" aria-labelledby="prod-palm">
            <div className="product-card-image">
              <img src="/assets/images/palm.jpg" alt="Palm oil fruit clusters" loading="lazy" />
              {" "}
              <span className="product-tag">
                Vegetable Oil
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-palm">
                Palm Oil
              </h3>
              <p className="product-scientific">
                Elaeis guineensis — RBD / CPO
              </p>
              <p>
                The world's most produced vegetable oil. Al Rayees trades Crude Palm Oil (CPO), Refined Bleached Deodorized Palm Oil (RBD), and Palm Olein/Stearin, sourced primarily from Malaysia and Indonesia with MSPO and RSPO certifications available.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    FFA (CPO)
                  </span>
                  <span className="spec-value">
                    ≤ 5%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 0.15%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    IV (Olein)
                  </span>
                  <span className="spec-value">
                    ≥ 56
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Cloud Point
                  </span>
                  <span className="spec-value">
                    ≤ 10°C
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Frying
                  </span>
                  <span className="app-tag">
                    Confectionery
                  </span>
                  <span className="app-tag">
                    Soap
                  </span>
                  <span className="app-tag">
                    Biofuel
                  </span>
                  <span className="app-tag">
                    Cosmetics
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                Bulk Vessels | Flexi-bags | 200L Drums | ISO Tanks
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  MSPO / RSPO Available
                </span>
                {" "}
                <a href="/contact?product=palm-oil" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Sunflower Oil */}
          <article className="product-card reveal" data-delay="200" aria-labelledby="prod-sunflower">
            <div className="product-card-image">
              <img src="/assets/images/sun_flower.jpg" alt="Sunflowers in a field" loading="lazy" />
              {" "}
              <span className="product-tag">
                Vegetable Oil
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-sunflower">
                Sunflower Oil
              </h3>
              <p className="product-scientific">
                Helianthus annuus — Refined
              </p>
              <p>
                Highly valued for its light colour, neutral taste, and high Vitamin E content. Al Rayees sources premium sunflower oil from Ukraine, Russia, and Argentina — the world's top-producing regions — offering refined and crude grades.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    FFA
                  </span>
                  <span className="spec-value">
                    ≤ 0.1%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 0.05%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Peroxide
                  </span>
                  <span className="spec-value">
                    ≤ 5 meq/kg
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Smoke Point
                  </span>
                  <span className="spec-value">
                    227°C
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Frying
                  </span>
                  <span className="app-tag">
                    Dressings
                  </span>
                  <span className="app-tag">
                    Baking
                  </span>
                  <span className="app-tag">
                    Cosmetics
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                Bulk Tankers | 1L-5L Bottles | 20L Cans | 200L Drums
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  EU Food Grade
                </span>
                {" "}
                <a href="/contact?product=sunflower-oil" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Corn Oil */}
          <article className="product-card reveal" data-delay="0" aria-labelledby="prod-corn">
            <div className="product-card-image">
              <img src="/assets/images/corn.jpg" alt="Corn field for corn oil production" loading="lazy" />
              {" "}
              <span className="product-tag">
                Vegetable Oil
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-corn">
                Corn Oil
              </h3>
              <p className="product-scientific">
                Zea mays — Refined
              </p>
              <p>
                Corn oil is extracted from the germ of maize and refined to produce a light, healthy cooking oil rich in polyunsaturated fatty acids. Known for its high smoke point and mild flavour, it is ideal for both food and non-food applications.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    FFA
                  </span>
                  <span className="spec-value">
                    ≤ 0.05%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Colour (Lovibond)
                  </span>
                  <span className="spec-value">
                    ≤ 3R/30Y
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Iodine Value
                  </span>
                  <span className="spec-value">
                    103–135
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Smoke Point
                  </span>
                  <span className="spec-value">
                    232°C
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Deep Frying
                  </span>
                  <span className="app-tag">
                    Margarine
                  </span>
                  <span className="app-tag">
                    Snacks
                  </span>
                  <span className="app-tag">
                    Pharma
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                Bulk Tankers | 20L Cans | 200L Drums | Flexi-bags
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  CODEX Alimentarius
                </span>
                {" "}
                <a href="/contact?product=corn-oil" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Canola Oil */}
          <article className="product-card reveal mid-card" data-delay="100" aria-labelledby="prod-canola" style={{ gridColumn: "2" }}>
            <div className="product-card-image">
              <img src="/assets/images/canola.jpg" alt="Canola flowers in a field" loading="lazy" />
              {" "}
              <span className="product-tag">
                Vegetable Oil
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-canola">
                Canola Oil
              </h3>
              <p className="product-scientific">
                Brassica napus — Refined
              </p>
              <p>
                One of the healthiest vegetable oils with the lowest saturated fat content and high omega-3 fatty acids. Al Rayees sources premium canola oil from Canada and Australia, widely regarded as the gold standard in healthy cooking oils.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    FFA
                  </span>
                  <span className="spec-value">
                    ≤ 0.1%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Saturated Fat
                  </span>
                  <span className="spec-value">
                    7%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Omega-3
                  </span>
                  <span className="spec-value">
                    9–11%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Smoke Point
                  </span>
                  <span className="spec-value">
                    204°C
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Cooking
                  </span>
                  <span className="app-tag">
                    Salad Dressing
                  </span>
                  <span className="app-tag">
                    Baking
                  </span>
                  <span className="app-tag">
                    Food Service
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                Bulk Tankers | 1L-5L PET Bottles | 20L Cans | IBC Tanks
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  Canadian Grade A
                </span>
                {" "}
                <a href="/contact?product=canola-oil" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Olive Oil */}
          <article className="product-card reveal mid-card" data-delay="200" aria-labelledby="prod-olive" style={{ gridColumn: "3" }}>
            <div className="product-card-image">
              <img src="/assets/images/olives.jpg" alt="Olive oil with olives" loading="lazy" />
              {" "}
              <span className="product-tag">
                Vegetable Oil
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-olive">
                Olive Oil
              </h3>
              <p className="product-scientific">
                Olea europaea — Extra Virgin / Pure
              </p>
              <p>
                The world's most celebrated culinary oil. Al Rayees imports and re-exports premium olive oil from Spain, Italy, Greece, and Tunisia — available in Extra Virgin, Virgin, Pure, and Pomace grades with full IOC compliance certificates.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    FFA (EVOO)
                  </span>
                  <span className="spec-value">
                    ≤ 0.8%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Peroxide
                  </span>
                  <span className="spec-value">
                    ≤ 20 meq/kg
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Polyphenols
                  </span>
                  <span className="spec-value">
                    High
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Grade
                  </span>
                  <span className="spec-value">
                    Extra Virgin
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Gourmet Cooking
                  </span>
                  <span className="app-tag">
                    Dressings
                  </span>
                  <span className="app-tag">
                    Cosmetics
                  </span>
                  <span className="app-tag">
                    Pharma
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                Bulk Tankers | 1L-5L Glass/PET | 200L Drums | Tin Cans
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  IOC Certified
                </span>
                {" "}
                <a href="/contact?product=olive-oil" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
        </div>
        {/* /products-grid */}
      </div>
    </main>
    {/* Advantages of Our Vegetable Oils */}
    <section className="advantages-section section" aria-labelledby="advantages-heading">
      <div className="container">
        <div className="product-section-header reveal">
          <span className="section-label">
            {"Health & Quality"}
          </span>
          <h2 id="advantages-heading">
            Advantages of Our Vegetable Oils
          </h2>
          <p style={{ maxWidth: "620px", margin: "var(--space-4) auto 0" }}>
            Sourced from selected natural plants and seeds, our vegetable oils combine exceptional nutritional value with outstanding performance in culinary and industrial applications.
          </p>
        </div>
        <div className="advantages-grid" style={{ marginTop: "var(--space-12)" }}>
          {/* Advantage 1 */}
          <article className="advantage-card reveal" data-delay="0" aria-labelledby="adv-heart">
            <div className="advantage-icon-wrap">
              <img src="/assets/images/heart-health.png" alt="Heart Health Icon" className="advantage-icon-img" loading="lazy" />
            </div>
            <h4 id="adv-heart">
              Heart Health
            </h4>
            <p>
              High in monounsaturated fats (oleic acid) and low in saturated fats can it helps reduce LDL cholesterol levels and lower the risk of heart disease.
            </p>
          </article>
          {/* Advantage 2 */}
          <article className="advantage-card reveal" data-delay="100" aria-labelledby="adv-omega">
            <div className="advantage-icon-wrap">
              <img src="/assets/images/omega-3.png" alt="Omega-3 Icon" className="advantage-icon-img" loading="lazy" />
            </div>
            <h4 id="adv-omega">
              Essential Omega-3
            </h4>
            <p>
              Contains alpha-linolenic acid (ALA), an essential omega-3 fatty acid that supports cardiovascular health and brain function.
            </p>
          </article>
          {/* Advantage 3 */}
          <article className="advantage-card reveal" data-delay="200" aria-labelledby="adv-antiox">
            <div className="advantage-icon-wrap">
              <img src="/assets/images/antioxidant-properties.png" alt="Antioxidant Properties Icon" className="advantage-icon-img" loading="lazy" />
            </div>
            <h4 id="adv-antiox">
              Antioxidant Properties
            </h4>
            <p>
              Rich in vitamin E (tocopherols), which helps protect cells from oxidative damage.
            </p>
          </article>
          {/* Advantage 4 */}
          <article className="advantage-card reveal" data-delay="300" aria-labelledby="adv-anti-inflam">
            <div className="advantage-icon-wrap">
              <img src="/assets/images/anti-inflammatory.png" alt="Anti-inflammatory Icon" className="advantage-icon-img" loading="lazy" />
            </div>
            <h4 id="adv-anti-inflam">
              Anti-Inflammatory
            </h4>
            <p>
              The balanced ratio of omega-3 to omega-6 fatty acids can help reduce inflammation in the body.
            </p>
          </article>
          {/* Advantage 5 */}
          <article className="advantage-card reveal" data-delay="400" aria-labelledby="adv-versatile">
            <div className="advantage-icon-wrap">
              <img src="/assets/images/versatile-culinary-use.png" alt="Versatile Culinary Use Icon" className="advantage-icon-img" loading="lazy" />
            </div>
            <h4 id="adv-versatile">
              Versatile Culinary Use
            </h4>
            <p>
              Neutral flavor and high smoke point suit various cooking methods, including frying, baking, and Stir-frying.
            </p>
          </article>
          {/* Advantage 6 */}
          <article className="advantage-card reveal" data-delay="500" aria-labelledby="adv-halal">
            <div className="advantage-icon-wrap">
              <img src="/assets/images/halal.png" alt="Halal Icon" className="advantage-icon-img" loading="lazy" />
            </div>
            <h4 id="adv-halal">
              Halal Compliance
            </h4>
            <p>
              100% Pure vegetable oil. it is extracted strictly from plants, seeds, or fruits, it does not contain animal products or intoxicants.
            </p>
          </article>
        </div>
      </div>
    </section>
    {/* CTA Banner */}
    <section className="product-cta-banner" aria-labelledby="oils-cta-h2">
      <div className="container" style={{ position: "relative", zIndex: "1" }}>
        <h2 id="oils-cta-h2" style={{ color: "var(--white)" }}>
          Ready to Source Premium Vegetable Oils?
        </h2>
        <p>
          Contact our trading team for specifications, pricing, and supply terms tailored to your requirements.
        </p>
        <div className="btn-group">
          <a href="/contact" className="btn btn-primary btn-lg">
            Request Quotation
          </a>
          {" "}
          <a href="tel:+601168206810" className="btn btn-outline btn-lg">
            📞 +60 11 6820 6810
          </a>
        </div>
      </div>
    </section>
    <div id="footer-placeholder"></div>
    </>
  );
}
