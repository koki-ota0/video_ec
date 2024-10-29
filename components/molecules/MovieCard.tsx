"use client"

// components/MovieCard.tsx
import { useState } from 'react';
import Image from 'next/image';
import { Movie } from '@/types/movie';
import MovieOverlay from '@/components/atoms/MovieOverlay';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="movie-container">
        {isHovered ? (
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
        <MovieOverlay title={movie.title} genre={movie.genre} />
      </div>
    </div>
  );
}
