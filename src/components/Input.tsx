import React, { ReactNode } from 'react'
import { TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(3)
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    display: 'flex',
    '& svg': {
      fontSize: 20
    }
  }
}))

export default function Input({ icon, title }:{icon: ReactNode, title: string}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span className={classes.header}>
        <span className={classes.icon}>{icon}</span>
        <span>{title}</span>
      </span>
      <TextField
        variant="outlined"
        size="small"
      />
    </div>
  )
}
