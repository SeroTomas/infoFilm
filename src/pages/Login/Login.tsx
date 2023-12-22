import styled from "styled-components"
import { LoginForm } from "./components"
import { useEffect } from "react"
import { supabase } from "@/services"
import { useNavigate } from "react-router-dom"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/models"
import { removeUserLocalstorage, saveUserLocalstorage } from "@/utilities"
import { useSupaSession } from "@/hooks"

const LoginLayout = styled.div`
    height: 100vh;
    width: 100%;
    background-color: gray;
    display: grid;
    place-items: center;
`

const Login = () => {

    const handleClick = async () => { const { error } = await supabase.auth.signOut(); }


    return (
        <LoginLayout>
            <LoginForm />
            <button onClick={handleClick}></button>
        </LoginLayout>
    )
}
export default Login