import React, { FunctionComponent } from 'react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import ContactForm from './contact-form'

export class ContactProps {
  close: () => void
  open: boolean
}

const Contact: FunctionComponent<ContactProps> = ({ open, close }) => {
  const
    tel = `+972-52-202-5353`,
    mail = `name@rapidtables.com`
  return <>
    <Drawer anchor="right" open={open} className="relative">
      <IconButton className="absolute top left" onClick={close} color="primary">
        <Close fontSize="small" />
      </IconButton>
      <Box className="fs-1.7">
        <Box className="margin-horizontal-auto margin-top-3 w-content">
          <Box  color="secondary.main" className="margin-horizontal-1.5 margin-bottom-0.6">
            צור קשר
          </Box>
          <Box className="w-parent h-0.6 radius-0.3" bgcolor="secondary.main" />
        </Box>
        <Box className="flex margin-1.8 margin-top-2" color="primary.main">
          <Box className="margin-left-1.8 opacity-0.5 flex-column">
            <Box className="margin-bottom-0.5">טלפון</Box>
            <Box>מייל</Box>
          </Box>
          <Box className="flex-column content-end">
            <a className="fs-1.7 margin-bottom-0.5 pointer w-content" href={`tel:${tel}`}>
              <Box dir="ltr">{tel}</Box>
              <Box bgcolor="secondary.main" className="border-bottom w-parent padding-vertical-0.1 radius-0.1" />
            </a>
            <a className="pointer" href={`mailto:${mail}`}>
              <Box>
                {mail}
              </Box>
              <Box bgcolor="secondary.main" className="border-bottom w-parent padding-vertical-0.1  radius-0.1" />
            </a>
          </Box>
        </Box>
      </Box>
      <Divider variant="middle" className="margin-horizontal-1.2 margin-top-1.5" />
      <ContactForm onSubmit={close}/>
      <Box className="absolute bottom left margin-bottom-1 w-parent ">
        <Box bgcolor="primary.main" className="h-0.6 margin-horizontal-1.2" />
      </Box>
    </Drawer>
  </>
}

export default Contact