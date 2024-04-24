import { Dialog, DialogContent, DialogTitle, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: 260,
    paddingRight: 30,
  },
  closeButton: {
    position: 'absolute',
    right:"1px",
    top:"1px",
  },
  stageContents: {
    "& .MuiDialog-paper": {
      overflowY: "unset",
      minWidth: 350,
    },

  }
}))

const DialogBox = (props) => {
    const classes = useStyle();


    return (
        <Dialog minWidth='sm' {...props.dialogProps} className={classes.stageContents}>
        <DialogTitle disableTypography>
          <Typography variant='h6' className={classes.root} >{props.content.title}</Typography>
          <Tooltip title='Close'>
            <IconButton
              sx={{position:'absolute', top:'5px', right:"10px"}}
              onClick={props.dialogProps.onClose}
            >
              ❌
            </IconButton>
          </Tooltip>
        </DialogTitle>
        <DialogContent className={classes.stageContents}> {props.content.component}</DialogContent>
      </Dialog>
    );
}

export default DialogBox

