import PageScripts from './PageScripts';
import { inlineScripts } from './inlineScripts';

// Shared <html>/<head>/<body> shell. Each original page keeps its own head
// (fonts, preconnect, CSS files in the original order, JSON-LD) and its own
// script list, so every route is rendered exactly like its HTML original.
export default function RootShell({ lang, bodyClassName, preconnect, fonts, css, jsonLd, scripts, children }) {
  const items = scripts.map((s) => (s.inline ? { code: inlineScripts[s.inline] } : s));
  return (
    <html lang={lang}>
      <head>
        {jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} /> : null}
        {preconnect.map((p) => (
          <link key={p.href} rel="preconnect" href={p.href} {...(p.crossOrigin ? { crossOrigin: '' } : {})} />
        ))}
        <link href={fonts} rel="stylesheet" />
        {css.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className={bodyClassName}>
        {children}
        {items.length ? <PageScripts items={items} /> : null}
      </body>
    </html>
  );
}
