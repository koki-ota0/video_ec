// app/page.tsx は、ページのコンポーネントを定義するファイルです。
import MovieList from '@/components/organisms/MovieList';
import FeaturedMovie from '@/components/organisms/FeaturedMovie';
import { Movie } from '@/types/movie';  

export default async function Home() {
  const response = await fetch('http://localhost:3001/films', {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });
  const movies: Movie[] = await response.json();
  const featuredMovie = movies[0]; // 先頭の映画を注目の映画として表示

  return (
    <>
      <FeaturedMovie movie={featuredMovie} />
      <div className="movies" id="movies">
        <MovieList movies={movies} />
        <div className="heading" id="trending">
          <h2 className="heading-title">Trending</h2>
        </div>
        <MovieList movies={movies} />
        <div className="heading" id="explore">
          <h2 className="heading-title">Explore</h2>
        </div>
        <MovieList movies={movies} />
      </div>
    </>
  );
}