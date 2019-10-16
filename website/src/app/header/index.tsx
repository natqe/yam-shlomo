import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import React, { FunctionComponent } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Bar from './bar'

export class HeaderProps { }

const Header: FunctionComponent<HeaderProps> = () => {
  return <>
    <Bar>
      <div className="flex-column margin-1">
        <img src="/images/icon/logo.svg" />
        <Box color="secondary.light">
          <Typography variant="h4" component="h1">ים שלמה</Typography>
        </Box>
      </div>
      <Tabs value={0} className="margin-horizontal-2">
        <Box color="secondary.light">
          <Tab
            className="fs-1.8"
            component="a"
            label="אודות"
          />
        </Box>
        <Tab
          className="fs-1.8"
          component="a"
          label="יצירת קשר"
        />
      </Tabs>
    </Bar>
    <img src="/images/cards/1.jpg" style={{ width: `100vw`, height: `100vh` }} />
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