/* eslint-disable react/prop-types */
import React, { ReactChild } from 'react'
import { makeStyles } from '@material-ui/core'
import Menu from 'src/components/Menu'

const useStyles = makeStyles(() => ({
  root: {
  },
  wrapper: {
    padding: 20,
  }
}))

const MainLayout = ({ children }:{children: ReactChild}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Menu />
      <div className={classes.wrapper}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
