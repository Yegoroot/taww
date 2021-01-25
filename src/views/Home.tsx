import React from 'react'
import SwiperHome from 'src/components/Swiper/SwiperHome'
import Status from 'src/components/Status'
import { makeStyles } from '@material-ui/core'
import { user } from 'src/constants'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    height: '100%'
  }
}))
const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>

      <SwiperHome user={user} />
      <Status user={user} />
    </div>
  )
}

export default Home
