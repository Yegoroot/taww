import React from 'react'
import { useTranslation } from 'react-i18next'
import src from '../../assets/images/IconsImg/skoraya.svg'
import { useStyles } from './stylePngIcon'

export const Skoraya = () => {
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
        {t('card.skoraya')}
      </span>
    </div>
  )
}
