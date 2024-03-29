import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import HealthPassportIcon from '../IconsSvg/HealthPassport'
import UserCard from '../IconsSvg/UserCard'
import Family from '../IconsSvg/Family'
import HandHeart from '../IconsSvg/HandHeart'

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
  const { t } = useTranslation()
  return (
    <div className={classes.wrapSlide}>
      <HealthPassportIcon />
      <span className={classes.slideTitle}>
        {t('card.passport')}
      </span>
    </div>
  )
}
export const HealthConditionCard = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (

    <div className={classes.wrapSlide}>
      <UserCard />
      <span className={classes.slideTitle}>
        {t('card.cCard')}
      </span>
    </div>
  )
}
export const FamilyCard = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (

    <div className={classes.wrapSlide}>
      <Family />
      <span className={classes.slideTitle}>
        {t('card.family')}
      </span>
    </div>
  )
}

export const HandHeartCard = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (

    <div className={classes.wrapSlide}>
      <HandHeart />
      <span className={classes.slideTitle}>
        {t('card.handheart')}
      </span>
    </div>
  )
}
