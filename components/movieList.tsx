"use client"; // クライアントコンポーネントであることを宣言

import { useState } from 'react';
import Image from 'next/image';  // next/image を使う
import { Movie } from '../types/movie';  // types/movie.tsx で定義した Movie インターフェースをインポート

interface MovieListProps {
    movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
    const [hoveredMovieId, setHoveredMovieId] = useState<number | null>(null);

    return (
        <div className="movie-list">
            {movies.map((movie, idx) => (
                <div
                    key={movie.id}
                    className="movie-card"
                    data-grid-item="true"
                    role="listitem"
                    onMouseEnter={() => setHoveredMovieId(movie.id)}
                    onMouseLeave={() => setHoveredMovieId(null)}
                >
                    <div data-grid-item-idx={idx}>
                        <div data-grid-item-idx={idx} className="movie-container">
                            {hoveredMovieId === movie.id ? ( 
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    src={movie.video}
                                    width="236"
                                    height="300"
                                    className="movie-video"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={movie.image}
                                    alt={movie.title}
                                    width={236}
                                    height={300}
                                    className="movie-image"
                                />
                            )}
                            {/* <iframe src={movie.videoUrl}
                                allowFullScreen
                                width="236"
                                height="300"
                                className="movie-video"
                            >
                            </iframe> */}
                            <div className="movie-overlay">
                                <h2 className="movie-title">{movie.title}</h2>
                                <p className="movie-genre">{movie.genre}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
