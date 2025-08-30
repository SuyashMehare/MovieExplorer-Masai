import axios from "axios";
import { NOW_PLAYING_URL, POPULAR_URL, TOP_RATED_URL, UPCOMING_URL } from "../constants";
import type { Movie } from "../types";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MovieTheme } from "../components/MovieTheme";
import SearchInput from "../components/SearchInput";

export default function Dashboard() {
    const [platformMovies, setPlatformMovies] = useState<Array<Partial<Movie>>>([]);
    const [crntMovieTheme, setCrntMovieTheme] = useState<string>('')


    useEffect(() => {
        fetchMovie("nowplaying", 1);
    },[]);

    return <div className="m-auto">
        <div className="flex gap-4">
            <MovieTheme fetchMovie={fetchMovie}/>
            <SearchInput setMovies={setPlatformMovies} fetchMovie={fetchMovie}/>
        </div>

        <div className="grid grid-col grid-cols-3 gap-x-1 gap-y-3">
            {platformMovies.map((movie) => <MovieCard movie={movie}/>)}
        </div>
    </div>

    async function fetchMovie(type: string, page=1) {
        type = type.toLowerCase();
        let movies: Array<Partial<Movie>> = [];
        let theme: string = 'nowplaying';

        if(type == "nowplaying") {
            const res = await axios
            .get(NOW_PLAYING_URL + '?language=en-US&page='+ page, {
                headers: {
                    Authorization: 'Bearer ' + import.meta.env.APP_BEARER_TOKEN
                }
            });

            movies = res.data.results;
            theme = 'nowplaying'
        }
        else if(type == "popular") {
            const res = await axios
            .get(POPULAR_URL + '?language=en-US&page='+ page, {
                headers: {
                    Authorization: 'Bearer ' + import.meta.env.APP_BEARER_TOKEN
                }
            });

            movies = res.data.results;
            theme = 'popular'

        }
        else if(type == "toprated") {
            const res = await axios
                .get(TOP_RATED_URL + '?language=en-US&page=' + page, {
                    headers: {
                        Authorization: 'Bearer ' + import.meta.env.APP_BEARER_TOKEN
                    }
                });

            movies = res.data.results;
            theme = 'popular'
        }
        else if(type == "upcoming") {
            const res = await axios
                .get(UPCOMING_URL + '?language=en-US&page=' + page, {
                    headers: {
                        Authorization: 'Bearer ' + import.meta.env.APP_BEARER_TOKEN
                    }
                });

            movies = res.data.results;
            theme = 'popular'
            console.log(crntMovieTheme);
            
        }

        setPlatformMovies(movies)
        setCrntMovieTheme(theme)
    }
}