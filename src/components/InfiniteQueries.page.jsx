import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment } from "react";

// число объектов которые мы хотим забирать с сервера за один раз
const objPerPage = 2;
const fetchActors = ({ pageParam = 1 }) => {
    const result = axios.get(
        `http://localhost:4000/actors?_limit=${objPerPage}&_page=${pageParam}`
    );
    // console.log(result);
    return result;
};

const InfiniteQueriesPage = () => {
    const {
        isLoading,
        isError,
        error,
        data,
        hasNextPage,
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery(["actors"], fetchActors, {
        getNextPageParam: (lastPage, pages) => {
            // lastPage.headers["x-total-count"] - возвращает общее количество объектов. Делим на количество объектов на странице (_limit= в axios.get ссылке), получаем общее количество страниц.
            if (pages.length < lastPage.headers["x-total-count"] / objPerPage) {
                return pages.length + 1;
            } else {
                // Когда мы возвращаем undefined , hasNextPage становится false.
                return undefined;
            }
        },
    });

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }
    return (
        <>
            <div>
                {data?.pages.map((group, i) => {
                    return (
                        <Fragment key={i}>
                            {group.data.map((actor) => {
                                return (
                                    <h2 key={actor.id}>
                                        {actor.id}. {actor.name}
                                    </h2>
                                );
                            })}
                        </Fragment>
                    );
                })}
            </div>
            <div>
                <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
                    Load More
                </button>
            </div>
            <div>
                {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
        </>
    );
};

export default InfiniteQueriesPage;
