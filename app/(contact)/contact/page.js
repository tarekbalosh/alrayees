export const metadata = {
  title: "Contact Us | Al Rayees SDN BHD — International Trading Enquiries",
  description: "Contact Al Rayees SDN BHD for international trading enquiries, product quotations, and partnership opportunities. Located in Ampang, Selangor, Malaysia.",
  keywords: "Al Rayees contact, Malaysia trading company contact, vegetable oil supplier enquiry, commodity trading quotation, Ampang Selangor",
  alternates: { canonical: "https://www.alrayeesmy.com/contact" },
  openGraph: { title: "Contact Al Rayees SDN BHD", description: "Get in touch with our international trading team for quotations and partnerships." },
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
        Al Rayees — Contact Us
      </p>
    </div>
    <div id="nav-placeholder"></div>
    {/* PAGE HERO */}
    <header className="page-hero page-hero--motion" aria-labelledby="contact-h1">
      <div className="hero-motion" aria-hidden="true">
        <div className="hero-layer hero-layer-bg" data-depth="0.45">
          <img src="/assets/images/contact_us.jpg" alt="" className="page-hero-bg" loading="eager" />
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
            Contact Us
          </span>
        </nav>
        <h1 id="contact-h1">
          Contact Us
        </h1>
        <p>
          Reach our international trading team for product enquiries, quotations, and partnership opportunities. We respond within 24 business hours.
        </p>
      </div>
    </header>
    {/* CONTACT SECTION */}
    <main className="contact-section section" id="main-content">
      <div className="container contact-grid">
        {/* Info Sidebar */}
        <aside className="contact-info-card reveal reveal-left" aria-label="Contact information">
          <h3>
            Get in Touch
          </h3>
          <p>
            Our trading specialists are ready to assist with enquiries, specifications, and quotations.
          </p>
          <div className="contact-detail">
            <div className="contact-detail-icon" aria-hidden="true">
              📍
            </div>
            <div className="contact-detail-text">
              <label>
                Registered Address
              </label>
              {" "}
              <span>
                B6-M, Jalan Selaman 1
                <br />
                Dataran Palma, 68000 Ampang
                <br />
                Selangor, Kuala Lumpur, Malaysia
              </span>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon" aria-hidden="true">
              📞
            </div>
            <div className="contact-detail-text">
              <label>
                Business Telephone
              </label>
              {" "}
              <a href="tel:+601168206810">
                +60 11 6820 6810
              </a>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon" aria-hidden="true">
              📠
            </div>
            <div className="contact-detail-text">
              <label>
                Facsimile
              </label>
              {" "}
              <span>
                +60 3 4266 2961
              </span>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon" aria-hidden="true">
              ✉
            </div>
            <div className="contact-detail-text">
              <label>
                Email Address
              </label>
              {" "}
              <a href="mailto:info@alrayeesmy.com">
                info@alrayeesmy.com
              </a>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon" aria-hidden="true">
              🌐
            </div>
            <div className="contact-detail-text">
              <label>
                Website
              </label>
              {" "}
              <a href="https://www.alrayeesmy.com" target="_blank" rel="noopener">
                www.alrayeesmy.com
              </a>
            </div>
          </div>
          <div className="contact-hours">
            <h6>
              Business Hours
            </h6>
            <div className="hours-row">
              <span>
                Monday – Friday
              </span>
              <span className="status">
                8:00 AM – 6:00 PM MYT
              </span>
            </div>
            <div className="hours-row">
              <span>
                Saturday
              </span>
              <span className="status">
                9:00 AM – 1:00 PM MYT
              </span>
            </div>
            <div className="hours-row">
              <span>
                Sunday / Public Holidays
              </span>
              <span className="closed">
                Closed
              </span>
            </div>
          </div>
          <div className="contact-quick-actions">
            <a href="https://wa.me/601168206810?text=Hello%20Al%20Rayees%2C%20I%20have%20a%20trading%20enquiry." target="_blank" rel="noopener" className="quick-action-btn whatsapp" id="whatsapp-btn" aria-label="Chat on WhatsApp">
              {" 💬 Chat on WhatsApp "}
            </a>
            {" "}
            <a href="tel:+601168206810" className="quick-action-btn phone" id="call-btn" aria-label="Call us">
              {" 📞 Call: +60 11 6820 6810 "}
            </a>
            {" "}
            <a href="mailto:info@alrayeesmy.com" className="quick-action-btn email" id="email-btn" aria-label="Send email">
              {" ✉ info@alrayeesmy.com "}
            </a>
          </div>
        </aside>
        {/* Contact Form */}
        <section className="contact-form-wrap reveal reveal-right" aria-labelledby="form-heading">
          <h3 id="form-heading">
            Send an Enquiry
          </h3>
          <p>
            Fill in the form below and our team will respond within 24 business hours.
          </p>
          <form id="contact-form" noValidate aria-label="Enquiry form">
            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">
                  {"First Name "}
                  <span className="required" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input type="text" id="first-name" name="first_name" className="form-input" placeholder="John" required autoComplete="given-name" aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">
                  {"Last Name "}
                  <span className="required" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input type="text" id="last-name" name="last_name" className="form-input" placeholder="Smith" required autoComplete="family-name" aria-required="true" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="company">
                {"Company Name "}
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>
              {" "}
              <input type="text" id="company" name="company" className="form-input" placeholder="Your Company Ltd." required autoComplete="organization" aria-required="true" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  {"Email Address "}
                  <span className="required" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input type="email" id="email" name="email" className="form-input" placeholder="john@company.com" required autoComplete="email" aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Phone / WhatsApp
                </label>
                {" "}
                <input type="tel" id="phone" name="phone" className="form-input" placeholder="+1 234 567 8900" autoComplete="tel" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="country">
                {"Country "}
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>
              {" "}
              <select id="country" name="country" className="form-input" required aria-required="true">
                <option value="">
                  — Select your country —
                </option>
                <option>
                  Malaysia
                </option>
                <option>
                  United Arab Emirates
                </option>
                <option>
                  Saudi Arabia
                </option>
                <option>
                  India
                </option>
                <option>
                  China
                </option>
                <option>
                  Indonesia
                </option>
                <option>
                  Pakistan
                </option>
                <option>
                  Bangladesh
                </option>
                <option>
                  Egypt
                </option>
                <option>
                  Nigeria
                </option>
                <option>
                  Turkey
                </option>
                <option>
                  Philippines
                </option>
                <option>
                  Vietnam
                </option>
                <option>
                  Kenya
                </option>
                <option>
                  Germany
                </option>
                <option>
                  United Kingdom
                </option>
                <option>
                  Netherlands
                </option>
                <option>
                  Brazil
                </option>
                <option>
                  South Africa
                </option>
                <option>
                  Australia
                </option>
                <option>
                  Other
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="product-interest">
                {"Product of Interest "}
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>
              {" "}
              <select id="product-interest" name="product_interest" className="form-input" required aria-required="true">
                <option value="">
                  — Select a product category —
                </option>
                <optgroup label="Vegetable Oils">
                  <option>
                    Soybean Oil
                  </option>
                  <option>
                    Palm Oil (CPO / RBD)
                  </option>
                  <option>
                    Sunflower Oil
                  </option>
                  <option>
                    Corn Oil
                  </option>
                  <option>
                    Canola Oil
                  </option>
                  <option>
                    Olive Oil
                  </option>
                </optgroup>
                <optgroup label={"Grains & Foodstuffs"}>
                  <option>
                    Rice
                  </option>
                  <option>
                    Wheat
                  </option>
                  <option>
                    Beans
                  </option>
                  <option>
                    Peas
                  </option>
                  <option>
                    Lentils
                  </option>
                  <option>
                    Tea
                  </option>
                  <option>
                    Coffee
                  </option>
                  <option>
                    Sugar (ICUMSA 45 / 150 / 600)
                  </option>
                  <option>
                    Salt
                  </option>
                </optgroup>
                <optgroup label="Agricultural Inputs">
                  <option>
                    Chemical Fertilizers (Urea / DAP / NPK)
                  </option>
                  <option>
                    Organic Fertilizers
                  </option>
                  <option>
                    Liming Agents
                  </option>
                  <option>
                    Herbicides
                  </option>
                  <option>
                    Insecticides
                  </option>
                  <option>
                    Fungicides
                  </option>
                </optgroup>
                <option value="general">
                  General Inquiry / Multiple Products
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">
                Estimated Quantity
              </label>
              {" "}
              <input type="text" id="quantity" name="quantity" className="form-input" placeholder="e.g. 500 MT per month, 1 x 20ft container" />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                {"Message / Specifications "}
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>
              {" "}
              <textarea id="message" name="message" className="form-input" rows="5" required aria-required="true" placeholder="Please describe your requirements, including product grade, quantity, destination port, and preferred shipping terms (FOB, CIF, etc.)..." />
            </div>
            <div className="form-checkbox-group">
              <input type="checkbox" id="consent" name="consent" required aria-required="true" />
              {" "}
              <label htmlFor="consent">
                I consent to Al Rayees SDN BHD storing and using my submitted data to respond to my enquiry. I understand my data will not be shared with third parties.
              </label>
            </div>
            <div id="form-success" className="form-success-msg" role="alert" aria-live="polite">
              ✓ Thank you! Your enquiry has been received. Our team will respond within 24 business hours.
            </div>
            <button type="submit" className="form-submit-btn" id="submit-btn" aria-label="Send enquiry">
              <span>
                Send Enquiry
              </span>
              {" "}
              <span aria-hidden="true">
                →
              </span>
            </button>
            <p className="form-note">
              🔒 Your information is protected and never shared with third parties.
            </p>
          </form>
        </section>
      </div>
    </main>
    {/* OFFICE & MAP SECTION */}
    <section className="map-section section" style={{ paddingTop: "0" }} aria-labelledby="office-heading">
      <div className="container">
        <div className="office-section-header reveal">
          <span className="section-label">
            Our Location
          </span>
          <h2 id="office-heading">
            Visit Our Office
          </h2>
          <p>
            Al Rayees SDN BHD operates from Dataran Palma in Ampang, Selangor — minutes from central Kuala Lumpur and well connected to Port Klang and KLIA.
          </p>
        </div>
        <div className="office-map-grid">
          <figure className="office-photo-card reveal reveal-left">
            <img src="/assets/images/office_building.png" alt="Al Rayees SDN BHD offices — branded interior, entrance, and headquarters building" loading="lazy" />
            <figcaption>
              <h5>
                Al Rayees SDN BHD — Headquarters
              </h5>
              <p>
                Dataran Palma, Ampang, Selangor, Malaysia
              </p>
            </figcaption>
          </figure>
          <div className="map-container reveal reveal-right">
            <iframe src={"https://www.google.com/maps?q=Dataran%20Palma%2C%20Jalan%20Selaman%201%2C%2068000%20Ampang%2C%20Selangor%2C%20Malaysia&z=16&output=embed"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Al Rayees SDN BHD office location in Ampang Selangor Malaysia" aria-label="Google Maps showing Al Rayees office location"></iframe>
            <div className="map-overlay-card">
              <h5>
                Al Rayees SDN BHD
              </h5>
              <p>
                B6-M, Jalan Selaman 1, Dataran Palma
                <br />
                68000 Ampang, Selangor
                <br />
                Kuala Lumpur, Malaysia
              </p>
              <a className="map-directions-btn" href={"https://www.google.com/maps/dir/?api=1&destination=Dataran+Palma,+Jalan+Selaman+1,+68000+Ampang,+Selangor,+Malaysia"} target="_blank" rel="noopener">
                {" 🧭 Get Directions "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TRUST SECTION — SSM */}
    <section style={{ background: "var(--cream)", padding: "var(--space-16) 0" }} aria-labelledby="trust-heading">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="section-label">
          Legal Compliance
        </span>
        <h2 id="trust-heading">
          {"Registered & Compliant"}
        </h2>
        <p style={{ maxWidth: "560px", margin: "var(--space-4) auto var(--space-8)" }}>
          Al Rayees SDN BHD is officially registered with Suruhanjaya Syarikat Malaysia (SSM).
          <br />
          {" Reg. No. "}
          <strong style={{ color: "var(--navy-700)" }}>
            202501016344 (1618413-W)
          </strong>
        </p>
        <a href="/assets/images/al_rayess_ssm.png" target="_blank" rel="noopener" className="btn btn-navy">
          {" 📄 View Company Registration Document "}
        </a>
      </div>
    </section>
    <div id="footer-placeholder"></div>
    </>
  );
}
