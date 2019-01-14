import React from "react";
import { render } from "react-testing-library";
import RecipesList from "./recipes-list";

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

  it("should render", () => {
    mockFetchOnce(fakeRecipes);

    const { container, getByText } = render(<RecipesList />);
    //console.log(container.firstChild);
    expect(getByText("Loading...")).toBeInTheDocument();

    //expect(getByText("Seen")).toBeInTheDocument();
    //expect(getByText("Great")).toBeInTheDocument();
    //expect(container.firstChild).toHaveStyle("border-top-left-radius: 0");
    //expect(container.firstChild).toHaveStyle("margin-top: 24px");
  });
});

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
