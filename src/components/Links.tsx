// Route Components
import { NavLink } from 'react-router-dom'
export const Links = () => {
    return (
        <>
            <NavLink
                to="/"
                className="cursor-pointer hover:text-nude-200 aria-[current=page]:text-nude-200"
            >
                HOME
            </NavLink>
            <NavLink
                to="/headphones"
                className="cursor-pointer hover:text-nude-200 aria-[current=page]:text-nude-200"
            >
                HEADPHONES
            </NavLink>
            <NavLink
                to="/speakers"
                className="cursor-pointer hover:text-nude-200 aria-[current=page]:text-nude-200"
            >
                SPEAKERS
            </NavLink>
            <NavLink
                to="/earphones"
                className="cursor-pointer hover:text-nude-200 aria-[current=page]:text-nude-200"
            >
                EARPHONES
            </NavLink>
        </>
    )
}
