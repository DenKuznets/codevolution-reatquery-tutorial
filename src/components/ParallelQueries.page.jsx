import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = () => {
    return axios.get("http://localhost:4000/movies");
};
const fetchTvseries = () => {
    return axios.get("http://localhost:4000/tvseries");
};

const ParallelQueriesPage = () => {
    const { data: movies } = useQuery(["movies"], fetchMovies);
    const { data: tvseries } = useQuery(["tvseries"], fetchTvseries);
    console.log({ movies, tvseries });
    return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
