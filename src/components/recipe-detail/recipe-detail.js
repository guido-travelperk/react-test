import React, { Component } from "react";

class RecipeDetail extends Component {
  render() {
    return (
      <React.Fragment>
        Recipe with ID: {this.props.match.params.recipeId}
        {/* To show the details we need to do a GET to the backend using the ID */}
      </React.Fragment>
    );
  }
}

export default RecipeDetail;
