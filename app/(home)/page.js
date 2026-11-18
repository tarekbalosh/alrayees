import PaymentButton from '../../components/PaymentButton';

export const metadata = {
  title: "Al Rayees SDN BHD | International Trading — Vegetable Oils, Grains & Commodities",
  description: "Al Rayees SDN BHD is a premier international trading company based in Malaysia, specializing in vegetable oils, grains, and agricultural inputs. Global trade excellence.",
  keywords: "Al Rayees, international trading, Malaysia, vegetable oils, grains, palm oil, soybean oil, fertilizers, agricultural commodities, SDN BHD",
  alternates: { canonical: "https://www.alrayeesmy.com/" },
  openGraph: { type: "website", title: "Al Rayees SDN BHD | International Trading Corporation", description: "Global trading excellence in vegetable oils, grains, and agricultural inputs.", url: "https://www.alrayeesmy.com/", siteName: "Al Rayees SDN BHD" },
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
        Loading International Trading Platform
      </p>
    </div>
    {/* Nav injected by components.js */}
    <div id="nav-placeholder"></div>
    {/* ═══════════════════════════════════════════════════
     HERO
════════════════════════════════════════════════════ */}
    <section id="hero" aria-label="Hero section">
      <canvas id="hero-canvas" aria-hidden="true"></canvas>
      {" "}
      <canvas id="particle-canvas" aria-hidden="true"></canvas>
      <div className="hud-scanline" aria-hidden="true"></div>
      <div className="hero-content container">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-eyebrow">
              🌐 Malaysia-Based Global Trading Corporation
            </div>
            <h1 className="hero-title">
              AL-RAYEES
              <br />
              {" World-Class "}
              <span className="accent">
                Commodity Trading
              </span>
            </h1>
            <p className="hero-subtitle">
              Al Rayees SDN BHD delivers premium vegetable oils, grains, and agricultural inputs to global markets — backed by trust, quality, and decades of international expertise.
            </p>
            <div className="hero-buttons">
              <a href="/vegetable-oils" className="btn btn-primary btn-lg" id="hero-explore-btn">
                Explore Products
              </a>
              {" "}
              <a href="/contact" className="btn btn-outline btn-lg" id="hero-contact-btn">
                Request a Quote
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value" data-count="50" data-suffix="+">
                  50+
                </span>
                {" "}
                <span className="hero-stat-label">
                  Countries Served
                </span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value" data-count="200" data-suffix="+">
                  200+
                </span>
                {" "}
                <span className="hero-stat-label">
                  Product Lines
                </span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value" data-count="15" data-suffix="yr">
                  15yr
                </span>
                {" "}
                <span className="hero-stat-label">
                  Trading Experience
                </span>
              </div>
            </div>
          </div>
          <div className="hero-globe" aria-hidden="true">
            <div className="globe-glow"></div>
            <div className="globe-ring globe-ring-1"></div>
            <div className="globe-ring globe-ring-2"></div>
            <div className="globe-ring globe-ring-3"></div>
            <canvas id="globe-canvas" aria-label="Interactive 3D globe — hover and click active agricultural regions to discover their products"></canvas>
          </div>
        </div>
      </div>
    </section>
    {/* TICKER / MARQUEE */}
    <div className="ticker-bar" aria-label="Al Rayees commodity highlights">
      <div className="ticker-inner">
        <span className="ticker-item">
          <span className="ticker-icon">
            🫒
          </span>
          {" Vegetable Oils"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🌾
          </span>
          {" Premium Grains"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🌱
          </span>
          {" Agricultural Inputs"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🚢
          </span>
          {" Global Logistics"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🌍
          </span>
          {" 50+ Countries Served"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🤝
          </span>
          {" Trusted Partnerships"}
        </span>
        {/* duplicate set for seamless loop */}
        <span className="ticker-item">
          <span className="ticker-icon">
            🫒
          </span>
          {" Vegetable Oils"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🌾
          </span>
          {" Premium Grains"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🌱
          </span>
          {" Agricultural Inputs"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🚢
          </span>
          {" Global Logistics"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🌍
          </span>
          {" 50+ Countries Served"}
        </span>
        {" "}
        <span className="ticker-item">
          <span className="ticker-icon">
            🤝
          </span>
          {" Trusted Partnerships"}
        </span>
      </div>
    </div>
    {/* ═══════════════════════════════════════════════════
     ABOUT SNAPSHOT
════════════════════════════════════════════════════ */}
    <section id="about" className="about-snapshot section" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-image-wrap reveal reveal-left">
          <div className="about-slideshow" role="img" aria-label="Al Rayees agricultural commodities — vegetable oils, canola, palm, olives, grains, sunflower, rice, coffee and sugar">
            <img className="about-slide" src="/assets/images/all_v_oil.jpg" alt="Vegetable oils" loading="lazy" />
            {" "}
            <img className="about-slide" src="/assets/images/canola.jpg" alt="Canola" loading="lazy" />
            {" "}
            <img className="about-slide" src="/assets/images/palm.jpg" alt="Palm oil" loading="lazy" />
            {" "}
            <img className="about-slide" src="/assets/images/olives.jpg" alt="Olives" loading="lazy" />
            {" "}
            <img className="about-slide" src="/assets/images/mix_grains_2.jpg" alt="Mixed grains" loading="lazy" />
            {" "}
            <img className="about-slide" src="/assets/images/sun_flower.jpg" alt="Sunflower" loading="lazy" />
            {" "}
            <img className="about-slide" src="/assets/images/rice.jpg" alt="Rice" loading="lazy" />
            {" "}
            <img className="about-slide" src="/assets/images/coffee.jpg" alt="Coffee" loading="lazy" />
            {" "}
            <img className="about-slide" src="/assets/images/sugar.jpg" alt="Sugar" loading="lazy" />
            {" "}
            <span className="about-live-badge">
              <span className="live-dot"></span>
              {" LIVE"}
            </span>
          </div>
          <div className="about-badge">
            <span className="about-badge-num" data-count="15" data-suffix="+">
              15+
            </span>
            {" "}
            <span className="about-badge-label">
              Years of Excellence
            </span>
          </div>
        </div>
        <div className="about-content reveal reveal-right">
          <span className="section-label">
            About Al Rayees
          </span>
          <h2 id="about-heading">
            Bridging Global Markets With Premium Commodities
          </h2>
          <p>
            Al Rayees SDN BHD (Reg. No. 202501016344) is a Malaysian-registered international trading corporation with a global footprint across Asia, the Middle East, Europe, Africa, and the Americas.
          </p>
          <p>
            We specialize in sourcing, trading, and delivering high-quality agricultural commodities, vegetable oils, grains, fertilizers, and industrial raw materials — connecting the world's best producers with discerning international buyers.
          </p>
          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon">
                🔬
              </div>
              <div className="feature-text">
                <h5>
                  International Quality Standards
                </h5>
                <p>
                  Every product undergoes rigorous quality verification against ISO, CODEX, and industry-specific international standards.
                </p>
              </div>
            </div>
            <div className="about-feature">
              <div className="feature-icon">
                🚢
              </div>
              <div className="feature-text">
                <h5>
                  Reliable Supply Chain
                </h5>
                <p>
                  Robust logistics and supply chain management ensuring timely delivery across all continents.
                </p>
              </div>
            </div>
            <div className="about-feature">
              <div className="feature-icon">
                🤝
              </div>
              <div className="feature-text">
                <h5>
                  Long-Term Partnerships
                </h5>
                <p>
                  We build lasting relationships with suppliers and buyers built on trust, transparency, and mutual growth.
                </p>
              </div>
            </div>
          </div>
          <a href="/contact" className="btn btn-navy">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
    {/* ═══════════════════════════════════════════════════
     PRODUCT CATEGORIES
════════════════════════════════════════════════════ */}
    <section className="products-overview section" aria-labelledby="products-heading">
      <div className="container">
        <div className="text-center section-title reveal">
          <span className="section-label">
            Our Portfolio
          </span>
          <h2 id="products-heading">
            Three Core Commodity Categories
          </h2>
          <p style={{ maxWidth: "580px", margin: "var(--space-4) auto 0" }}>
            From premium vegetable oils to essential agricultural inputs — we trade the commodities that power economies worldwide.
          </p>
        </div>
        <div className="product-cats-grid" style={{ marginTop: "var(--space-12)" }}>
          <a href="/vegetable-oils" className="product-cat-card reveal" data-delay="0" aria-label="Vegetable Oils products">
            <img src="/assets/images/all_v_oil.jpg" alt="Vegetable oils including palm oil and soybean oil" loading="lazy" />
            <div className="product-cat-overlay">
              <span className="product-cat-icon">
                🫒
              </span>
              <h3 className="product-cat-name">
                Vegetable Oils
              </h3>
              <span className="product-cat-count">
                6 Products
              </span>
            </div>
            <div className="product-cat-arrow">
              →
            </div>
          </a>
          {" "}
          <a href="/grains-foodstuffs" className="product-cat-card reveal" data-delay="100" aria-label="Grains and Foodstuffs products">
            <img src="/assets/images/mix_grains_3.jpg" alt="Grains including wheat and rice" loading="lazy" />
            <div className="product-cat-overlay">
              <span className="product-cat-icon">
                🌾
              </span>
              <h3 className="product-cat-name">
                {"Grains & Foodstuffs"}
              </h3>
              <span className="product-cat-count">
                9 Products
              </span>
            </div>
            <div className="product-cat-arrow">
              →
            </div>
          </a>
          {" "}
          <a href="/agricultural-inputs" className="product-cat-card reveal" data-delay="200" aria-label="Agricultural Inputs products">
            <img src="/assets/images/chemical_fertilizers_2.jpg" alt="Agricultural inputs including fertilizers" loading="lazy" />
            <div className="product-cat-overlay">
              <span className="product-cat-icon">
                🌱
              </span>
              <h3 className="product-cat-name">
                Agricultural Inputs
              </h3>
              <span className="product-cat-count">
                6 Products
              </span>
            </div>
            <div className="product-cat-arrow">
              →
            </div>
          </a>
        </div>
      </div>
    </section>
    {/* ═══════════════════════════════════════════════════
     WHY CHOOSE US
════════════════════════════════════════════════════ */}
    <section className="why-us section" aria-labelledby="why-heading">
      <div className="container">
        <div className="text-center reveal">
          <span className="section-label">
            Why Al Rayees
          </span>
          <h2 id="why-heading">
            The Trading Partner You Can Trust
          </h2>
        </div>
        <div className="why-us-grid">
          <div className="why-card reveal" data-delay="0">
            <div className="why-icon">
              🏆
            </div>
            <h4>
              Premium Quality Assurance
            </h4>
            <p>
              Rigorous multi-stage quality control verified against international ISO, CODEX, and industry standards for every shipment.
            </p>
          </div>
          <div className="why-card reveal" data-delay="100">
            <div className="why-icon">
              🌍
            </div>
            <h4>
              Global Network
            </h4>
            <p>
              Established partnerships in 50+ countries across Asia, Europe, the Middle East, Africa, and the Americas.
            </p>
          </div>
          <div className="why-card reveal" data-delay="200">
            <div className="why-icon">
              🚢
            </div>
            <h4>
              Reliable Logistics
            </h4>
            <p>
              End-to-end supply chain management with flexible shipping terms: FOB, CIF, CFR, DAP, and more.
            </p>
          </div>
          <div className="why-card reveal" data-delay="300">
            <div className="why-icon">
              📋
            </div>
            <h4>
              Full Documentation
            </h4>
            <p>
              Complete export documentation including certificates of origin, phytosanitary, and quality certificates.
            </p>
          </div>
          <div className="why-card reveal" data-delay="400">
            <div className="why-icon">
              🔒
            </div>
            <h4>
              {"Compliance & Integrity"}
            </h4>
            <p>
              Fully registered Malaysian corporation operating with complete legal compliance and transparent business practices.
            </p>
          </div>
          <div className="why-card reveal" data-delay="500">
            <div className="why-icon">
              💼
            </div>
            <h4>
              Flexible Trade Terms
            </h4>
            <p>
              Competitive pricing with adaptable payment terms and tailored contracts for long-term supply agreements.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* ═══════════════════════════════════════════════════
     COMPANY REGISTRATION
════════════════════════════════════════════════════ */}
    <section id="ssm" className="ssm-section section" aria-labelledby="ssm-heading">
      <div className="container ssm-inner">
        <div className="ssm-text reveal reveal-left">
          <span className="section-label" style={{ color: "var(--gold-300)" }}>
            {"Legal & Compliance"}
          </span>
          <h2 id="ssm-heading" style={{ color: "var(--white)" }}>
            {"Fully Registered & Compliant"}
          </h2>
          <p>
            {"Al Rayees SDN BHD is officially registered with the Companies Commission of Malaysia (Suruhanjaya Syarikat Malaysia — SSM) under registration number "}
            <strong style={{ color: "var(--gold-300)" }}>
              202501016344 (1618413-W)
            </strong>
            .
          </p>
          <p>
            We operate with complete legal transparency and regulatory compliance, giving our global partners full confidence in every transaction.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-6)", flexWrap: "wrap" }}>
            <a href="/assets/images/al_rayess_ssm.png" target="_blank" rel="noopener" className="btn btn-primary">
              View Registration
            </a>
            {" "}
            <a href="/contact" className="btn btn-outline">
              Partner With Us
            </a>
          </div>
        </div>
        <div className="ssm-doc-preview reveal reveal-right">
          <img src="/assets/images/al_rayess_ssm.png" alt="Al Rayees SDN BHD company registration document from SSM Malaysia" loading="lazy" />
          <div className="ssm-doc-overlay">
            <a href="/assets/images/al_rayess_ssm.png" target="_blank" rel="noopener" className="btn btn-primary">
              View Full Document
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* ═══════════════════════════════════════════════════
     SECURE PAYMENT
════════════════════════════════════════════════════ */}
    <section id="payment" className="payment-section section" aria-labelledby="payment-heading">
      <div className="container text-center">
        <span className="section-label" style={{ color: "#4CAF50" }}>
          Secure Transactions
        </span>
        <h2 id="payment-heading">
          {"Fast & Secure Payment"}
        </h2>
        <p style={{ maxWidth: "560px", margin: "var(--space-4) auto var(--space-8)" }}>
          We ensure the highest level of security for all your trading transactions through our encrypted payment gateway.
        </p>
        <div className="payment-card reveal">
          <div className="payment-icon-wrapper">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              {" "}
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h3>
            Complete Your Payment
          </h3>
          <p>
            قم بإتمام عملية الدفع الخاصة بك بأمان تام وسرية عالية. نحن نستخدم أحدث تقنيات التشفير لضمان حماية بياناتك.
          </p>
          <PaymentButton />
        </div>
      </div>
    </section>
    {/* ═══════════════════════════════════════════════════
     GLOBAL REACH
════════════════════════════════════════════════════ */}
    <section id="global" className="global-reach section" aria-labelledby="global-heading">
      <div className="container text-center">
        <span className="section-label">
          Global Footprint
        </span>
        <h2 id="global-heading">
          Trading Across 50+ Countries
        </h2>
        <p style={{ maxWidth: "560px", margin: "var(--space-4) auto var(--space-8)" }}>
          Our commodities reach buyers and partners across every major trading region in the world.
        </p>
        <div className="countries-grid reveal">
          <div className="country-chip">
            <span className="flag">
              🇲🇾
            </span>
            {" Malaysia"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇦🇪
            </span>
            {" UAE"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇸🇦
            </span>
            {" Saudi Arabia"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇮🇳
            </span>
            {" India"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇨🇳
            </span>
            {" China"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇮🇩
            </span>
            {" Indonesia"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇵🇰
            </span>
            {" Pakistan"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇧🇩
            </span>
            {" Bangladesh"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇪🇬
            </span>
            {" Egypt"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇳🇬
            </span>
            {" Nigeria"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇹🇷
            </span>
            {" Turkey"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇵🇭
            </span>
            {" Philippines"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇻🇳
            </span>
            {" Vietnam"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇰🇪
            </span>
            {" Kenya"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇩🇪
            </span>
            {" Germany"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇬🇧
            </span>
            {" UK"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇳🇱
            </span>
            {" Netherlands"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇧🇷
            </span>
            {" Brazil"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇿🇦
            </span>
            {" South Africa"}
          </div>
          <div className="country-chip">
            <span className="flag">
              🇦🇺
            </span>
            {" Australia"}
          </div>
        </div>
        <a href="/contact" className="btn btn-navy" style={{ marginTop: "var(--space-10)" }}>
          Enquire for Your Country
        </a>
      </div>
    </section>
    {/* Footer injected by components.js */}
    <div id="footer-placeholder"></div>
    {/* Scripts */}
    </>
  );
}
