import axios from "axios"
import { SEARCH_MOVIE_URL } from "../constants"
import type { SearchInputProp } from "../types";

export default function SearchInput({setMovies, fetchMovie}:SearchInputProp) {
    async function searchMovie(value: string) {
        if(value.length == 0) {
            fetchMovie("nowplaying");
            return;
        }

        const res = await axios(SEARCH_MOVIE_URL + '?query='+value, {
            headers: {Authorization: 'Bearer ' + import.meta.env.VITE_APP_BEARER_TOKEN}
        });
        setMovies(res.data.results);
    }

    return <div>
        <input type="text" 
            onChange={(e) => searchMovie(e.target.value)}
            placeholder="Search Movies"
            className="border rounded-md p-2"
        />
    </div>
}