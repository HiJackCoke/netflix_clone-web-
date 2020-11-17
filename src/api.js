import axios from "axios";

const TMDB_KEY = "da8324cd688ff9706ecae7f17f146e85"
const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY,
        }
    });

const getAnything = async (path, params = {}) => {
    try {
        const {
            data: { results },
            data,
        } = await makeRequest(path, params);
        console.log("=================", path)
        return [results || data, null];
    } catch (e) {
        console.log(e);
        return [null, e];
    }
};


export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming"),
    movieDetail: (id) => getAnything(`/movie/${id}`, { append_to_response: "videos" }),
    search: (query) => getAnything("/search/movie", { query }),
    similar: (id) => getAnything(`/movie/${id}/similar`),
};

export const tvApi = {
    airingToday : () => getAnything("/tv/airing_today"),
    popular: () => getAnything("/tv/popular"),
    topRated: () => getAnything("/tv/top_rated"),
    showDetail: (id) => getAnything(`/tv/${id}`, { append_to_response: "videos" }),
    search: (query) => getAnything("/search/tv", { query }),
    similar: (id) => getAnything(`/tv/${id}/similar`),
};
