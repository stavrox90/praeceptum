import React from "react";
import {
  Card, CardHeader, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Media 
} from 'reactstrap';

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div>
      <Card>
      <CardHeader>{title}</CardHeader>
      <CardImg width="10%" src={img} alt="" />
      <CardBody>
        <CardText>
        <CardSubtitle>Calories : {calories}</CardSubtitle>

          <ol>
            {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
            ))}
          </ol>
        </CardText>
      </CardBody>
      </Card>
    </div>
  );
};

export default Recipe;
