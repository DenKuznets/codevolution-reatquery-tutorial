import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchMovies = () => {
    return axios.get("http://localhost:4000/movies");
};

const RQMoviesPage = () => {
    // useQuery первый аргрумент ключ, второй, колбэк функция для подтягивания данных с api, третий аргумент (опциональный) конфигурация времени кэша в мс (по умолчанию 5 минут)
    const { isLoading, data, error, isError, isFetching } = useQuery(
        ["movies"],
        fetchMovies,
        {
            cacheTime: 60 * 1000 * 5,
            staleTime: 60 * 1000 * 10,
        }
    );

    console.log({ isLoading, isFetching });

    if (isLoading) return <h2>Loading...</h2>;

    if (isError) return <h2>{error.message}</h2>;
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
