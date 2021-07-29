/* eslint-disable import/extensions */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'
import 'swiper/swiper.min.css'
import { KeyboardArrowRight } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import {
  HealthConditionCard, VacineCard, HealthPassportCard, HandHeartCard
} from '../Services/Services'
import { Family2Card } from '../Services/Family2Card'
import { MicroscopeCard } from '../Services/MicroscopeCard'

export const slideStyle = (t: any) => ({
  width: '105px !important',
  height: 'auto !important',
  border: 'solid 1px #fff',
  padding: '10px 0px',
  marginBottom: 5,
  paddingBottom: 30,
  borderRadius: 10,
  boxShadow: t.shadows[1],
  background: t.palette.background.default,
})

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    margin: 20,
    display: 'flex',
    'margin-top': 30,
    'justify-content': 'space-between'
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  link: {
    color: theme.palette.text.secondary,
    fontSize: 13,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center'
  },
  slide: slideStyle(theme),
  arrow: {
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
    fontSize: 20,
  }
}))

const SwiperServices = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <span className={classes.title}>{t('home.newServices')}</span>
        <span className={classes.link}>
          {t('home.displayAll')}
          <KeyboardArrowRight className={classes.arrow} />
        </span>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
      >
        <SwiperSlide className={classes.slide}>
          <HandHeartCard />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <HealthPassportCard />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <VacineCard />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <Family2Card />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <HealthConditionCard />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <MicroscopeCard />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default SwiperServices
