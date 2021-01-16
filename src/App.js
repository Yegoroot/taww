import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

const useStyles = makeStyles({

  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
})

export default function IconLabelTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >

          <Tab
            icon={<HomeOutlinedIcon />}
            label="Home"
          />
          <Tab
            icon={<FavoriteIcon />}
            label="Services"
          />
          <Tab
            icon={<PersonPinIcon />}
            label="Digital"
          />
          <Tab
            icon={<PersonPinIcon />}
            label="NEARBY"
          />
          <Tab
            icon={<PersonOutlineOutlinedIcon />}
            label="My Profile"
          />
        </Tabs>
      </Paper>
    </div>
  )
}
