import React from 'react'
import { makeStyles } from '@material-ui/core'
import { UserType } from '../constants'
import { SlidePhoto } from './Swiper/Slides'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(7),
    marginTop: theme.spacing(1)
  }

}))
export default function CardUser({ user }: {user: UserType}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SlidePhoto user={user} />
    </div>
  )
}
