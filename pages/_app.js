import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    Light: {
      primary: '#0070f3',
      background : '#F9F9F9',
    },
    Dark: {
      primary: '#4298B5',
      background: '#181818',
      contrast: '#ffb999',
      text: '#777777'
    }
  } 
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
