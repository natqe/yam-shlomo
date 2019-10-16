import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import makeStyles from '@material-ui/styles/makeStyles'
import React, { FunctionComponent } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
}))

export class GoTopProps { }

const GoTop: FunctionComponent<GoTopProps> = () => {
  return <>
    <Zoom>
      <Fab color="secondary" size="small" >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  </>
}

export default GoTop