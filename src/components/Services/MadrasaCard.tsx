/* eslint-disable import/prefer-default-export */
import React from 'react'
import { useTranslation } from 'react-i18next'
import src from '../../assets/images/IconsPng/madrasa.jpg'
import { useStyles } from './stylePngIcon'

export const MadrasaCard = () => {
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
        {t('card.madrasa')}
      </span>
    </div>
  )
}
