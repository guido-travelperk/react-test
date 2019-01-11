import React, { Component } from "react";

class RecipeDetail extends Component {
  render() {
    return <div>Recipe with ID: {this.props.match.params.recipeId}</div>;
  }
}

export default RecipeDetail;
