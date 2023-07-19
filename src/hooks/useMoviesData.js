import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import { request } from "../utils/axios-utils";

const fetchMovies = () => {
    // return axios.get("http://localhost:4000/movies");
    // вместо axios используем axios interceptor
    return request({url: '/movies'})
};

const addMovie = (movie) => {
    // return axios.post("http://localhost:4000/movies", movie);
    // вместо axios используем axios interceptor
    return request({url:'/movies', method:'post', data: movie})
};

export const useMoviesData = () => {
    return useQuery(["movies"], fetchMovies);
};

export const useAddMoviesData = () => {
    const queryClient = useQueryClient();
    return useMutation(addMovie, {
        onMutate: async (newMovie) => {
            await queryClient.cancelQueries(["movies"]);
            const previousMovieData = queryClient.getQueryData(["movies"]);
            queryClient.setQueryData(["movies"], (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [
                        ...oldQueryData.data,
                        { id: oldQueryData?.data?.length + 1, ...newMovie },
                    ],
                };
            });
            return {
                previousMovieData,
            };
        },
        onError: (_error, _movie, context) => {
            queryClient.setQueryData(["movies"], context.previousMovieData);
        },
        onSettled: () => {
            queryClient.invalidateQueries(["movies"]);
        },
    });
};
