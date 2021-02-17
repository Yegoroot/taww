import React from 'react'
import { makeStyles } from '@material-ui/core'
import HealthPassportIcon from '../icons/HealthPassport'
import UserCard from '../icons/UserCard'
import Family from '../icons/Family'
import Microscope from '../icons/Microscope'

const useStyles = makeStyles((theme) => ({
  root: {},

  wrapSlide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 13,
    color: theme.palette.text.primary,
    padding: 10,
    '& svg': {
      fontSize: 40,
      marginBottom: 8
    }
  },

  slideTitle: {
    color: theme.palette.text.primary,
  },

}))

export const HealthPassportCard = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapSlide}>
      <HealthPassportIcon />
      <span className={classes.slideTitle}>
        Health Passport
      </span>
    </div>
  )
}
export const HealthConditionCard = () => {
  const classes = useStyles()
  return (

    <div className={classes.wrapSlide}>
      <UserCard />
      <span className={classes.slideTitle}>
        Health Condition Card
      </span>
    </div>
  )
}
export const FamilyCard = () => {
  const classes = useStyles()
  return (

    <div className={classes.wrapSlide}>
      <Family />
      <span className={classes.slideTitle}>
        Family and Sponsored Members
      </span>
    </div>
  )
}
export const MicroscopeCard = () => {
  const classes = useStyles()
  return (

    <div className={classes.wrapSlide}>
      <Microscope />
      <span className={classes.slideTitle}>
        Covid-19 Test
      </span>
    </div>
  )
}
