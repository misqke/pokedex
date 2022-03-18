import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="pokedex clone" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//fonts.googleapis.com/css?family=Roboto:400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
