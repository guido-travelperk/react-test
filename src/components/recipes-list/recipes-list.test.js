import React from "react";
import { render, wait } from "react-testing-library";
import RecipesList from "./recipes-list";
import { BrowserRouter as Router } from "react-router-dom";

/*global mockFetchOnce*/
/*eslint no-undef: "error"*/

describe("<RecipesList />", () => {
  const fakeRecipes = [
    {
      id: 42,
      name: "Pizza",
      description: "Put in oven",
      ingredients: [{ name: "dough" }, { name: "cheese" }, { name: "tomato" }]
    },
    {
      id: 55,
      name: "Pizza",
      description: "Put in oven",
      ingredients: [{ name: "dough" }, { name: "cheese" }, { name: "tomato" }]
    },
    {
      id: 56,
      name: "Pizza",
      description: "Put in oven",
      ingredients: [{ name: "dough" }, { name: "cheese" }, { name: "tomato" }]
    }
  ];
  const recipesLength = fakeRecipes.length;

  it("should render", async () => {
    mockFetchOnce(fakeRecipes);

    const { getByText } = render(
      <Router>
        <RecipesList />
      </Router>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
    await wait(() => expect(getByText("Add")).toBeInTheDocument());

    expect(getByText("Total Recipes: " + recipesLength)).toBeInTheDocument();
    expect(document.querySelectorAll("[id^=card-wrapper-]").length).toBe(
      recipesLength
    );
  });
});
