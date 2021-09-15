import React from 'react'
import { gsap } from 'gsap'
import { makeStyles } from '@material-ui/core'

const { useEffect, useRef } = React

interface Props {
  children?: React.ReactChild,
  width: number,
  border?: number
}

const AnimateSquare = ({ children, width, border = 3 }: Props) => {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl = useRef()

  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      height: width,
      width,
      direction: 'rtl',
      margin: 10,
      display: 'flex',
      '& > .box0': {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 0,
        height: border,
        display: 'none',
        // @ts-ignore
        backgroundColor: theme.palette.background.dark
      },
      '& > .box1': {
        position: 'absolute',
        top: 0,
        right: `calc(${width / 2}px - ${border}px)`,
        width: 0,
        height: border,
        display: 'none',
        // @ts-ignore
        backgroundColor: theme.palette.background.dark
      },
      '& > .box2': {
        position: 'absolute',
        top: 0,
        right: `calc(${width}px - ${border}px)`,
        width: border,
        height: border,
        display: 'none',
        // @ts-ignore
        backgroundColor: theme.palette.background.dark
      },
      '& > .box3': {
        position: 'absolute',
        bottom: 0,
        right: `calc(${width}px - ${border}px)`,
        transform: 'rotate(180deg)',
        width: border,
        height: border,
        direction: 'rtl',
        display: 'none',
        // @ts-ignore
        backgroundColor: theme.palette.background.dark
      },
      '& > .box4': {
        position: 'absolute',
        bottom: 0,
        transform: 'rotate(180deg)',
        width: border,
        height: border,
        display: 'none',
        // @ts-ignore
        backgroundColor: theme.palette.background.dark
      }
    },
    child: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }
  }))

  const classes = useStyles()

  const SIDE_WIDTH = width

  useEffect(() => {
    // @ts-ignore
    tl.current = gsap.timeline({ repeat: -1 })
      .to(q('.box1'), {
        display: 'block',
        width: SIDE_WIDTH / 2
      })
      .to(q('.box2'), {
        display: 'block',
        height: SIDE_WIDTH,
      })
      .to(q('.box3'), {
        display: 'block',
        width: SIDE_WIDTH,
        x: -SIDE_WIDTH + border
      })
      .to(q('.box4'), {
        display: 'block',
        height: SIDE_WIDTH
      })
      .to(q('.box0'), {
        display: 'block',
        width: SIDE_WIDTH / 2
      })
  }, [])

  return (
    <div
      className={classes.root}
      // @ts-ignore
      ref={el}
    >
      <div className={classes.child}>{children}</div>
      <div className="box0" />
      <div className="box1" />
      <div className="box2" />
      <div className="box3" />
      <div className="box4" />
    </div>
  )
}

export default AnimateSquare
