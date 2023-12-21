import { useSupaSession } from "@/hooks"
import { PUBLIC_ROUTES } from "@/models";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {

    const session = useSupaSession();

    return session?.access_token ? <Outlet /> : <Navigate replace to={PUBLIC_ROUTES.LOGIN} />
}

export default AuthGuard;