export default function MovieDisplay({ movie }) {
  // Function to return loaded JSX
  const loaded = () => (
    <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Year}</h2>
    </>
  );

  // Function to return loading JSX
  const loading = () => <h1>No Movie to Display</h1>;

  // Ternary operator determines which JSX to return
  return movie ? loaded() : loading();
}