import { useParams } from "react-router-dom";
import { useMovieData } from "../hooks/useMovieData";
import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

const RQMoviePage = () => {
    const params = useParams();
    const { data, isLoading, isError, error } = useMovieData(params.movieId);


    if (isLoading) {
        return (
            <Typography variant="h2" component="h2">
                Loading...
            </Typography>
        );
    }

    if (isError) {
        return (
            <Typography variant="h2" component="h2">
                {error}
            </Typography>
        );
    }

    return (
        <div>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h2" component="h2">
                        {data?.data.director}
                    </Typography>
                    <Typography variant="h3" component="h3">
                        {data?.data.title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default RQMoviePage;
