import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const subscription = fetchMovies().subscribe({
            next: (movies) => {
                setMovies(movies);
            },
            error: (err) => {
                console.error('Error fetching movies:', err);
            }
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const [selectedCategory, setSelectedCategory] = useState('All');

    const generesChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredMovies = selectedCategory === 'All' ? movies : movies.filter(movie => movie.category === selectedCategory);

    return (
        <div>
            <h2>Movie List</h2>
            <div>
                Select Genres :-
                <select onChange={(e) => generesChange(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Adventure">Adventure</option>
                </select>
            </div>
            <ul>
            {filteredMovies.map(movie => (
                <Link to={`/movie/${movie.id}`} state={{ movie }}>
                    <li> {movie.title} </li>
                </Link>
            ))}
            </ul>
        </div>
    );
};

export default MovieList;
