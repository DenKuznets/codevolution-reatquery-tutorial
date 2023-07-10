import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import MoviesPage from "./components/Movies.page";
import RQMoviesPage from "./components/RQMovies.page";
import HomePage from "./components/Home.page";
import Layout from "./components/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/rq-movies" element={<RQMoviesPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
