import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <div className="flex justify-center">
              <div className="min-h-screen w-page text-white">
                <Main />
                <NextScript />
              </div>
          </div>
        </body>
      </Html>
    );
  }
}
