import React from 'react'
import { makeStyles } from '@material-ui/core'

import { HealthPassportCard, HealthConditionCard, /* FamilyCard */ } from '../components/Services/Services'
import { CertificateCard } from '../components/Services/CertificateCard'
import { FamilyCard } from '../components/Services/FamilyCard'
import { IssuePermitsCard } from '../components/Services/IssuePermitsCard'
import { MicroscopeCard } from '../components/Services/MicroscopeCard'
import { PeopleCard } from '../components/Services/PeopleCard'
import { People2Card } from '../components/Services/People2Card'
import { People3Card } from '../components/Services/People3Card'
import { PermitsCard } from '../components/Services/PermitsCard'
import { PlusCard } from '../components/Services/PlusCard'
import { QuestionCard } from '../components/Services/QuestionCard'
import { TimeCard } from '../components/Services/TimeCard'
import { VaccineCard } from '../components/Services/VaccineCard'
import { WarningCard } from '../components/Services/WarningCard'

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
          <CertificateCard />
        </div>
        <div className={classes.slide}>
          <IssuePermitsCard />
        </div>
        <div className={classes.slide}>
          <MicroscopeCard />
        </div>
        <div className={classes.slide}>
          <PeopleCard />
        </div>
        <div className={classes.slide}>
          <People2Card />
        </div>
        <div className={classes.slide}>
          <People3Card />
        </div>
        <div className={classes.slide}>
          <PermitsCard />
        </div>
        <div className={classes.slide}>
          <PlusCard />
        </div>
        <div className={classes.slide}>
          <QuestionCard />
        </div>
        <div className={classes.slide}>
          <TimeCard />
        </div>
        <div className={classes.slide}>
          <VaccineCard />
        </div>
        <div className={classes.slide}>
          <WarningCard />
        </div>
      </div>
      <div className={classes.block}>
        <span className={classes.titleBlock}>
          Dependents Services
        </span>
        <div className={classes.slide}>
          <HealthPassportCard />
        </div>
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
