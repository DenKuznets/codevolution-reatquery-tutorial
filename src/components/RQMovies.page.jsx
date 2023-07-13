import { Link as RouterLink } from "react-router-dom";
import useMoviesData from "../hooks/useMoviesData";
import { Button, ListItemButton, ListItemText } from "@mui/material";

const RQMoviesPage = () => {
    const { isLoading, data, error, isError, isFetching, refetch } =
        useMoviesData();

    console.log({ isLoading, isFetching });

    if (isLoading || isFetching) return <h2>Loading...</h2>;

    if (isError) return <h2>{error.message}</h2>;

    return (
        <>
            <h2>RQMoviesPage</h2>
            <Button variant="contained" onClick={refetch}>Fetch movies</Button>
            {data?.data.map((movie) => (
                <ListItemButton
                    to={`${movie.id}`}
                    underline="hover"
                    component={RouterLink}
                    key={movie.title}
                >
                    <ListItemText primary={movie.title} />
                </ListItemButton>
            ))}
        </>
    );
};

export default RQMoviesPage;
