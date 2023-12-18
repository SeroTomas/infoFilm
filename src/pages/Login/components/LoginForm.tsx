import styled from "styled-components"
import { CustomInput } from "@/components";

const FormContainer = styled.div`
    width: 400px;
    padding: 10px;
    background-color: aliceblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`

const LoginForm = () => {



    return (
        <FormContainer>
            <CustomInput />
            <CustomInput />
        </FormContainer>
    )
}
export default LoginForm