import React from 'react'
import { useStyles } from './stylePngIcon'

interface Props {
  src: any;
  text: string
}

export const Card = ({ src, text }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapSlide}>
      <img
        src={src}
        alt="-"
        className={classes.img}
      />
      <span className={classes.slideTitle}>
        {text}
      </span>
    </div>
  )
}
