import React, { Component } from "react";

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ingredients: []
    };
  }

  componentDidMount() {
    fetch("/ingredients/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            ingredients: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, ingredients } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {ingredients.map(ingredient => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
      );
    }
  }
}

export default IngredientList;
