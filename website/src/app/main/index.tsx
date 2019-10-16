import React, { FunctionComponent } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Cards from './cards'

export class MainProps { }

const Main: FunctionComponent<MainProps> = () => {
  return <>
    <Container>
      <Box my={2}>
        <Cards/>
      </Box>
    </Container>
  </>
}

export default Main