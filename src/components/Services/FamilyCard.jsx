/* eslint-disable import/prefer-default-export */
import React from 'react'
import { useTranslation } from 'react-i18next'
import src from '../../assets/images/IconsImg/family.png'
import { useStyles } from './stylePngIcon'

export const FamilyCard = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.wrapSlide}>
      <img
        src={src}
        alt="-"
        className={classes.img}
      />
      <span className={classes.slideTitle}>
        {t('card.family')}
      </span>
    </div>
  )
}
