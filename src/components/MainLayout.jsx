import { Outlet, Link } from "react-router-dom";
import LogoutIcon from '../assets/logout.svg';
import './MainLayout.css';
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";

export const MainLayout = () => {
    const { signOut } = useContext(AuthContext);

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

                    <li>
                      <img className='logout' src={LogoutIcon} alt="Logout icon" onClick={signOut}/>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <Outlet />
            </div>
        </section>
    );
};
