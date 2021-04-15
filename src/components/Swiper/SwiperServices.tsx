/* eslint-disable import/extensions */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'
import 'swiper/swiper.min.css'
import { KeyboardArrowRight } from '@material-ui/icons'
import {
  HealthPassportCard, HealthConditionCard, MicroscopeCard, VacineCard
} from '../Services/Services'

export const slideStyle = (t: any) => ({
  width: '140px !important',
  height: 'auto !important',
  border: 'solid 1px #fff',
  padding: '10px 0px',
  marginBottom: 5,
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
    fontSize: 20,
  }
}))

const SwiperServices = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <span className={classes.title}> New Services</span>
        <span className={classes.link}>
          Display All
          {' '}
          <KeyboardArrowRight className={classes.arrow} />
        </span>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
      >
        <SwiperSlide className={classes.slide}>
          <VacineCard />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <HealthPassportCard />
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
