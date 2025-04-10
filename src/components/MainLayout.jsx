import { Outlet, Link } from "react-dom";
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
                        <Link to='/images'>Shorts</Link>
                    </li>
                    <li>
                        <Link to='/subscriptions'>Subscribtions</Link>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <Outlet />
            </div>
        </section>
    );
};