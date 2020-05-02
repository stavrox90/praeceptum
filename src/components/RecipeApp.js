import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { Container, Row, Col,  Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const RecipeApp = () => {
  const APP_ID = "21548c04";
  const APP_KEY = "78f56031acc0fd6997ce80b910033a47";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes(); // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <Container>
        <h1>Praeceptum!</h1>
      
      <Form onSubmit={getSearch} >
        <FormGroup >
        <Input type="text" value={search} onChange={updateSearch} />
        <Button type="submit">Search</Button>
        </FormGroup>
      </Form>
      {/* <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search</button>
      </form> */}
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </Container>
    </div>
  );
};

export default RecipeApp;
