import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  CardWrapper,
  CardHeader,
  CardBody,
  CardText,
  Button,
  FlexContainer
} from "../../Styles";

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipes: []
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch("/recipes/");
      const recipes = await res.json();
      this.setState({
        isLoaded: true,
        recipes: recipes
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  render() {
    const { error, isLoaded, recipes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div>Total Recipes: {recipes.length}</div>
          <Button primary onClick={() => this.onAdd()}>
            <FontAwesomeIcon className="fa-fw" icon="plus-circle" />
            Add
          </Button>
          <FlexContainer>
            {recipes.map((recipe, idx) => (
              <CardWrapper key={recipe.id} id={"card-wrapper-" + idx}>
                <CardHeader>
                  {recipe.name} - {recipe.id}
                </CardHeader>
                <CardBody>
                  <CardText>Desc: {recipe.description}</CardText>
                  <CardText>
                    Ingredients: {recipe.ingredients.map(ing => `${ing.name} `)}
                  </CardText>

                  <Link to={`/recipes/${recipe.id}`}>
                    <Button>
                      <FontAwesomeIcon className="fa-fw" icon="eye" />
                      View
                    </Button>
                  </Link>

                  <Button
                    primary
                    floatRight
                    onClick={() => this.onDelete(recipe.id)}
                  >
                    <FontAwesomeIcon className="fa-fw" icon="trash-alt" />
                    Delete
                  </Button>
                </CardBody>
              </CardWrapper>
            ))}
          </FlexContainer>
        </React.Fragment>
      );
    }
  }

  onAdd() {
    let recipe = {
      name: "Pizza",
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
