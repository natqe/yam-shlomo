import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar'
import makeStyles from '@material-ui/styles/makeStyles'
import useTheme from '@material-ui/core/styles/useTheme'
import { fade } from '@material-ui/core/styles/colorManipulator'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Toolbar from '@material-ui/core/Toolbar'

export class BarProps { }

const Bar: FunctionComponent<BarProps> = ({ children }) => {
  const
    theme = useTheme(),
    { appBar } = makeStyles({ appBar: { backgroundColor: fade(theme.palette.primary.main, .7) } })({}),
    trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      // target: window ? window() : undefined,
    })
  return <>
    <AppBar position="fixed" className={appBar} elevation={trigger ? 4 : 0}>
      <Toolbar className="items-end">
        {children}
      </Toolbar>
    </AppBar>
  </>
}

export default Bar