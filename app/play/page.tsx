import FeaturedMovie from '@/components/organisms/FeaturedMovie';
import { Movie } from '@/types/movie';

export default async function Play() {
    const response = await fetch('http://localhost:3001/films', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
    const movies: Movie[] = await response.json();

    return (
        <>
            <FeaturedMovie movie={movies[0]} />
        </>
    );
}