import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    let pageContext;
    const page = ctx.renderPage((Component) => {
      const WrappedComponent = (props) => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };

      return WrappedComponent;
    });

    let css;
    if (pageContext) {
      css = pageContext.sheetsRegistry.toString();
    }
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        ...page,
        pageContext,
        styles: (
          <>
            <style
              id="jss-server-side"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: css }}
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
            {flush() || null}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
