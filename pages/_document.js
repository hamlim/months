import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import color from 'css-color-function';
import colors from '../styles/colors';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <style>{`
           :root {

             --a: ${colors.a};
             --a-muted-one: ${color.convert(`color(${colors.a} lightness(+ 5%))`)};
             --a-muted-two: ${color.convert(`color(${colors.a} lightness(+ 20%))`)};
             --b: ${colors.b};
             --b-muted-one: ${color.convert(`color(${colors.b} lightness(+ 5%))`)};
             --b-muted-two: ${color.convert(`color(${colors.b} lightness(+ 20%))`)};
             --c: ${colors.c};
             --c-muted-one: ${color.convert(`color(${colors.c} lightness(+ 5%))`)};
             --c-muted-two: ${color.convert(`color(${colors.c} lightness(+ 20%))`)};
             --d: ${colors.d};
             --d-muted-one: ${color.convert(`color(${colors.d} lightness(+ 5%))`)};
             --d-muted-two: ${color.convert(`color(${colors.d} lightness(+ 20%))`)};
             --e: ${colors.e};
             --e-muted-one: ${color.convert(`color(${colors.e} lightness(+ 5%))`)};
             --e-muted-two: ${color.convert(`color(${colors.e} lightness(+ 20%))`)};
            
            --white: ${colors.white};
            --black: ${colors.black};
            --gray: ${colors.gray};
            --softWhite: ${colors.softWhite};

            --fonts: -apple-system,
                      BlinkMacSystemFont,
                      Roboto,
                      Oxygen-Sans,
                      Ubuntu,
                      Cantarell,
                      sans-serif;
            --font-size: 18px;

            --width: 45rem;
            --width-s: 30rem;
          }


          *, *::after, *::before {
            box-sizing: inherit;
            margin: 0;
            padding: 0;
          }
          html {
            box-sizing: border-box;
            font-family: var(--fonts);
            font-size: var(--font-size);
            color: var(--black);
            background-color: var(--softWhite);
          }`}
          </style>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
