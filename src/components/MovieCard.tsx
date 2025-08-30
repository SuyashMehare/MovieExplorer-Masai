import type { Movie } from "../types";

export default function MovieCard({movie}: {movie: Partial<Movie>}) {
    return <div key={movie.id}
        className="border max-w-100 px-4 py-3 rounded-md"
    >
        <h1 className="text-xl font-extrabold">{movie.title}</h1>
        <p>{movie.overview?.slice(0, 100)}.....</p>
        <p><span>Release Date: </span>{movie.release_date}</p>
    </div>
}