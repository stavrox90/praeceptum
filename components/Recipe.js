import React from "react";
import { Button } from "react-bootstrap";

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Button variant="primary">teststetset</Button>
      <p>{calories}</p>
      <img src={img} alt="" />
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
