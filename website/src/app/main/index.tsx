import React, { FunctionComponent } from 'react'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export class MainProps { }

const Main: FunctionComponent<MainProps> = () => {
  return <>
    <Container className="margin-bottom-10 margin-top-7.5 padding-bottom-2.5">
      <Card raised className="radius-1">
        <CardContent color="main" className="text-center">
          <Typography variant="h3" component="h5" color="secondary" className="margin-bottom-1.2 margin-top-3"> אודות שיעורי הינוקא </Typography>
          <Typography variant="h5" className="padding-2 text-justify margin-bottom-1.2">
            הגאון הפלאי הצדיק הרב שלמה יהודה שליט"א המכונה "הינוקא", אברך בשנות ה-30 לחייו שמקום מושבו בעיר ראשון לציון, הידוע כבקיא בתורה כולה בעל פה, הרב החל למסור שיעורים מעמיקים ומופלאים כבר מילדתו. לאחרונה, החל כבוד הרב לצאת מגבולות בית מדרשו ולמסור שיעורים ברחבי הארץ. אתמול (שני) הגיע הינוקא לירושלים לשכונת בית ישראל, לבית המדרש של חסידות פינסק-קרלין, שם מסר שיעור בהשתתפות אלפים שגדשו את כל בית המדרש. באולמות סמוכים הוצבו מסכים וכל השכונה הייתה על גלגלים. קודם לשיעור נכנס לביקור אצל הרבי. הגאון הרב שלמה יהודה, מדהים את כל הנוכחים וביניהם תלמידי חכמים עצומים בשיעוריו אותם הוא מתחיל בסיפורי צדיקים ואז שואל את הקהל על איזה נושא רוצים שיהיה השיעור - וכך, מבלי להכין את השיעור קודם, הרב מצטט בעל פה מאות מקורות מכל התורה כולה, תנ"ך ש"ס פוסקים מדרשים זוהר ומכל ספרי גדולי וצדיקי כל הדורות
          </Typography>
        </CardContent>
      </Card>
    </Container>
  </>
}

export default Main