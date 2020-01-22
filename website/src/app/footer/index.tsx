import React, { FunctionComponent } from 'react'
import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab'
import Call from '@material-ui/icons/Call'

export class FooterProps { }

const Footer: FunctionComponent<FooterProps> = () => {
  const tel = `+972-02-5306-506`
  return <>
    <Box className="fixed bottom left right w-parent margin-bottom-1.5" >
      <Box className="padding-vertical-1.2" bgcolor="primary.main"></Box>
      <Box className="flex items-center absolute top left margin-left-4.5 fs-1.2 margin-top-minus-0.4" color="common.white">
        <Box className="margin-horizontal-0.8">עדכוני שיעורים</Box>
        <Fab variant="extended" href={`tel:${tel}`} className="fs-1.7  h-content radius-10 padding-top-0.2 padding-horizontal-1.5" color="secondary" dir="ltr">{tel}</Fab>
        <Call  className="margin-horizontal-0.8"/>
      </Box>
    </Box>
  </>
}

export default Footer