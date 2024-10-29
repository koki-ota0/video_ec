// components/MovieOverlay.tsx
interface MovieOverlayProps {
    title: string;
    genre: string;
  }
  
  export default function MovieOverlay({ title, genre }: MovieOverlayProps) {
    return (
      <div className="movie-overlay">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-genre">{genre}</p>
      </div>
    );
  }
  