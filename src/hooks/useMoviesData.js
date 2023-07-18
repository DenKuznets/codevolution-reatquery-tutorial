import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = () => {
    return axios.get("http://localhost:4000/movies");
};

const addMovie = (movie) => {
    return axios.post("http://localhost:4000/movies", movie);
};

export const useMoviesData = () => {
    return useQuery(["movies"], fetchMovies, {
        // refetchInterval: refetchValue,
    });
};

export const useAddMoviesData = () => {
    return useMutation(addMovie);
};
