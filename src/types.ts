export interface Movie {
    id: number,
    title: string,
    overview: string,
    release_date: string
}

export interface SearchInputProp  {
    fetchMovie: (type: string, page?: number) => void,
    setMovies:React.Dispatch<React.SetStateAction<Partial<Movie>[]>>
}


export const EnvVariables = {
    ACCESSTOKEN: "ACCESSTOKEN",
    API_TOKEN: "API_TOKEN",
    ACCOUNT_ID: "ACCOUNT_ID"
} as const;

export type EnvVariables = typeof EnvVariables[keyof typeof EnvVariables];