import { Outlet, Link } from "react-router-dom";
import './MainLayout.css';

export const MainLayout = () => {
    return (
        <section id="main-layout">
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/shorts'>Shorts</Link>
                    </li>
                    <li>
                        <Link to='/subscribtions'>Subscribtions</Link>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <Outlet />
            </div>
        </section>
    );
};