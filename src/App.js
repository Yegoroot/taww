/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Button, /* SvgIcon */ } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
import Dashboard from './components/icons/Dashboard'

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

function Home() {
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

  const buttons = [
    {
      title: 'Home',
      link: '/home',
      icon: <Dashboard />
    },
    {
      title: 'Services',
      link: '/services',
      icon: 'icon'
    },
    {
      title: 'Digital Documents',
      link: '/documents',
      icon: 'icon'
    },
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: 'icon'
    },
    {
      title: 'My Profile',
      link: '/profile',
      icon: 'icon'
    },
  ]

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
        <Paper
          square
          className={classes.menu}
        >
          {
            buttons.map((button) => (
              <Button
                activeClassName="active"
                component={NavLink}
                to={button.link}
                key={button.title}
                size="small"
                color="default"
                className={classes.button}
              >
                <span className={classes.iconWrap}>
                  <span className={classes.svg}>
                    {button.icon}
                  </span>
                  <span className={classes.title}>
                    {button.title}
                  </span>
                </span>
              </Button>
            ))
          }

        </Paper>

      </Router>
    </div>
  )
}
