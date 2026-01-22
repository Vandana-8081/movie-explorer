
import MovieCard from "./MovieCard";
function MovieList({ movies }) {
    console.log(movies);
    
  if (movies.length === 0) {
    return <p>No Movie Found</p>;
  }
  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID}  movie={movie}/>
        ))}
      </div>
    </>
  );
}
export default MovieList;
