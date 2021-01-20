import React from 'react'
import SliderMain from 'src/components/SliderMain'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    height: '100%'
  }
}))
const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>

      <SliderMain />
    </div>
  )
}

export default Home
