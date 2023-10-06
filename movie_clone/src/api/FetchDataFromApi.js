import axios from "axios";

const API_KEY = "47a1047afb8da7f94099ac7669f15001";

export async function FetchDataFromApi(midUrl, lastUrl = "") {
  return await axios.get(
    `https://api.themoviedb.org/3/${midUrl}api_key=${API_KEY}${lastUrl}`
  );
}

// https://api.themoviedb.org/3/movie/{movie_id}/videos
// https://api.themoviedb.org/3/movie/{movie_id}/videos

// const search = "search/movie?query=omg";
// const top_rated = "movie/top_rated?language=en-US&page=1";
// const popular = "movie/popular?language=en-US&page=1";
// const = https://api.themoviedb.org/3/genre/movie/list?api_key=47a1047afb8da7f94099ac7669f15001
