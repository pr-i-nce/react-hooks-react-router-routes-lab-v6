import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"; 

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(response => response.json())
      .then(data => setActors(data))
      .catch(error => console.error(error));
  }, []);

  const actorList = actors.map(actor => (
   
    <MovieCard key={actor.id} title={actor.name} movies={actor.movies} id={actor.id}/>
    
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
}

export default Actors;
