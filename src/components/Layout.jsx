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
                    <li>
                        <Link to="/rq-parallel">RQ parallel</Link>
                    </li>
                    <li>
                        <Link to="/rq-dynamic-parallel">
                            RQ dynamic-parallel
                        </Link>
                    </li>
                    <li>
                        <Link to="/rq-dependent">RQ dependent</Link>
                    </li>
                    <li>
                        <Link to="/rq-pagination">RQ pagination</Link>
                    </li>
                    <li>
                        <Link to="/rq-infinite">RQ infinite</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
