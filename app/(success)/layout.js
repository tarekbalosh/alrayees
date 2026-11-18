import RootShell from '../../components/RootShell';

export default function Layout({ children }) {
  return (
    <RootShell
      lang="en"
      preconnect={[{"href":"https://fonts.googleapis.com","crossOrigin":false},{"href":"https://fonts.gstatic.com","crossOrigin":true}]}
      fonts="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      css={["/assets/css/variables.css","/assets/css/reset.css","/assets/css/payment.css?v=5"]}
      scripts={[]}
    >
      {children}
    </RootShell>
  );
}
