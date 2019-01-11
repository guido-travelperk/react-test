import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header/header";
import RecipesList from "./components/recipes-list/recipes-list";
import IngredientList from "./components/ingredients-list/ingredients-list";
import RecipeDetail from "./components/recipe-detail/recipe-detail";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faEye,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt, faEye, faPlusCircle);

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />

          <Route exact path="/" component={RecipesList} />
          <Route exact path="/recipes/:recipeId" component={RecipeDetail} />
          <Route exact path="/ingredients" component={IngredientList} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
