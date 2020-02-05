import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import TopBar from './Components/TopBar';
import RecipesList from './Components/RecipesList';
import Recipe from './Components/Recipe';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar/>
          <Switch>
          <Route path="/:recipe_id" children={(props) => <Recipe {...props} />} />
          <Route path="/">
            <RecipesList />
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
