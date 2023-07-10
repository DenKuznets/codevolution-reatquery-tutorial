import axios from "axios";
import { useQuery } from "react-query";

const RQMoviesPage = () => {
    const { isLoading, data } = useQuery("movies", () => {
        return axios.get("http://localhost:4000/movies");
    });
    if (isLoading) return <h2>Loading...</h2>;
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
