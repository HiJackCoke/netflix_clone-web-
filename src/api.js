import axios from "axios";

const TMDB_KEY = "da8324cd688ff9706ecae7f17f146e85"
const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY,
        },
    });

const getAnything = async (path, params = {}) => {
    try {
        const {
            data: { results },
            data,
        } = await makeRequest(path, params);
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
    airingToday : () => getAnything("tv/airing_today"),
    popular: () => getAnything("/tv/popular"),
    topRated: () => getAnything("/tv/top_rated"),
    showDetail: (id) => getAnything(`/tv/${id}`, { append_to_response: "videos" }),
    search: (query) => getAnything("/search/tv", { query }),
    similar: (id) => getAnything(`/tv/${id}/similar`),
};

// import axios from 'axios';
//
// const TMDB_KEY = "da8324cd688ff9706ecae7f17f146e85"
//
// const makeRequest = (path, params) => {
//     axios.get(`https://api.themoviedb.org/3/${path}`, {
//         params: {
//             ...params,
//             api_key: TMDB_KEY
//         }
//     })
// }
//
// const getAnything = async (path, params = {}) => {
//     try {
//        const {
//            data : {results},
//            data
//        } = await makeRequest(path, params)
//         return [results || data, null]
//     }
//     catch (e) {
//         console.log(e)
//         return [null, e]
//     }
// }
//
// export const moviesApi = {
//     nowPlaying: () => getAnything("movie/now_playing"),
//     popular : () => getAnything("movie/popular"),
//     upcoming : () => getAnything("movie/upcoming"),
//     movieDetail : id => getAnything(`movie/${id}`, ),
//     search : term => getAnything("search/movie", {term}),
//     similar: id => getAnything(`movie/${id}/similar`)
// }
//
// export const tvApi = {
//     topRated : () => getAnything("tv/top_rated"),
//     popular : () => getAnything("tv/popular"),
//     airingToday : () => getAnything("tv/airing_today"),
//     showDetail : id => getAnything(`tv/${id}`),
//     search : term => getAnything("search/tv", {term}),
//     similar: id => getAnything(`tv/${id}/similar`)
// }
//
//
// //
// //
// // const api = axios.create({
// //    baseURL : "https://api.themoviedb.org/3/",
// //    params : {
// //        api_key : "da8324cd688ff9706ecae7f17f146e85",
// //        language : "en-US"
// //    }
// // });
// //
// //
// // export const moviesApi = {
// //   nowPlaying: () => api.get("movie/now_playing"),
// //   upcoming : () => api.get("movie/upcoming"),
// //   popular : () => api.get("movie/popular"),
// //   movieDetail : id =>
// //       api.get(`movie/${id}`, {
// //           params : {
// //               append_to_response : "videos"
// //           }
// //       }),
// //   search : term =>
// //       api.get("search/movie", {
// //           params : {
// //               query : encodeURIComponent(term)
// //           }
// //       }),
// //     similar: id =>
// //         api.get(`movie/${id}/similar`)
// // };
// //
// //
// // export const tvapi = {
// //   topRated : () => api.get("tv/top_rated"),
// //   popular : () => api.get("tv/popular"),
// //   airingToday : () => api.get("tv/airing_today"),
// //   showDetail : id =>
// //       api.get(`tv/${id}`, {
// //           params : {
// //               append_to_response : "videos"
// //           }
// //       }),
// //   search : term =>
// //       api.get("search/tv", {
// //           params : {
// //               query : encodeURIComponent(term)
// //           }
// //       })
// // };
