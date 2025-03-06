import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
// import.meta.env.VITE_API_KEY;

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error("Error fetching movie data:", e);
    }
  };

  // Array of random movies for the bonus exercise
  const randomMovies = [
    "Inception",
    "Titanic",
    "The Matrix",
    "Avatar",
    "Interstellar",
  ];

  // Fetch a random movie on initial load
  useEffect(() => {
    const randomMovie =
      randomMovies[Math.floor(Math.random() * randomMovies.length)];
    getMovie(randomMovie);
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
