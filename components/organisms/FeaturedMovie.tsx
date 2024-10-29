"use client"; // クライアントコンポーネントであることを宣言

import "../components.css";
import { useState } from 'react';
import Image from 'next/image';
import { Movie } from '@/types/movie';

interface FeaturedMovieProps {
    movie: Movie;
}

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* 背景用のコンテナ */}
            <div className="featured-background">
                {isHovered ? (
                    <video
                        autoPlay
                        muted
                        loop
                        src={movie.video}
                        className="featured-movie-video"
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Image
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className="featured-movie-image"
                    />
                )}
            </div>

            {/* 前面のオーバーレイ */}
            <div
                className="featured-overlay"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
            </div>
        </>
    );
}
