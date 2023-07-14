import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = () => {
    return axios.get("http://localhost:4000/movies");
};
const fetchTvseries = () => {
    return axios.get("http://localhost:4000/tvseries");
};

const ParallelQueriesPage = () => {
    const { isLoading: moviesLoading, error: moviesError, data: movies } = useQuery(["movies"], fetchMovies);
    const { isLoading: tvseriesLoading, error: tvseriesError, data: tvseries } = useQuery(["tvseries"], fetchTvseries);
    console.log({ movies, tvseries });

    // check for loading, errors and then show arrays in data.data , смотри в Movies.page.jsx

    return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
