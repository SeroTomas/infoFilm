import styled from "styled-components"
import { LoginForm } from "./components"

const LoginLayout = styled.div`
    height: 100vh;
    width: 100%;
    background-color: gray;
    display: grid;
    place-items: center;
`


const Login = () => {
    return (
        <LoginLayout>
            <LoginForm />

        </LoginLayout>
    )
}
export default Login