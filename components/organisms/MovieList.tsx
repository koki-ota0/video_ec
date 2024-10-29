// components/MovieList.tsx
import { Movie } from '@/types/movie';
import MovieCard from '@/components/molecules/MovieCard';
import "../components.css";

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
