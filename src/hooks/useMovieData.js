import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchMovie = ({ queryKey }) => {
    // console.log({ queryKey });
    return axios.get(`http://localhost:4000/movies/${queryKey[1]}`)
};

export const useMovieData = (heroId) => {
    return useQuery(['movie', heroId], fetchMovie)
}