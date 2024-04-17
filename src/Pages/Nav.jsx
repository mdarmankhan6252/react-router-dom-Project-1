import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex max-w-7xl items-center justify-between px-2 py-2">
            <h2 className="text-2xl font-semibold dark:text-white">NavBar</h2>
            <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/comments">Comments</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;