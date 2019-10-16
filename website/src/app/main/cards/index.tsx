import React, { FunctionComponent } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'

export class CardsProps { }

const Cards: FunctionComponent<CardsProps> = () => {
  return <>
        {/* <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid> */}
    {/* <Card>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        image="/images/cards/1.jpg"
        title="Contemplative Reptile"
        className="margin-2"
      />
      <CardContent>
        <Typography>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
      </CardContent>
    </Card>
    <Card>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        image="/images/cards/1.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
      </CardContent>
    </Card>
    <Card>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        image="/images/cards/1.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
      </CardContent>
    </Card> */}
  </>
}

export default Cards