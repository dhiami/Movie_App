import React from "react";
import { Card} from "react-bootstrap"
import { movies } from "./movies";
import Rate from "./Rate";
export default function MovieCard ({ movie }) {
    return(
        <div className="moviescards">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.Description}
    </Card.Text>
    <Rate rate={movie.rate}/>
  </Card.Body>
</Card>
        </div>
    );
}