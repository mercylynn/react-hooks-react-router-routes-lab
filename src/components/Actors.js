import React from "react";
import { actors } from "../data";
import Movies from "./Movies";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <>
          <h2 key={index}>Name: {actor.name}</h2>

          {actor.movies.map((movie, index) => (
            <ul key={index}>
              <li>Movies: {movie}</li>
            </ul>
          ))}
        </>
      ))}
    </div>
  );
}




export default Actors;
