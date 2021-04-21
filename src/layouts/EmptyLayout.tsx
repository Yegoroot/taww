import React, { ReactChild } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    // height: '100%',
    // backgroundSize: '60%',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: '100% 90%',
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
