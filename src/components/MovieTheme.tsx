const style = "rounded-md p-2 cursor-pointer hover:opacity-80 shadow-md"

export function MovieTheme({fetchMovie}:{fetchMovie: (type: string) => void}){
    return <div className="flex gap-3 mb-3">
        <button 
            onClick={() => fetchMovie("nowplaying")}
            className={`${style} bg-blue-300`}
        >Now Playing</button>
        <button 
            onClick={() => fetchMovie("popular")}
            className={`${style} bg-pink-200`}
        >Popular</button>
        <button 
            onClick={() => fetchMovie("toprated")}
            className={`${style} bg-green-200`}
        >Top Rated</button>
        <button 
            onClick={() => fetchMovie("upcoming")}
            className={`${style} bg-gray-400`}
        >Upcoming</button>
    </div>
}