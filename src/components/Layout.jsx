import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Traditional Movies</Link>
                    </li>
                    <li>
                        <Link to="/rq-movies">RQ Movies</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
