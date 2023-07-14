import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchMovie = ({ queryKey }) => {
    const movieId = queryKey[1];
    return axios.get(`http://localhost:4000/movies/${movieId}`);
};

export const useMovieData = (movieId) => {
    // у queryClient есть доступ к кэшу, с помощью которого можно предзаполнить данные на экране информацией с предыдущих запросов, на то время пока актуальная информация подгятивается с сервера
    const queryClient = useQueryClient();

    // при выполнеии запроса, мы проверяем есть ли кэш от запроса с таким же ключом, если есть, ищем в нем наш фильм
    return useQuery(["movie", movieId], fetchMovie, {
        initialData: () => {
            const movie = queryClient
                .getQueryData(["movies"])
                ?.data?.find((movie) => movie.id === parseInt(movieId));

            return movie ? { data: movie } : undefined;
        },
    });
};
