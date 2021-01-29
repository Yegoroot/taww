import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    justifyContent: 'center'
  },
  circle: {
    background: theme.palette.text.secondary,
    borderRadius: '50%',
    width: theme.spacing(1),
    height: theme.spacing(1),
  },
  wrapper: {
    width: theme.spacing(3),
    justifyContent: 'space-between',
    display: 'flex',
    position: 'relative'
  },
  marker: {
    background: theme.palette.primary.main,
    borderRadius: '50%',
    width: theme.spacing(1) + 2,
    height: theme.spacing(1) + 2,
    position: 'absolute',
    marginTop: -1,
    marginLeft: -1
  },
  markerNext: {
    transform: 'translateX(16px)'
  },

}))

export default function Pagination({ marker }: { marker: any}) {
  const classes = useStyles()
  return (
    <div className={classes.pagination}>
      <div className={classes.wrapper}>
        <span className={classes.circle} />
        <span className={classes.circle} />
        <span className={clsx({
          [classes.marker]: true,
          [classes.markerNext]: marker
        })}
        />
      </div>
    </div>
  )
}
