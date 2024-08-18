import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <title>Leon Web Designs</title>
      <meta
        name="description"
        content="Leon Web Designs is a web design and development company that specializes in building custom websites for small businesses and entrepreneurs."
      />
      <meta
        name="keywords"
        content="web design, web development, custom websites, small businesses, entrepreneurs, custom software, software development, web design company, web development company"
      />
      <meta name="author" content="Leon Web Designs" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Leon Web Designs" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://leonwebdesigns.com" />
      <meta
        property="og:image"
        content="https://leon-web-designs.s3.amazonaws.com/Logo.png"
      />
      <meta
        property="og:description"
        content="Leon Web Designs is a web design and development company that specializes in building custom websites for small businesses and entrepreneurs."
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
