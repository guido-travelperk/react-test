import React, { Component } from "react";
import { debug } from "util";

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipe: {}
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onIngredientsChange = this.onIngredientsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch(`/recipes/${this.props.match.params.recipeId}`);
      const recipe = await res.json();
      this.setState({
        isLoaded: true,
        recipe: recipe
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  renderAfterFetch(recipe) {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div>Recipe with ID: {recipe.id}</div>
          <label>
            Name:
            <input
              type="text"
              value={this.state.recipe.name}
              onChange={this.onNameChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              value={this.state.recipe.description}
              onChange={this.onDescriptionChange}
            />
          </label>
          <br />
          <label>
            Ingredients:
            <input
              type="text"
              value={this.state.recipe.ingredients
                .map(ing => ing.name)
                .join(" ")}
              onChange={this.onIngredientsChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }

  onNameChange(event) {
    let recipe = { ...this.state.recipe };
    recipe.name = event.target.value;
    this.setState({ recipe });
  }

  onDescriptionChange(event) {
    let recipe = { ...this.state.recipe };
    recipe.description = event.target.value;
    this.setState({ recipe });
  }

  onIngredientsChange(event) {
    let recipe = { ...this.state.recipe };
    recipe.ingredients = event.target.value
      .split(" ")
      //.filter(name => name.trim() !== "")
      .map(name => ({ name }));
    console.log(recipe.ingredients);

    this.setState({ recipe });
  }

  handleSubmit(event) {
    console.log(this.state.recipe);
    event.preventDefault();
  }

  render() {
    const { error, isLoaded, recipe } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return this.renderAfterFetch(recipe);
    }
  }
}

export default RecipeDetail;
