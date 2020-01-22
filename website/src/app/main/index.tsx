import React, { FunctionComponent, useState } from 'react'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import AboutYenuka from './about-yenuka'

export class MainProps { }

const Main: FunctionComponent<MainProps> = () => {
  return <>
    <Container className="margin-top-7.5 padding-bottom-2.5">
      <Card raised className="radius-1">
        <CardContent color="main" className="text-center">
          <Typography variant="h3" component="h5" color="secondary" className="margin-bottom-1.2 margin-top-3">המכון התורני מבית מדרשו של הינוקא</Typography>
          <Typography variant="h5" className="padding-2 text-justify margin-bottom-1.2">
            <Box component="p">
              המכון הוקם בשנת תשס''ח, ע''י צוות רבנים מבית מדרשו של הגאון הצדיק הינוקא.
              המכון עורך ומתעד את דרשותיו וחיבוריו של הגאון הינוקא, הידוע בבקיאותו העצומה בכל הספרייה היהודית כולה.
            </Box>
            <Box component="p">
              ברשות המכון אוצר ענק של תכנים נדירים, בתורה הלכה והשקפה, חלק קטן מהם יצא לאור.
              במכון קיים מאגר של למעלה מ- 3000 שיעורים, שמקיפים כל נושא ביהדות ובמצוות, וממתינים לעת מצוא להוציאם לאור עולם.
            </Box>
            <Box component="p">בנוסף קיימים חיבורים רבים של תפלות שחיברם הינוקא, להמשיך על ידם ישועות בפועל במגוון נושאים וזמנים בשנה.</Box>
          </Typography>
        </CardContent>
      </Card>
    </Container>
    <AboutYenuka />
  </>
}

export default Main