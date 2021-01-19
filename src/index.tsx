import React, {/* Suspense */ } from 'react'
import ReactDOM from 'react-dom'
import {
  jssPreset,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core'

// translate
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/translate/i18n'
// theme
import { createTheme } from 'src/theme'
import { create } from 'jss'
import rtl from 'jss-rtl'
import GlobalStyles from 'src/components/GlobalStyle'
//
import App from 'src/App'
import reportWebVitals from './reportWebVitals'
import { THEMES } from './constants'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
const theme = createTheme({
  direction: 'ltr',
  theme: THEMES.DARK
})

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <React.StrictMode>
          <GlobalStyles />
          <App />
        </React.StrictMode>
      </StylesProvider>
    </ThemeProvider>
  </I18nextProvider>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
