/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Menu from 'src/components/Menu'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  menu: {
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    overflow: 'hidden'
  },
  iconWrap: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    paddingTop: 6
  },
  svg: {
    textAlign: 'center',
  },
  title: {
    whiteSpace: 'nowrap',
    textAlign: 'center',
    overflow: 'hidden',
    textTransform: 'capitalize',
    textOverflow: 'ellipsis',
  }
})

function HomePage() {
  return <h2>Home</h2>
}

function Services() {
  return (
    <h2>
      sdf
    </h2>
  )
}

export default function IconLabelTabs() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>

        <Menu />

      </Router>
    </div>
  )
}
