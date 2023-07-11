import axios from "axios";
import { useQuery } from "react-query";

const fetchMovies = () => {
    return axios.get("http://localhost:4000/movies");
}

const RQMoviesPage = () => {
    const { isLoading, data, error, isError } = useQuery("movies", fetchMovies);
    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>{error.message}</h2>
    return (
        <>
            <h2>RQMoviesPage</h2>
            {data?.data.map((movie) => (
                <div key={movie.title}>{movie.title}</div>
            ))}
        </>
    );
};



export default RQMoviesPage;
