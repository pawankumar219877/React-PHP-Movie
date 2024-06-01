import { useNavigate, useLocation  } from 'react-router-dom';
const MovieDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const movie = location.state.movie;
    const handleBackClick = () => {
        navigate(-1);
      };
    return (
    <div>
      {movie ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <h2>{movie.title}</h2>
          <img src={movie.image} alt={movie.title} />
          <p>{movie.description}</p>
          <p>Category: {movie.category}</p>
          <h3>Similar Movies:</h3>
          <ul>
           {movie.similarMovies.map(similarMovie => (
          <li key={similarMovie.id}>{similarMovie.title}</li>
           ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MovieDetails;
