import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipes: []
    };

    this.onDelete = this.onDelete.bind(this);
    this.onSelected = this.onSelected.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount() {
    fetch("/recipes/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            recipes: result
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
    const { error, isLoaded, recipes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Wrapper>
          Add{" "}
          <FontAwesomeIcon
            onClick={() => this.onAdd()}
            icon="plus-circle"
            color="green"
          />
          <ul>
            {recipes.map(recipe => (
              <li key={recipe.id}>
                ({recipe.id}) {recipe.name} - {recipe.description}{" "}
                <Link to={`/recipes/${recipe.id}`}>
                  <FontAwesomeIcon
                    onClick={() => this.onSelected(recipe.id)}
                    icon="eye"
                    color="blue"
                  />
                </Link>
                <FontAwesomeIcon
                  onClick={() => this.onDelete(recipe.id)}
                  icon="trash-alt"
                  color="red"
                />
                {/* <ul>
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient.name}>{recipe.name}</li>
                ))}
              </ul> */}
              </li>
            ))}
          </ul>
        </Wrapper>
      );
    }
  }

  onAdd() {
    let recipe = {
      name: "pizza",
      description: "Put in oven",
      ingredients: [{ name: "dough" }, { name: "cheese" }, { name: "tomato" }]
    };

    fetch("/recipes/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    })
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => ({
          recipes: [...prevState.recipes, res]
        }));
      });
  }

  onSelected(recipeId) {
    console.log(`Selected recipe: ${recipeId}!!!`);
  }

  onDelete(recipeId) {
    fetch(`/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {
      this.setState({
        recipes: this.state.recipes.filter(r => r.id !== recipeId)
      });
    });
  }
}

export default RecipesList;
