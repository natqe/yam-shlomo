import React, { FunctionComponent } from 'react'
import makeStyles from '@material-ui/styles/makeStyles'

export class BackgroundProps { }

const Background: FunctionComponent<BackgroundProps> = () => {
  return <>
    <img
      src="/images/lines.svg"
      className="fixed top h-screen z-minus-1"
      style={{
        width: `150vw`,
        objectFit: `cover`,
        left: `-25vw`
      }} />
  </>
}

export default Background