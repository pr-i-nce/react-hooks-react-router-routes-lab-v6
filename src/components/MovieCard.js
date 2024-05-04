import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ title, id, movies }) {
  
  if (!Array.isArray(movies)) {
    return (
      <article>
        <h2>{title}</h2>
        <p>{movies}</p>
        <Link to={`/movie/${id}`}>View Info</Link>

      </article>
    );
  }

  return (
    <article>
      <h2>{title}</h2>
      <ul>
        {movies.map((movie, index) => (
          <h3 key={index}>
            <Link to={`/movie/${id}/${index}`}><li key={index}>{movie} </li></Link>
          </h3>
        ))}
      </ul>
    </article>
  );
}

export default MovieCard;
