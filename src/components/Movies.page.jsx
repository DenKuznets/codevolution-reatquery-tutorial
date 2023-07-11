import { useState, useEffect } from "react";
import axios from "axios";

const MoviesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:4000/movies")
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>There is an error {error}</h2>;
    }

    return (
        <>
            <h2>Movies Page</h2>
            {data.map((movie, index) => {
                return <div key={index}>{movie.title}</div>;
            })}
        </>
    );
};

export default MoviesPage;
