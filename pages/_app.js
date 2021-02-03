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
      primary: '#ff5555',
      background: '#181818',
      contrast: '#FF85CB'
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
