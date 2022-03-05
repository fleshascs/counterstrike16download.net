import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

const supportedLangs = ['es', 'mk', 'pl', 'ro', 'ru', 'sr', 'tr'];
export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const { pathname } = ctx;
    const locale = pathname.split('/')[1];
    const lang = supportedLangs.includes(locale) ? locale : 'en-US';
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <meta name='theme-color' content='#000000' />
          <meta name='application-name' content={process.env.siteName} />
        </Head>
        <body className='antialiased text-white'>
          <Main />
          <NextScript />
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3219722052726085'
            crossorigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}
