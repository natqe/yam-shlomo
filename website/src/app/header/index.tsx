import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import React, { FunctionComponent } from 'react'
import Bar from './bar'
import Nav from './nav'
import Divider from '@material-ui/core/Divider'

export class HeaderProps { }

const Header: FunctionComponent<HeaderProps> = () => {
  return <>
    <Bar />
    <Nav />
    <Box className="relative w-parent h-screen" color="common.white">
      <Box className="absolute-middle text-center" style={{ textShadow: `0 0 15px rgba(0,0,0,.5), 0 0 10px rgba(0,0,0,.5)` }}>
        <Typography variant="h2" component="h2" className="margin-top-0.5  space-nowrap" >המכון התורני מבית מדרשו של הינוקא</Typography>
        <Box bgcolor="common.white" className="margin-horizontal-5 margin-vertical-1.5 padding-vertical-0.1" />
        <Typography variant="h3" component="h3" className="margin-top-2" >לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש שמחויט - שלושע</Typography>
      </Box>
      <img src="https://f7k6f9k9.ssl.hwcdn.net//media/764547/f0863617-07ac-4c82-93a5-b9a43473eac5.jpg?anchor=center&mode=crop&width=480&rnd=132137584070000000&bgcolor=33ddff" className="object-cover-center  w-parent h-parent" />
    </Box>
  </>
}

export default Header












/* {
      [1, 2, 3].map(n => <Slide key={n} direction="left" in={selectedSlide === n && show} mountOnEnter unmountOnExit timeout={1000}
        onEntered={() => {
          setTimeout(() => setSelectedSlide(selectedSlide < 3 ? selectedSlide + 1 : 1), 3000)
        }}
        onExit={() => setShow(false)}
        onExited={() => setShow(true)}
      >
        <Card>
          <CardMedia
            style={{ height: `500px` }}
            image={`/images/cards/${n}.jpg`}
          />
        </Card>
      </Slide>)
    } */