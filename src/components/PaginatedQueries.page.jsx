import { Button, ListItemButton, ListItemText } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    .container__left,
    .container__right {
        flex: 1;
    }
`;

const fetchActors = (pageNumber) => {
    return axios.get(
        `http://localhost:4000/actors?_limit=2&_page=${pageNumber}`
    );
};

const PaginatedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { isLoading, data, error, isError, isFetching } = useQuery({
        queryKey: ["actors", pageNumber],
        queryFn: () => fetchActors(pageNumber),
        keepPreviousData: true,
    });

    if (isLoading) return <h2>Loading...</h2>;

    if (isError) return <h2>{error.message}</h2>;

    return (
        <Container>
            <div className="container__left">
                <h2>PaginatedQueriesPage</h2>

                {data?.data.map((actor) => (
                    <ListItemButton key={actor.id}>
                        <ListItemText primary={`${actor.id}. ${actor.name}`} />
                    </ListItemButton>
                ))}
                <Button
                    onClick={() => setPageNumber((page) => page - 1)}
                    disabled={pageNumber === 1}
                >
                    Prev page
                </Button>
                <Button
                    onClick={() => setPageNumber((page) => page + 1)}
                    disabled={pageNumber === 4}
                >
                    Next page
                </Button>
                <br />
                {isFetching && "Loading"}
            </div>
            <div className="container__right">
                В devtools на вкладке network выбери вместо "No Throttling" ->
                "Slow 3g". При переключении страниц, внизу будет появляться
                loading. Это загрузка следующей страницы с отображением
                предыдущих данных благодаря опции keepPreviousData
            </div>
        </Container>
    );
};

export default PaginatedQueriesPage;
