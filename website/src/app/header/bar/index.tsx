import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar'
import makeStyles from '@material-ui/styles/makeStyles'
import useTheme from '@material-ui/core/styles/useTheme'
import { fade } from '@material-ui/core/styles/colorManipulator'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

export class BarProps {
  backgroundColor?: string
  logoHidden?: boolean
  className?: string
  shadow?: boolean
}

const Bar: FunctionComponent<BarProps> = ({ children, backgroundColor, logoHidden, className = ``, shadow = false }) => {
  const
    theme = useTheme(),
    { appBar } = makeStyles({ appBar: { backgroundColor: backgroundColor || fade(theme.palette.primary.main, .7) } })({}),
    trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      // target: window ? window() : undefined,
    })
  return <>
    <AppBar position="fixed" className={`${appBar} ${className}`}
      elevation={trigger && shadow ? 4 : 0}
    >
      <Toolbar className="items-end">
        <Box className={`flex-column margin-1 ${logoHidden ? `visibility-hidden` : ``}`}>
          <img src="/images/icon/logo.svg" />
          <Box color="secondary.light" clone>
            <Typography variant="h4" component="h1" className="margin-top-0.5">ים שלמה</Typography>
          </Box>
        </Box>
        {children}
      </Toolbar>
    </AppBar>
  </>
}

export default Bar