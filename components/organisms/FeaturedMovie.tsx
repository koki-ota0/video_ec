"use client"; // クライアントコンポーネントであることを宣言

import "../components.css";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { Movie } from '@/types/movie';
import { FaPlay } from "react-icons/fa"; // Play アイコンをインポート

interface FeaturedMovieProps {
    movie: Movie;
}

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [bgStyle, setBgStyle] = useState({});
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const { width, left } = containerRef.current.getBoundingClientRect();
            setBgStyle({
                width: `${width}px`,
                left: `${left}px`
            });
        }
    })

    return (
        <div className="featured-container" ref={containerRef}>
            {/* 背景用のコンテナ */}
            <div className="featured-background" style={bgStyle}>
                {isHovered ? (
                    <video
                        autoPlay
                        muted
                        loop
                        src={movie.video}
                        className="featured-video"
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Image
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className="featured-image"
                    />
                )}
                {!isHovered && (
                    <div className="overlay-content">
                        <h1 className="movie-title">{movie.title}</h1>
                        <button className="play-button">
                            <FaPlay size={20} color="#fff" />
                        </button>
                    </div>
                )}
            </div>

            {/* 前面のオーバーレイ */}
            <div
                className="featured-overlay"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
            </div>
        </div>
    );
}
