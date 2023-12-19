import styled from "styled-components"
import { CustomInput } from "@/components";
import {useInput} from "@/hooks";

const FormContainer = styled.div`
    width: 400px;
    padding: 30px;
    background-color: aliceblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
`

const LoginForm = () => {

    const email = useInput("email");
    const password = useInput("password");

    return (
        <FormContainer>
            <CustomInput {...email} />
            <CustomInput {...password} />
        </FormContainer>
    )
}
export default LoginForm