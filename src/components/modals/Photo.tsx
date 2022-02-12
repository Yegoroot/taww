import React from 'react'
import Dialog from '@material-ui/core/Dialog'
// import DialogContent from '@material-ui/core/DialogContent'

import DialogTitle from '@material-ui/core/DialogTitle'
import { Box, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'

interface Props {
  src: string,
  name: string,
  numberIqama: string
}

export const PhotoModal = ({ src, name, numberIqama }: Props) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box
        onClick={handleClickOpen}
        sx={{
          borderRadius: '50%',
          border: 'solid 4px #028474',
          width: '26%',
          margin: 'auto',
          overflow: 'hidden',
          // @ts-ignore
          backgroundSize: 'cover',
          '&::before': {
            content: '""',
            paddingTop: '100%',
            float: 'right'
          }
        }}
        style={{ backgroundImage: `URL(${src})` }}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
      >

        <DialogTitle id="alert-dialog-title">
          <Box
            sx={{ textAlign: 'right' }}
            onClick={handleClose}
          >
            <Close />
          </Box>
        </DialogTitle>
        {/* <DialogContent> */}
        <Box sx={{ padding: '30px', maxWidth: '444px', minWidth: '300px' }}>
          <Box
            onClick={handleClickOpen}
            sx={{
              maxWidth: '100%',
              marginBottom: 32,
              borderRadius: '50%',
              margin: 'auto',
              overflow: 'hidden',
              // @ts-ignore
              backgroundSize: 'cover',
              '&::before': {
                content: '""',
                paddingTop: '100%',
                float: 'right'
              }
            }}
            style={{ backgroundImage: `URL(${src})` }}
          />
          <Box sx={{ textAlign: 'center', marginBottom: 30, fontWeight: 'bold' }}>
            <Typography
              variant="h2"
              color="primary"
              style={{ marginBottom: 16 }}
            >
              {name}
            </Typography>
            <Typography
              color="primary"
              variant="h2"
            >
              {numberIqama}
            </Typography>
          </Box>
        </Box>
        {/* </DialogContent> */}
      </Dialog>
    </>
  )
}
