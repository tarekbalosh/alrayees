import RootShell from '../../components/RootShell';

export default function Layout({ children }) {
  return (
    <RootShell
      lang="en"
      preconnect={[{"href":"https://fonts.googleapis.com","crossOrigin":false},{"href":"https://fonts.gstatic.com","crossOrigin":true}]}
      fonts="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      css={["/assets/css/variables.css","/assets/css/reset.css","/assets/css/nav-footer.css","/assets/css/home.css","/assets/css/payment.css?v=5"]}
      jsonLd={"\n  {\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Al Rayees SDN BHD\",\"url\":\"https://www.alrayeesmy.com\",\"logo\":\"https://www.alrayeesmy.com/assets/images/al_rayees_sdn_bhd_logo.xml\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+60-11-6820-6810\",\"contactType\":\"sales\",\"areaServed\":\"Worldwide\"},\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"B6-M, Jalan Selaman 1, Dataran Palma\",\"addressLocality\":\"Ampang\",\"addressRegion\":\"Selangor\",\"postalCode\":\"68000\",\"addressCountry\":\"MY\"},\"sameAs\":[\"https://wa.me/601168206810\"]}\n  "}
      scripts={[{"src":"/assets/js/components.js"},{"inline":"index-inline-0"},{"src":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"},{"src":"/assets/js/main.js"},{"src":"/assets/js/globe.js"}]}
    >
      {children}
    </RootShell>
  );
}
