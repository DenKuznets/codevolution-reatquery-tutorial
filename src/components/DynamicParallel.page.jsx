import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const fetchMovie = (movieId) => {
    return axios.get(`http://localhost:4000/movies/${movieId}`);
};

const DynamicParallelPage = ({ movieIds }) => {
    // console.log(movieIds);
    const queryResults = useQueries({
        queries: movieIds.map((id) => {
            return {
                queryKey: ["movie", id],
                queryFn: () => fetchMovie(id),
            };
        }),
    });
    // console.log({ queryResults });
    return <div>DynamicParallelPage</div>;
};

export default DynamicParallelPage;
