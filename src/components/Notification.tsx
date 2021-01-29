import React from 'react'
import { makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10,
  },
  downloadButton: {
    fontSize: 30,
    color: theme.palette.primary.main
  },

}))
export default function Notifications() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NotificationsNoneIcon className={classes.downloadButton} />
    </div>
  )
}
