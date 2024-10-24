import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <div className="layout">
                <NavLink to="/" end>User list</NavLink>
                <NavLink to="/add-user">Add user</NavLink>
            </div>

            <Outlet />
        </>
    )
}