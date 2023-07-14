import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const fetchMovie = (movieId) => {
    return axios.get(`http://localhost:4000/movies/${movieId}`);
};

const DynamicParallelPage = ({ movieIds }) => {
    // для выполнения неизвестного количества параллельных запросов используется useQueries
    const queryResults = useQueries({
        queries: movieIds.map((id) => {
            return {
                queryKey: ["movie", id],
                queryFn: () => fetchMovie(id),
            };
        }),
    });

    const listToShow = queryResults.map((item, index) => {
        // console.log(item.data.data);

        if(item.isLoading) return <div key={index}>Loading...</div>;

        if (item.error) return <div key={index}>{item.error}</div>;

        return (
            <li key={index}>
                <h1>{item.data.data.director}</h1>
                <h2>{item.data.data.title}</h2>
            </li>
        );
    });

    // console.log(listToShow);

    return <ul>{listToShow}</ul>;
};

export default DynamicParallelPage;
