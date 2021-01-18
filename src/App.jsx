/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'
import Menu from 'src/components/Menu'
import HomePage from 'src/views/Home'
import ServicesPage from 'src/views/Services'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: 20,
    backgroundImage: `url('./images/background/${theme.name}.png')`,
    height: '100%',
    backgroundSize: '60%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right'
  },

}))

export default function IconLabelTabs() {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.content}>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route
            exact
            path="/services"
          >
            <ServicesPage />
          </Route>
          <Route
            exact
            path="/"
          >
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
      <Menu />

    </Router>
  )
}
