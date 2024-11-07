//outlet is a placeholder for child routes
import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

export default function Root() {
    return <>
        <MainNavigation/>
        <Outlet />
    </>

}