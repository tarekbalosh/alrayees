export const metadata = {
  title: "Agricultural Inputs | Al Rayees SDN BHD — Fertilizers, Herbicides, Fungicides",
  description: "Al Rayees SDN BHD supplies chemical fertilizers, organic fertilizers, liming agents, herbicides, insecticides, and fungicides for agricultural markets worldwide.",
  keywords: "fertilizers export, herbicides supplier, agricultural chemicals, NPK fertilizer, organic fertilizer Malaysia, insecticides trade, fungicides international",
  alternates: { canonical: "https://www.alrayeesmy.com/agricultural-inputs" },
  openGraph: { title: "Agricultural Inputs | Al Rayees SDN BHD", description: "Complete range of agricultural inputs for international markets." },
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
        Al Rayees — Agricultural Inputs
      </p>
    </div>
    <div id="nav-placeholder"></div>
    <header className="page-hero page-hero--motion" aria-labelledby="page-h1">
      <div className="hero-motion" aria-hidden="true">
        <div className="hero-layer hero-layer-bg" data-depth="0.45">
          <img src="/assets/images/agricultural_inputs_bg.png" alt="" className="page-hero-bg" loading="eager" />
        </div>
        <div className="hero-layer hero-layer-fx" data-depth="1">
          {/* pulsing sun glow */}
          <span className="fx fx-sun" style={{ right: "5%", top: "2%", width: "240px", height: "240px" }}></span>
          {/* gliding birds */}
          <svg className="fx fx-glide" style={{ top: "14%", width: "26px", "--dur": "36s" }} viewBox="0 0 24 10">
            <path d="M1 8Q6.5 1 12 7Q17.5 1 23 8" fill="none" stroke="#5a7263" strokeWidth="1.8" strokeLinecap="round"></path>
          </svg>
          {" "}
          <svg className="fx fx-glide" style={{ top: "22%", width: "19px", "--dur": "44s", "--delay": "-19s" }} viewBox="0 0 24 10">
            <path d="M1 8Q6.5 1 12 7Q17.5 1 23 8" fill="none" stroke="#6a8073" strokeWidth="1.8" strokeLinecap="round"></path>
          </svg>
          {" "}
          <svg className="fx fx-glide fx-m-hide" style={{ top: "9%", width: "15px", "--dur": "30s", "--delay": "-9s" }} viewBox="0 0 24 10">
            <path d="M1 8Q6.5 1 12 7Q17.5 1 23 8" fill="none" stroke="#5a7263" strokeWidth="1.8" strokeLinecap="round"></path>
          </svg>
          {/* rising pollen */}
          <span className="fx fx-rise fx-dot" style={{ left: "24%", width: "6px", height: "6px", "--dur": "11s", "--delay": "-2s" }}></span>
          {" "}
          <span className="fx fx-rise fx-dot" style={{ left: "41%", width: "5px", height: "5px", "--dur": "9s", "--delay": "-6s" }}></span>
          {" "}
          <span className="fx fx-rise fx-dot" style={{ left: "58%", width: "7px", height: "7px", "--dur": "13s", "--delay": "-4s" }}></span>
          {" "}
          <span className="fx fx-rise fx-dot fx-m-hide" style={{ left: "72%", width: "5px", height: "5px", "--dur": "10s", "--delay": "-8s" }}></span>
          {" "}
          <span className="fx fx-rise fx-dot fx-m-hide" style={{ left: "86%", width: "6px", height: "6px", "--dur": "12s", "--delay": "-1s" }}></span>
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
            Agricultural Inputs
          </span>
        </nav>
        <h1 id="page-h1">
          Agricultural Inputs
        </h1>
        <p>
          A complete range of crop nutrition and protection products — from chemical and organic fertilizers to advanced crop protection chemicals — for agricultural markets worldwide.
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
            Six Agricultural Input Products
          </h2>
          <p>
            Supporting global food production with quality fertilizers and crop protection chemicals.
          </p>
        </div>
        {/* Fertilizers */}
        <div className="product-category-divider reveal">
          <h3>
            {"🌿 Fertilizers & Soil Amendments"}
          </h3>
          <div className="line"></div>
        </div>
        <div className="products-grid products-grid--trio">
          {/* Chemical Fertilizers */}
          <article className="product-card reveal" data-delay="0" aria-labelledby="prod-chem-fert">
            <div className="product-card-image">
              <img src="/assets/images/chemical_fertilizers_2.jpg" alt="Chemical fertilizer granules" loading="lazy" />
              {" "}
              <span className="product-tag">
                Fertilizer
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-chem-fert">
                Chemical Fertilizers
              </h3>
              <p className="product-scientific">
                NPK / Urea / DAP / MOP / SOP — Various Grades
              </p>
              <p>
                Al Rayees trades a comprehensive range of chemical fertilizers including Urea (46-0-0), DAP (18-46-0), MOP (0-0-60), SOP, and NPK compound fertilizers sourced from Russia, Belarus, China, Saudi Arabia, and Morocco — key global producers.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Urea N
                  </span>
                  <span className="spec-value">
                    ≥ 46%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    DAP P₂O₅
                  </span>
                  <span className="spec-value">
                    ≥ 46%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    MOP K₂O
                  </span>
                  <span className="spec-value">
                    ≥ 60%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 0.5%
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Paddy / Rice
                  </span>
                  <span className="app-tag">
                    Palm Oil
                  </span>
                  <span className="app-tag">
                    Corn
                  </span>
                  <span className="app-tag">
                    Wheat
                  </span>
                  <span className="app-tag">
                    Vegetables
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
                  IFA / IFDC Standards
                </span>
                {" "}
                <a href="/contact?product=chemical-fertilizers" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Organic Fertilizers */}
          <article className="product-card reveal" data-delay="100" aria-labelledby="prod-org-fert">
            <div className="product-card-image">
              <img src="/assets/images/organic_fertilizers_2.jpg" alt="Organic compost and fertilizer" loading="lazy" />
              {" "}
              <span className="product-tag">
                Organic
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-org-fert">
                Organic Fertilizers
              </h3>
              <p className="product-scientific">
                {"Compost / Vermicompost / Blood & Bone / Seaweed"}
              </p>
              <p>
                {"Supporting the global shift towards sustainable agriculture, Al Rayees supplies certified organic fertilizers including composted manure, vermicompost, blood & bone meal, seaweed extracts, and fish-based fertilizers for organic farming operations."}
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Organic Matter
                  </span>
                  <span className="spec-value">
                    ≥ 30%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    N Content
                  </span>
                  <span className="spec-value">
                    2–8%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 25%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    pH
                  </span>
                  <span className="spec-value">
                    6.5–8.0
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Organic Farming
                  </span>
                  <span className="app-tag">
                    Horticulture
                  </span>
                  <span className="app-tag">
                    Soil Rehab
                  </span>
                  <span className="app-tag">
                    Aquaculture
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                25kg / 50kg Bags | 1MT Jumbo Bags | Liquid IBC
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  OMRI / Organic Certified
                </span>
                {" "}
                <a href="/contact?product=organic-fertilizers" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Liming Agents */}
          <article className="product-card reveal" data-delay="200" aria-labelledby="prod-lime">
            <div className="product-card-image">
              <img src="/assets/images/liming.jpg" alt="Agricultural lime on soil" loading="lazy" />
              {" "}
              <span className="product-tag">
                Soil Amendment
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-lime">
                Liming Agents
              </h3>
              <p className="product-scientific">
                CaCO₃ / Ca(OH)₂ / CaO — Agricultural Grade
              </p>
              <p>
                Ground limestone, dolomite, hydrated lime, and quick lime for soil pH correction — essential inputs for improving crop yields in acidic soils. Al Rayees sources from major quarrying nations and supplies to agricultural importers across Southeast Asia and Africa.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    CaCO₃ Purity
                  </span>
                  <span className="spec-value">
                    ≥ 90%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Fineness
                  </span>
                  <span className="spec-value">
                    ≥ 80% @ 100 mesh
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Moisture
                  </span>
                  <span className="spec-value">
                    ≤ 3%
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    TNP
                  </span>
                  <span className="spec-value">
                    ≥ 85%
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    pH Correction
                  </span>
                  <span className="app-tag">
                    Pasture
                  </span>
                  <span className="app-tag">
                    Sugarcane
                  </span>
                  <span className="app-tag">
                    Cereals
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
                  Agricultural Grade
                </span>
                {" "}
                <a href="/contact?product=liming-agents" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
        </div>
        {/* Crop Protection */}
        <div className="product-category-divider reveal" style={{ marginTop: "var(--space-20)" }}>
          <h3>
            🛡️ Crop Protection Chemicals
          </h3>
          <div className="line"></div>
        </div>
        <div className="products-grid products-grid--trio">
          {/* Herbicides */}
          <article className="product-card reveal" data-delay="0" aria-labelledby="prod-herb">
            <div className="product-card-image">
              <img src="/assets/images/herbicides.jpg" alt="Herbicide spraying on crops" loading="lazy" />
              {" "}
              <span className="product-tag">
                Crop Protection
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-herb">
                Herbicides
              </h3>
              <p className="product-scientific">
                {"Glyphosate / Paraquat / 2,4-D — Technical & Formulated"}
              </p>
              <p>
                Al Rayees supplies a broad portfolio of herbicide active ingredients and formulated products for pre-emergence and post-emergence weed control in major crops. All products come with full regulatory documentation and safety data sheets (SDS/MSDS).
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Form
                  </span>
                  <span className="spec-value">
                    Technical / EC / WP / SC
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Purity
                  </span>
                  <span className="spec-value">
                    ≥ 95% (Technical)
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Shelf Life
                  </span>
                  <span className="spec-value">
                    2 Years
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Compliance
                  </span>
                  <span className="spec-value">
                    FAO Specs
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Rice
                  </span>
                  <span className="app-tag">
                    Palm Oil
                  </span>
                  <span className="app-tag">
                    Rubber
                  </span>
                  <span className="app-tag">
                    Corn
                  </span>
                  <span className="app-tag">
                    Soybean
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                1L / 5L / 20L HDPE Cans | 200L Drums | 25kg Bags (WP)
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  FAO / WHO Compliant
                </span>
                {" "}
                <a href="/contact?product=herbicides" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Insecticides */}
          <article className="product-card reveal" data-delay="100" aria-labelledby="prod-insect">
            <div className="product-card-image">
              <img src="/assets/images/insecticides.jpg" alt="Crop protection spraying" loading="lazy" />
              {" "}
              <span className="product-tag">
                Crop Protection
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-insect">
                Insecticides
              </h3>
              <p className="product-scientific">
                Pyrethroids / Organophosphates / Neonicotinoids
              </p>
              <p>
                A comprehensive range of insecticide active ingredients and finished formulations for control of major agricultural pests. Products include synthetic pyrethroids (Cypermethrin, Lambda-cyhalothrin), Chlorpyrifos, Imidacloprid, and biopesticide options.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Form
                  </span>
                  <span className="spec-value">
                    EC / WP / SC / GR
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Purity
                  </span>
                  <span className="spec-value">
                    ≥ 93% (Technical)
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Shelf Life
                  </span>
                  <span className="spec-value">
                    2 Years
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Compliance
                  </span>
                  <span className="spec-value">
                    FAO Specs
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Rice Pests
                  </span>
                  <span className="app-tag">
                    Bollworm
                  </span>
                  <span className="app-tag">
                    Aphids
                  </span>
                  <span className="app-tag">
                    Thrips
                  </span>
                  <span className="app-tag">
                    Storage
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                1L / 5L HDPE | 200L Drums | 25kg / 50kg Bags
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  FAO / WHO Compliant
                </span>
                {" "}
                <a href="/contact?product=insecticides" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
          {/* Fungicides */}
          <article className="product-card reveal" data-delay="200" aria-labelledby="prod-fungi">
            <div className="product-card-image">
              <img src="/assets/images/fungicides.jpg" alt="Healthy crops protected by fungicides" loading="lazy" />
              {" "}
              <span className="product-tag">
                Crop Protection
              </span>
              {" "}
              <span className="product-export-badge">
                ✈ Export Ready
              </span>
            </div>
            <div className="product-card-body">
              <h3 id="prod-fungi">
                Fungicides
              </h3>
              <p className="product-scientific">
                Triazoles / Benzimidazoles / Strobilurins
              </p>
              <p>
                Al Rayees supplies a full spectrum of systemic and contact fungicides for the control of fungal diseases in food and cash crops. Key active ingredients include Mancozeb, Tebuconazole, Azoxystrobin, Propiconazole, and Chlorothalonil.
              </p>
              <div className="product-specs">
                <div className="product-spec-item">
                  <span className="spec-label">
                    Form
                  </span>
                  <span className="spec-value">
                    WP / SC / EC
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Purity
                  </span>
                  <span className="spec-value">
                    ≥ 90% (Technical)
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Shelf Life
                  </span>
                  <span className="spec-value">
                    2 Years
                  </span>
                </div>
                <div className="product-spec-item">
                  <span className="spec-label">
                    Standard
                  </span>
                  <span className="spec-value">
                    FAO / CIPAC
                  </span>
                </div>
              </div>
              <div className="product-applications">
                <span className="apps-label">
                  Applications
                </span>
                <div className="apps-tags">
                  <span className="app-tag">
                    Blast Disease
                  </span>
                  <span className="app-tag">
                    Blight
                  </span>
                  <span className="app-tag">
                    Mildew
                  </span>
                  <span className="app-tag">
                    Rust
                  </span>
                  <span className="app-tag">
                    Seed Treatment
                  </span>
                </div>
              </div>
              <div className="product-packaging">
                <span className="packaging-icon">
                  📦
                </span>
                1L / 5L / 20L HDPE Cans | 25kg Bags | 200L Drums
              </div>
              <div className="product-card-footer">
                <span className="product-quality-badge">
                  CIPAC / FAO Compliant
                </span>
                {" "}
                <a href="/contact?product=fungicides" className="product-cta-btn">
                  Enquire Now
                </a>
              </div>
            </div>
          </article>
        </div>
        {/* /crop protection grid */}
      </div>
    </main>
    <section className="product-cta-banner" aria-labelledby="agri-cta-h2">
      <div className="container" style={{ position: "relative", zIndex: "1" }}>
        <h2 id="agri-cta-h2" style={{ color: "var(--white)" }}>
          Supplying Agriculture's Essential Inputs
        </h2>
        <p>
          Talk to our agricultural trading specialists for technical specifications and bulk supply proposals.
        </p>
        <div className="btn-group">
          <a href="/contact" className="btn btn-primary btn-lg">
            Request Technical Specs
          </a>
          {" "}
          <a href="mailto:info@alrayeesmy.com" className="btn btn-outline btn-lg">
            ✉ Email Us
          </a>
        </div>
      </div>
    </section>
    <div id="footer-placeholder"></div>
    </>
  );
}
