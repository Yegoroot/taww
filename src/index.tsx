import React from 'react'
import ReactDOM from 'react-dom'
import { SettingsProvider } from 'src/contexts/SettingsContext'
import App from 'src/App'
import * as serviceWorker from 'src/serviceWorker'
// import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <SettingsProvider>
    <App />
  </SettingsProvider>,

  document.getElementById('root')
)

serviceWorker.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
