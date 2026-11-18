export const metadata = {
  title: "Grains & Basic Foodstuffs | Al Rayees SDN BHD — Rice, Wheat, Sugar, Coffee",
  description: "Al Rayees SDN BHD exports premium grains and basic foodstuffs: Rice, Wheat, Beans, Lentils, Tea, Coffee, Sugar, and Salt to international markets.",
  keywords: "grains export Malaysia, rice supplier, wheat trader, sugar export, coffee beans, tea supplier, lentils, peas international trading",
  alternates: { canonical: "https://www.alrayeesmy.com/grains-foodstuffs" },
  openGraph: { title: "Grains & Foodstuffs | Al Rayees SDN BHD", description: "Premium grains and basic foodstuffs for international markets." },
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
        {"Al Rayees — Grains & Foodstuffs"}
      </p>
    </div>
    <div id="nav-placeholder"></div>
    <header className="page-hero page-hero--motion" aria-labelledby="page-h1">
      <div className="hero-motion" aria-hidden="true">
        <div className="hero-layer hero-layer-bg" data-depth="0.45">
          <img src="/assets/images/grains_basic_foodstuffs_bg.png" alt="" className="page-hero-bg" loading="eager" />
        </div>
        <div className="hero-layer hero-layer-fx" data-depth="1">
          {/* drifting grains & seeds */}
          <svg className="fx fx-fall" style={{ left: "10%", width: "15px", "--dur": "20s", "--delay": "-5s" }} viewBox="0 0 14 22">
            <ellipse cx="7" cy="11" rx="6" ry="10" fill="#d3b075"></ellipse>
          </svg>
          {" "}
          <svg className="fx fx-fall" style={{ left: "26%", width: "34px", "--dur": "24s", "--delay": "-16s" }} viewBox="0 0 40 30">
            <g fill="#c19a62">
              <ellipse cx="20" cy="14" rx="5" ry="11"></ellipse>
              <ellipse cx="10" cy="16" rx="5" ry="11" transform="rotate(-26 10 16)"></ellipse>
              <ellipse cx="30" cy="16" rx="5" ry="11" transform="rotate(26 30 16)"></ellipse>
            </g>
          </svg>
          {" "}
          <svg className="fx fx-fall" style={{ left: "44%", width: "13px", "--dur": "16s", "--delay": "-2s" }} viewBox="0 0 14 22">
            <ellipse cx="7" cy="11" rx="6" ry="10" fill="#b98d5e"></ellipse>
          </svg>
          {" "}
          <svg className="fx fx-fall fx-m-hide" style={{ left: "60%", width: "17px", "--dur": "22s", "--delay": "-11s" }} viewBox="0 0 14 22">
            <ellipse cx="7" cy="11" rx="6" ry="10" fill="#d8bd8a"></ellipse>
          </svg>
          {" "}
          <svg className="fx fx-fall fx-m-hide" style={{ left: "74%", width: "30px", "--dur": "18s", "--delay": "-7s" }} viewBox="0 0 40 30">
            <g fill="#cda76e">
              <ellipse cx="20" cy="14" rx="5" ry="11"></ellipse>
              <ellipse cx="10" cy="16" rx="5" ry="11" transform="rotate(-26 10 16)"></ellipse>
              <ellipse cx="30" cy="16" rx="5" ry="11" transform="rotate(26 30 16)"></ellipse>
            </g>
          </svg>
          {" "}
          <svg className="fx fx-fall fx-m-hide" style={{ left: "88%", width: "14px", "--dur": "21s", "--delay": "-13s" }} viewBox="0 0 14 22">
            <ellipse cx="7" cy="11" rx="6" ry="10" fill="#c9a36a"></ellipse>
          </svg>
          {/* swaying wheat heads */}
          <svg className="fx fx-sway" style={{ right: "12%", bottom: "-6px", width: "30px", "--dur": "5.5s" }} viewBox="0 0 28 84">
            <path d="M14 84V16" stroke="#b98d5e" strokeWidth="2.4" fill="none"></path>
            {" "}
            <g fill="#c9a36a">
              <ellipse cx="14" cy="12" rx="4.5" ry="9"></ellipse>
              {" "}
              <ellipse cx="8" cy="24" rx="4.5" ry="9" transform="rotate(-24 8 24)"></ellipse>
              {" "}
              <ellipse cx="20" cy="24" rx="4.5" ry="9" transform="rotate(24 20 24)"></ellipse>
              {" "}
              <ellipse cx="8" cy="40" rx="4.5" ry="9" transform="rotate(-24 8 40)"></ellipse>
              {" "}
              <ellipse cx="20" cy="40" rx="4.5" ry="9" transform="rotate(24 20 40)"></ellipse>
              {" "}
              <ellipse cx="8" cy="56" rx="4.5" ry="9" transform="rotate(-24 8 56)"></ellipse>
              {" "}
              <ellipse cx="20" cy="56" rx="4.5" ry="9" transform="rotate(24 20 56)"></ellipse>
            </g>
          </svg>
          {" "}
          <svg className="fx fx-sway fx-m-hide" style={{ right: "27%", bottom: "-14px", width: "24px", "--dur": "6.4s", "--delay": "-2.2s" }} viewBox="0 0 28 84">
            <path d="M14 84V16" stroke="#c9a36a" strokeWidth="2.4" fill="none"></path>
            {" "}
            <g fill="#d8bd8a">
              <ellipse cx="14" cy="12" rx="4.5" ry="9"></ellipse>
              {" "}
              <ellipse cx="8" cy="24" rx="4.5" ry="9" transform="rotate(-24 8 24)"></ellipse>
              {" "}
              <ellipse cx="20" cy="24" rx="4.5" ry="9" transform="rotate(24 20 24)"></ellipse>
              {" "}
              <ellipse cx="8" cy="40" rx="4.5" ry="9" transform="rotate(-24 8 40)"></ellipse>
              {" "}
              <ellipse cx="20" cy="40" rx="4.5" ry="9" transform="rotate(24 20 40)"></ellipse>
              {" "}
              <ellipse cx="8" cy="56" rx="4.5" ry="9" transform="rotate(-24 8 56)"></ellipse>
              {" "}
              <ellipse cx="20" cy="56" rx="4.5" ry="9" transform="rotate(24 20 56)"></ellipse>
            </g>
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
            {"Grains & Foodstuffs"}
          </span>
        </nav>
        <h1 id="page-h1">
          {"Grains & Basic Foodstuffs"}
        </h1>
        <p>
          A comprehensive portfolio of staple foodstuffs sourced from premier growing regions worldwide — supplying governments, food manufacturers, and wholesale distributors globally.
        </p>
      </div>
    </header>
    <main className="products-section section" id="main-content">
      <div className="container">
        <div className="product-section-header reveal">
          <span className="section-label">
            Product Catalogue
          </span>
          <h2>
            Eight Essential Foodstuff Products
          </h2>
          <p>
            From staple grains to premium beverages — all products available for bulk international export.
          </p>
        </div>
        {/* Grains Sub-category */}
        <div className="product-category-divider reveal">
          <h3>
            {"🌾 Grains & Pulses"}
          </h3>
          <div className="line"></div>
        </div>
        <div className="products-grid">
          {/* Rice */}
          <article className="product-card reveal" data-delay="0" aria-labelledby="prod-rice">
            <div className="product-card-image">
              <img src={"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"} alt="Premium white rice grains" loading="lazy" />
              {" "}
              <span className="product-tag">
                Grains
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-rice">
                Rice
              </h3>
              <p className="product-scientific">
                Oryza sativa — Long/Medium/Short Grain
              </p>
              <p>
                Al Rayees trades multiple varieties of rice including Parboiled, White Milled, Basmati, Jasmine, and Broken Rice sourced from Thailand, Vietnam, India, Pakistan, and Myanmar. Available in multiple grades with phytosanitary certificates.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Broken %
                  </span>
                  <span className="spec-value">
                    5% / 25% / 100%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 14%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Purity
                  </span>
                  <span className="spec-value">
                    ≥ 98%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Milling
                  </span>
                  <span className="spec-value">
                    Well Milled
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Human Consumption
                  </span>
                  <span className="app-tag">
                    Animal Feed
                  </span>
                  <span className="app-tag">
                    Rice Flour
                  </span>
                  <span className="app-tag">
                    Brewing
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                25kg / 50kg PP Bags | 1MT Jumbo Bags | Bulk Vessels
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  Phytosanitary Certified
                </span>
                {" "}
                <a href="/contact?product=rice" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Wheat */}
          <article className="product-card reveal" data-delay="100" aria-labelledby="prod-wheat">
            <div className="product-card-image">
              <img src="/assets/images/wheat_2.jpg" alt="Wheat grains close up" loading="lazy" />
              {" "}
              <span className="product-tag">
                Grains
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-wheat">
                Wheat
              </h3>
              <p className="product-scientific">
                Triticum aestivum — Hard / Soft Red / White
              </p>
              <p>
                We supply Hard Red Winter, Hard Red Spring, Soft Red Winter, and Durum wheat sourced from Russia, Ukraine, Canada, USA, and Australia. Both food-grade and feed-grade grades available with full documentation.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Protein
                  </span>
                  <span className="spec-value">
                    11.5–14%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 13.5%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Test Weight
                  </span>
                  <span className="spec-value">
                    ≥ 76 kg/hl
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Admixture
                  </span>
                  <span className="spec-value">
                    ≤ 2%
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Flour Milling
                  </span>
                  <span className="app-tag">
                    Bread
                  </span>
                  <span className="app-tag">
                    Pasta
                  </span>
                  <span className="app-tag">
                    Animal Feed
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                25kg / 50kg Bags | 1MT Jumbo Bags | Bulk Vessels
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  GAFTA Standard
                </span>
                {" "}
                <a href="/contact?product=wheat" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Beans */}
          <article className="product-card reveal" data-delay="200" aria-labelledby="prod-beans">
            <div className="product-card-image">
              <img src="/assets/images/mix_beans.webp" alt="Assorted beans varieties" loading="lazy" />
              {" "}
              <span className="product-tag">
                Pulses
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-beans">
                Beans
              </h3>
              <p className="product-scientific">
                Phaseolus vulgaris — Various Varieties
              </p>
              <p>
                We trade a wide variety of dried beans including Navy Beans, Black Beans, Kidney Beans, Pinto Beans, and Fava Beans sourced from Argentina, Canada, China, and Turkey — all meeting human consumption standards.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 14%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Purity
                  </span>
                  <span className="spec-value">
                    ≥ 98%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Foreign Matter
                  </span>
                  <span className="spec-value">
                    ≤ 0.5%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Broken
                  </span>
                  <span className="spec-value">
                    ≤ 2%
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Food Processing
                  </span>
                  <span className="app-tag">
                    Canning
                  </span>
                  <span className="app-tag">
                    Retail
                  </span>
                  <span className="app-tag">
                    Feed
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                25kg / 50kg PP Bags | 1MT Jumbo Bags
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  Food Grade Certified
                </span>
                {" "}
                <a href="/contact?product=beans" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Lentils */}
          <article className="product-card reveal" data-delay="100" aria-labelledby="prod-lentils">
            <div className="product-card-image">
              <img src="/assets/images/lentils.jpg" alt="Red and green lentils" loading="lazy" />
              {" "}
              <span className="product-tag">
                Pulses
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-lentils">
                Lentils
              </h3>
              <p className="product-scientific">
                Lens culinaris — Red / Green / Brown
              </p>
              <p>
                Sourced from Canada, Turkey, India, and Australia — we supply Red Lentils, Green Lentils, French Green (Puy), and Brown Lentils. A high-protein, iron-rich pulse in strong demand across Middle East, South Asia, and European markets.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 14%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Protein
                  </span>
                  <span className="spec-value">
                    25–30%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Purity
                  </span>
                  <span className="spec-value">
                    ≥ 99%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Split %
                  </span>
                  <span className="spec-value">
                    ≤ 2%
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Dal / Soups
                  </span>
                  <span className="app-tag">
                    Flour
                  </span>
                  <span className="app-tag">
                    Retail
                  </span>
                  <span className="app-tag">
                    Food Mfg
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                25kg / 50kg PP Bags | 1MT Supersacks
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  Phytosanitary Certified
                </span>
                {" "}
                <a href="/contact?product=lentils" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
        </div>
        {/* /grains grid */}
        {/* Beverages & Sweeteners Sub-category */}
        <div className="product-category-divider reveal" style={{ marginTop: "var(--space-20)" }}>
          <h3>
            {"☕ Beverages & Sweeteners"}
          </h3>
          <div className="line"></div>
        </div>
        <div className="products-grid">
          {/* Tea */}
          <article className="product-card reveal" data-delay="0" aria-labelledby="prod-tea">
            <div className="product-card-image">
              <img src="/assets/images/tea.jpg" alt="Loose leaf tea and tea bags" loading="lazy" />
              {" "}
              <span className="product-tag">
                Beverage
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-tea">
                Tea
              </h3>
              <p className="product-scientific">
                Camellia sinensis — Black / Green / White
              </p>
              <p>
                Al Rayees supplies premium black tea, green tea, and specialty teas sourced from Sri Lanka (Ceylon), Kenya, India (Assam, Darjeeling), and China. Available as loose leaf, tea bag grade (CTC), and blended varieties for retail and wholesale.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 6%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Grade
                  </span>
                  <span className="spec-value">
                    BOPF / BOP / OP
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Colour
                  </span>
                  <span className="spec-value">
                    Bright Coppery
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Origin
                  </span>
                  <span className="spec-value">
                    Sri Lanka / Kenya
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Retail Packing
                  </span>
                  <span className="app-tag">
                    Tea Bags
                  </span>
                  <span className="app-tag">
                    RTD Beverages
                  </span>
                  <span className="app-tag">
                    HoReCa
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                25kg / 30kg Chests | Foil Bags | Custom Retail
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  HACCP / ISO 22000
                </span>
                {" "}
                <a href="/contact?product=tea" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Coffee */}
          <article className="product-card reveal" data-delay="100" aria-labelledby="prod-coffee">
            <div className="product-card-image">
              <img src={"https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80"} alt="Coffee beans close up" loading="lazy" />
              {" "}
              <span className="product-tag">
                Beverage
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-coffee">
                Coffee
              </h3>
              <p className="product-scientific">
                Coffea arabica / C. canephora — Green / Roasted
              </p>
              <p>
                We source and trade green coffee beans and roasted coffee from Ethiopia, Colombia, Brazil, Vietnam, and Indonesia. Arabica and Robusta grades available, with specialty grades (SCA 80+) for premium markets and commodity grade for industrial use.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 12.5%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Defects
                  </span>
                  <span className="spec-value">
                    Grade 1–3
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Screen Size
                  </span>
                  <span className="spec-value">
                    15+
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Type
                  </span>
                  <span className="spec-value">
                    Arabica / Robusta
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Roasting
                  </span>
                  <span className="app-tag">
                    Espresso
                  </span>
                  <span className="app-tag">
                    Instant Coffee
                  </span>
                  <span className="app-tag">
                    Extract
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                60kg GrainPro Bags | Vacuum Retail | Bulk Containers
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  ICO Certified
                </span>
                {" "}
                <a href="/contact?product=coffee" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Sugar */}
          <article className="product-card reveal" data-delay="200" aria-labelledby="prod-sugar">
            <div className="product-card-image">
              <img src="/assets/images/sugar.jpg" alt="White sugar crystals" loading="lazy" />
              {" "}
              <span className="product-tag">
                Sweetener
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-sugar">
                Sugar
              </h3>
              <p className="product-scientific">
                Saccharum officinarum — ICUMSA 45 / 150 / 600
              </p>
              <p>
                Al Rayees trades Brazilian White Refined Sugar (ICUMSA 45), VHP Raw Sugar (ICUMSA 600), and special grades sourced from Brazil, Thailand, and India — the world's leading producers. Full SGS or equivalent inspection reports provided.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    ICUMSA
                  </span>
                  <span className="spec-value">
                    45 / 150 / 600
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Polarization
                  </span>
                  <span className="spec-value">
                    ≥ 99.8°
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 0.04%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Origin
                  </span>
                  <span className="spec-value">
                    Brazil / Thailand
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Beverages
                  </span>
                  <span className="app-tag">
                    Confectionery
                  </span>
                  <span className="app-tag">
                    Baking
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
                50kg PP Bags | 1MT Jumbo Bags | Bulk Vessels
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  SGS / Bureau Veritas
                </span>
                {" "}
                <a href="/contact?product=sugar" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Salt */}
          <article className="product-card reveal" data-delay="0" aria-labelledby="prod-salt">
            <div className="product-card-image">
              <img src="/assets/images/salt.jpg" alt="Sea salt crystals" loading="lazy" />
              {" "}
              <span className="product-tag">
                Mineral
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-salt">
                Salt
              </h3>
              <p className="product-scientific">
                Sodium Chloride (NaCl) — Food / Industrial
              </p>
              <p>
                We supply food-grade iodized and non-iodized salt, sea salt, and industrial-grade salt from Australia, China, and India. Available in fine, medium, and coarse granulations for food processing, preservation, chemical, and water treatment industries.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    NaCl Purity
                  </span>
                  <span className="spec-value">
                    ≥ 99.5%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 0.3%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Granulation
                  </span>
                  <span className="spec-value">
                    Fine/Medium/Coarse
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Iodine
                  </span>
                  <span className="spec-value">
                    Optional
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Food Processing
                  </span>
                  <span className="app-tag">
                    Preservation
                  </span>
                  <span className="app-tag">
                    Chemical
                  </span>
                  <span className="app-tag">
                    Water Treatment
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                25kg / 50kg Bags | 1MT Jumbo Bags | Bulk Vessels
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  Food Grade / FSSC 22000
                </span>
                {" "}
                <a href="/contact?product=salt" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
        </div>
        {/* /beverages grid */}
      </div>
    </main>
    <section className="product-cta-banner" aria-labelledby="grains-cta-h2">
      <div className="container" style={{ position: "relative", zIndex: "1" }}>
        <h2 id="grains-cta-h2" style={{ color: "var(--white)" }}>
          {"Source Premium Grains & Foodstuffs Globally"}
        </h2>
        <p>
          Our experienced trading team can provide competitive quotations with flexible delivery terms.
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
