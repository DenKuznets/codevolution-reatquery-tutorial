import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import MoviesPage from "./components/Movies.page";
import RQMoviesPage from "./components/RQMovies.page";
import RQMoviePage from "./components/RQMovie.page";
import HomePage from "./components/Home.page";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="rq-movies" element={<RQMoviesPage />} />
            <Route path="rq-parallel" element={<ParallelQueriesPage />} />
            <Route
                path="rq-dynamic-parallel"
                element={<DynamicParallelPage movieIds={[1, 3]} />}
            />
            <Route
                path="rq-dependent"
                element={<DependentQueriesPage email="vishwas@example.com" />}
            />
            <Route path="rq-movies/:movieId" element={<RQMoviePage />} />
        </Route>
    )
);

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    );
}

export default App;
