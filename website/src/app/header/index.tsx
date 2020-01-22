import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { isMobile } from '../../constants'
import Bar from './bar'
import Nav from './nav'

export class HeaderProps { }

const Header: FunctionComponent<HeaderProps> = () => {
  const
    images = [
      `/images/shiur.jpg`,
      `/images/shiur-2.jpg`,
    ],
    [image, setImage] = useState(0)
  useEffect(
    () => {
      const id = setTimeout(() => {
        const currentImage = image + 1
        setImage(images[currentImage] ? currentImage : 0)
      }, 10000)
      return () => clearTimeout(id)
    }
  )
  return <>
    <Bar />
    <Nav />
    <Box className="relative w-parent h-screen" color="common.white">
      <Box className="absolute-middle text-center" style={{ textShadow: `0 0 15px rgba(0,0,0,.5), 0 0 10px rgba(0,0,0,.5)`, minWidth: isMobile ? `80%` : `` }}>
        <Typography variant="h2" component="h2" className={`margin-top-0.5 ${isMobile ? `` : `space-nowrap`}`} >המכון התורני מבית מדרשו של הינוקא</Typography>
        <Box bgcolor="common.white" className="margin-horizontal-5 margin-vertical-1.5 padding-vertical-0.1" />
        <Typography variant="h3" component="h3" className="margin-top-2" >במכון קיים מאגר של למעלה מ- 3000 שיעורים, שמקיפים כל נושא ביהדות ובמצוות, וממתינים לעת מצוא להוציאם לאור עולם</Typography>
      </Box>
      <img src={images[image]} className="object-cover-center  w-parent h-parent" />
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