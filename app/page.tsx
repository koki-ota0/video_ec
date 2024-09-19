import MovieList from '../components/movieList';  // 作成したコンポーネントをインポート
import { Movie } from '../types/movie';  // types/movie.tsx で定義した Movie インターフェースをインポート


export default async function Home() {
  const response = await fetch('http://localhost:3001/films', {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });
  let movies: Movie[]
  const data = await response.json();
  movies = data;
  console.log(movies);

  // const clear_cart = () => {
  //   fetch('http://localhost:3001/cart/clear', {
  //     method: 'DELETE',
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  return (
    <div className="movies container" id="movies">
      <div className="heading">
        <h1 className="heading-title">Movies</h1>
      </div>
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
  );
}