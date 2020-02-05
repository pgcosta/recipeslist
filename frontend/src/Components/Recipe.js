import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1
  },
  title: {
    textAlign: "center",
    margin: 20
  },
  media: {
    height: 200,
    width: 350
  },
  card: {
    maxWidth: 500
  }
});

// Displays a recipe page
const Recipe = (props) => {
  const classes = useStyles();
  const recipe = props.location.state;

  const chefSection = (chef) => {
    if (chef == "") {
      return "Unknown"
    }
    return chef
  }

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h2" component="h2" className={classes.title}>
        {recipe["title"]}
      </Typography>
      <Typography variant="h4" component="h" gutterBottom className={classes.title}>
        Chef: {chefSection(recipe["chef"])}
      </Typography>
      
      <Grid item align="center" xs={12} spacing={2}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            className={classes.media}
            src={recipe["photo"]}
            title="Recipe picture"
          />
          <CardContent>
            <Typography variant="body1" color="initial" component="p">
              {recipe["description"]}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Recipe;