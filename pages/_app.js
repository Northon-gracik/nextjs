import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const [themeLight, setThemeLight] = useState(true)

let theme = [{
  primary: '#0070f3',
  background : '#F9F9F9',
  },
  {
    background: '#181818',

  }
]

const theme = {
  colors: theme[themeLight ? 0 : 1]
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
