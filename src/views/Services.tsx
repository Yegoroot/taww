import React from 'react'
import { makeStyles } from '@material-ui/core'

import { HealthPassportCard, HealthConditionCard, FamilyCard } from '../components/Services/Services'
import { slideStyle } from '../components/Swiper/SwiperServices'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: 10
  },
  slide: {
    ...slideStyle(theme),
    marginRight: theme.spacing(1)
  },
  block: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap'
  },
  titleBlock: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
    flexBasis: '100%'
  },
}))

const Services = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.block}>
        <span className={classes.titleBlock}>
          Health Services
        </span>
        <div className={classes.slide}>
          <HealthPassportCard />
        </div>
      </div>
      <div className={classes.block}>
        <span className={classes.titleBlock}>
          Dependents Services
        </span>
        <div className={classes.slide}>
          <HealthConditionCard />
        </div>
        <div className={classes.slide}>
          <FamilyCard />
        </div>
      </div>
    </div>
  )
}

export default Services
