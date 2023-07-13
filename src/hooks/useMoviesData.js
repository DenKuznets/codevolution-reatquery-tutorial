import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = () => {
    return axios.get("http://localhost:4000/movies");
};

const useMoviesData = () => {
    return useQuery(["movies"], fetchMovies, {
        // refetchInterval: refetchValue,
    });
}

export default useMoviesData