import RootShell from '../../components/RootShell';

export default function Layout({ children }) {
  return (
    <RootShell
      lang="en"
      preconnect={[{"href":"https://fonts.googleapis.com","crossOrigin":false},{"href":"https://fonts.gstatic.com","crossOrigin":true}]}
      fonts="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
      css={["/assets/css/variables.css","/assets/css/reset.css","/assets/css/nav-footer.css","/assets/css/products.css","/assets/css/contact.css"]}
      jsonLd={"\n  {\"@context\":\"https://schema.org\",\"@type\":\"ContactPage\",\"name\":\"Contact Al Rayees SDN BHD\",\"description\":\"International trading enquiries and quotations\",\"url\":\"https://www.alrayeesmy.com/contact\",\"mainEntity\":{\"@type\":\"Organization\",\"name\":\"Al Rayees SDN BHD\",\"telephone\":\"+601168206810\",\"email\":\"info@alrayeesmy.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"B6-M, Jalan Selaman 1, Dataran Palma\",\"postalCode\":\"68000\",\"addressLocality\":\"Ampang\",\"addressRegion\":\"Selangor\",\"addressCountry\":\"MY\"},\"hasMap\":\"https://www.google.com/maps?q=Dataran+Palma,+Jalan+Selaman+1,+68000+Ampang,+Selangor,+Malaysia\"}}\n  "}
      scripts={[{"src":"/assets/js/components.js"},{"inline":"contact-inline-1"},{"src":"/assets/js/main.js"}]}
    >
      {children}
    </RootShell>
  );
}
