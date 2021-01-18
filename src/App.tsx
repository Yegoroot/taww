import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes, { renderRoutes } from 'src/routes'

export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      {/* <UpdateApp /> */}
      {/* <Alerts /> */}
      {renderRoutes(routes)}
      {/* </AuthProvider> */}
    </BrowserRouter>
  )
}
