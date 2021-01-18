/* eslint-disable react/prop-types */
import React, { ReactChild } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    padding: 20
  }
}))

const DashboardLayout = ({ children }:{children: ReactChild}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default DashboardLayout
