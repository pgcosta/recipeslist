import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Chip from "@material-ui/core/Chip"

const useStyles = makeStyles(theme => ({
  media: {
    height: 200,
    width: 350
  },
  card: {
    maxWidth: 350,
  }
}));

// Displays a recipe card
const RecipeCard = (props) => {
  const classes = useStyles();

  const renderTags = (tags) => {
    if(tags == null || tags.length == 0) {
      return "";
    }
    return (
      tags.map(value => (
        <Chip label={value.name} />
      ))
    );
  }

  return (
    <Card key={props.recipe["id"]} className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        src={props.recipe["photo"]}
        title="Recipe picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.recipe["title"]}
        </Typography>
          {renderTags(props.recipe["tags"])}
        <Typography variant="body2" color="textSecondary" component="p">
          {props.recipe["description"]}
        </Typography>
      </CardContent>
    
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to={{
          pathname: "/" + props.recipe["id"],
          state: props.recipe
          }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;