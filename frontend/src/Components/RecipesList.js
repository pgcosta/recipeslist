import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import RecipeCard from './RecipeCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  containerRow: {
    padding: 40
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%"
  }
}));

// Request backend for a list of recipes. Displays list of RecipeCard
const RecipesList = () => {
  const [state, setState] = useState({
    recipes: [
      { title: 'Recipe 1', description: 'description', photo: 'https://via.placeholder.com/350x200.png' },
      { title: 'Recipe 2', description: 'description', photo: 'https://via.placeholder.com/350x200.png' },
      { title: 'Recipe 3', description: 'description', photo: 'https://via.placeholder.com/350x200.png' }
    ]
  });
  const [isLoading, setIsLoading] = useState(true)
  const classes = useStyles();

  async function fetchData() {
    const res = await fetch("http://localhost:8080/recipes");
    res
      .json()
      .then(res => setState({ recipes: res }))
      .then(res => setIsLoading(false))
      .catch(err => alert("Problem Comunicating with the backend!"));
  }

  useEffect(() => {
    fetchData();
  },[]);

  const recipesList = () => {
    return (
      <div className={classes.root}>
        <Grid container className={classes.containerRow} spacing={5}>
              {state.recipes.map(value => (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                  <RecipeCard recipe={value}/>
                </Grid>
              ))}
        </Grid>
      </div>
    );
  };

  return (
    <div>
      {isLoading ? <CircularProgress className={classes.spinner} /> : recipesList()}
    </div>
  );
}

export default RecipesList;