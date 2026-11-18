import RootShell from '../../components/RootShell';

export default function Layout({ children }) {
  return (
    <RootShell
      lang="en"
      preconnect={[{"href":"https://fonts.googleapis.com","crossOrigin":false},{"href":"https://fonts.gstatic.com","crossOrigin":true}]}
      fonts="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
      css={["/assets/css/variables.css","/assets/css/reset.css","/assets/css/nav-footer.css","/assets/css/products.css","/assets/css/home.css","/assets/css/about.css"]}
      jsonLd={"\n  {\"@context\":\"https://schema.org\",\"@type\":\"AboutPage\",\"name\":\"About Al Rayees SDN BHD\",\"description\":\"A Malaysia-based international trading company specializing in agricultural commodities, vegetable oils, grains, foodstuffs, and industrial commodities.\",\"url\":\"https://www.alrayeesmy.com/about\",\"mainEntity\":{\"@type\":\"Organization\",\"name\":\"Al Rayees SDN BHD\",\"url\":\"https://www.alrayeesmy.com\",\"founder\":{\"@type\":\"Person\",\"name\":\"Husam-Aldin Alyousef\",\"jobTitle\":\"Chief Executive Officer\"}}}\n  "}
      scripts={[{"src":"/assets/js/components.js"},{"src":"/assets/js/main.js"}]}
    >
      {children}
    </RootShell>
  );
}
