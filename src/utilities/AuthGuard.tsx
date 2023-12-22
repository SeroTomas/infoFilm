import { Navigate, Outlet } from "react-router-dom";
import { getUserLocalstorage } from ".";
import { PUBLIC_ROUTES } from "@/models";

const AuthGuard = () => {
    const user = getUserLocalstorage();
    return user ? <Outlet /> : <Navigate to={PUBLIC_ROUTES.LOGIN} />
}

export default AuthGuard;