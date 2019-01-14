import React from "react";
import { render, waitForElement, wait } from "react-testing-library";
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
    }
    // {
    //   id: 55,
    //   name: "Pizza",
    //   description: "Put in oven",
    //   ingredients: [{ name: "dough" }, { name: "cheese" }, { name: "tomato" }]
    // },
    // {
    //   id: 56,
    //   name: "Pizza",
    //   description: "Put in oven",
    //   ingredients: [{ name: "dough" }, { name: "cheese" }, { name: "tomato" }]
    // }
  ];

  it("should render", async () => {
    mockFetchOnce(fakeRecipes);

    const { container, getByText, debug } = render(
      <Router>
        <RecipesList />
      </Router>
    );

    //console.log(container.firstChild);
    expect(getByText("Loading...")).toBeInTheDocument();
    //debug();
    await wait(() => expect(getByText("Add")).toBeInTheDocument());
    // debug();
    expect(getByText("Total Recipes: 1")).toBeInTheDocument();
    //expect(getByText("Seen")).toBeInTheDocument();
    //expect(getByText("Great")).toBeInTheDocument();
    //expect(container.firstChild).toHaveStyle("border-top-left-radius: 0");
    //expect(container.firstChild).toHaveStyle("margin-top: 24px");
  });
});

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
