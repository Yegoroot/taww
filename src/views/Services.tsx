import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

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
import { Card } from '../components/Services/Card'
import { WarningCard } from '../components/Services/WarningCard'
import { Family2Card } from '../components/Services/Family2Card'
import { MadrasaCard } from '../components/Services/MadrasaCard'

import { slideStyle } from '../components/Swiper/SwiperServices'

import vaccineSrc from '../assets/images/IconsImg/vaccine.png'

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
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <div className={classes.block}>
        <span className={classes.titleBlock}>
          {t('sPage.publicS')}
        </span>
        <div className={classes.slide}>
          <Family2Card />
        </div>
      </div>

      <div className={classes.block}>
        <span className={classes.titleBlock}>
          {t('sPage.permitS')}
        </span>
        <div className={classes.slide}>
          <PlusCard />
        </div>
        <div className={classes.slide}>
          <TimeCard />
        </div>
        <div className={classes.slide}>
          <PeopleCard />
        </div>
      </div>

      <div className={classes.block}>
        <span className={classes.titleBlock}>
          {t('sPage.healthS')}
        </span>
        <div className={classes.slide}>
          <WarningCard />
        </div>
        <div className={classes.slide}>
          <MicroscopeCard />
        </div>
        <div className={classes.slide}>
          <QuestionCard />
        </div>
        <div className={classes.slide}>
          <HealthPassportCard />
        </div>
        <div className={classes.slide}>
          <Card
            src={vaccineSrc}
            text={t('card.vaccine')}
          />
        </div>
      </div>

      <div className={classes.block}>
        <span className={classes.titleBlock}>
          {t('sPage.educationS')}
        </span>
        <div className={classes.slide}>
          <CertificateCard />
        </div>
        <div className={classes.slide}>
          <MadrasaCard />
        </div>
      </div>

      <div className={classes.block}>
        <span className={classes.titleBlock}>
          {t('sPage.dependentsS')}
        </span>
        <div className={classes.slide}>
          <HealthConditionCard />
        </div>
        <div className={classes.slide}>
          <People3Card />
        </div>
        <div className={classes.slide}>
          <FamilyCard />
        </div>
      </div>

      <div className={classes.block}>
        <span className={classes.titleBlock}>
          {t('sPage.hajjS')}
        </span>
        <div className={classes.slide}>
          <PermitsCard />
        </div>
        <div className={classes.slide}>
          <IssuePermitsCard />
        </div>
        <div className={classes.slide}>
          <People2Card />
        </div>
      </div>

    </div>
  )
}

export default Services
