import React from 'react'
import { Button, Paper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Dashboard from './IconsSvg/menu/Dashboard'
import Profile from './IconsSvg/menu/Profile'
import Wallet from './IconsSvg/menu/Wallet'
import Grid from './IconsSvg/menu/Grid'
import Home from './IconsSvg/menu/Home'

const useStyles = makeStyles((theme) => ({
  menu: {
    // position: 'sticky',
    position: 'fixed',
    bottom: 0,
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    width: '100%',
    padding: '0 5px',
    zIndex: 1,
    overflow: 'hidden'
  },
  iconWrap: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    paddingTop: 4
  },
  svg: {
    textAlign: 'center',
  },
  button: {
    fontWeight: 400,
    color: theme.palette.text.secondary,
    '& .docs': {
      fontSize: 9
    },
    '& .dashb': {
      fontSize: 10
    },
  },
  title: {
    fontSize: 11,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    overflow: 'hidden',
    textTransform: 'capitalize',
    textOverflow: 'ellipsis',
  }
}))

const buttons = [
  {
    title: 'home',
    link: '/app/home',
    class: '',
    icon: <Home />
  },
  {
    title: 'services',
    link: '/app/services',
    class: '',
    icon: <Grid />
  },
  {
    title: 'documents',
    link: '/temp',
    class: 'docs',
    icon: <Wallet />
  },
  {
    title: 'dashboard',
    link: '/temp',
    class: 'dashb',
    icon: <Dashboard />
  },
  {
    title: 'profile',
    link: '/temp',
    class: '',
    icon: <Profile />
  },
]

export default function Menu() {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
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
          className={classes.button}
        >
          <span className={classes.iconWrap}>
            <span className={classes.svg}>
              {button.icon}
            </span>
            <span className={clsx(classes.title, button.class)}>
              {t(`menu.${button.title}`)}
            </span>
          </span>
        </Button>
      ))
    }

    </Paper>
  )
}
