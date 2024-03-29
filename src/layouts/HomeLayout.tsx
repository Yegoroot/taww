/* eslint-disable react/prop-types */
import React, { ReactChild } from 'react'
import { makeStyles } from '@material-ui/core'
import { ThemeOptions } from '../theme/index'
import Menu from '../components/Menu'

const useStyles = makeStyles((theme: ThemeOptions) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  wrapper: {
    overflow: 'auto'
  }
}))

const MainLayout = ({ children }:{children: ReactChild}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {children}
        <Menu />
      </div>
    </div>
  )
}

export default MainLayout
