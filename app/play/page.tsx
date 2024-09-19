interface Movie {
    id: number;
    title: string;
    url: string;
    rating: number;
}

export default async function Movie() {
    const response = await fetch('http://localhost:3001/movies');
    const movies: Movie[] = await response.json();
    console.log(movies);

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.url}</p>
                        <p>{movie.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}