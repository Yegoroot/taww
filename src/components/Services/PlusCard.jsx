/* eslint-disable import/prefer-default-export */
import React from 'react'
import { useTranslation } from 'react-i18next'
import src from '../../assets/images/IconsImg/plus.png'
import { useStyles } from './stylePngIcon'

export const PlusCard = () => {
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
        {t('card.plus')}
      </span>
    </div>
  )
}
