import { Link as RouterLink } from "react-router-dom";
import { useAddMoviesData, useMoviesData } from "../hooks/useMoviesData";
import { Button, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

const RQMoviesPage = () => {
    const { isLoading, data, error, isError, isFetching, refetch } =
        useMoviesData();
    const [director, setDirector] = useState("");
    const [title, setTitle] = useState("");

    const { mutate: addMovie } = useAddMoviesData();

    const handleAddMovieClick = () => {
        console.log({ director, title });
        const movie = { director, title };
        addMovie(movie);
    };

    if (isLoading || isFetching) return <h2>Loading...</h2>;

    if (isError) return <h2>{error.message}</h2>;

    return (
        <>
            <h2>RQMoviesPage</h2>

            <div>
                <label htmlFor="director">Director</label>
                <input
                    id="director"
                    name="director"
                    type="text"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                />
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={handleAddMovieClick}>Add Movie</button>
            </div>

            <Button variant="contained" onClick={refetch}>
                Fetch movies
            </Button>
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
