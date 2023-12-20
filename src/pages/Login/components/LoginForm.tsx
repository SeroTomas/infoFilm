import styled from "styled-components"
import { CustomInput } from "@/components";
import { useInput } from "@/hooks";
import { ChangeEvent } from "react";
import { signInWithEmail } from "@/utilities";

const FormContainer = styled.form`
    width: 400px;
    padding: 30px;
    background-color: aliceblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
`

const SubmitButton = styled.button`
    border: 1px solid lightgrey;
    background-color: lightblue;

    &:hover{
        cursor: pointer;
        background-color: transparent;
    }
    
    &:active{
        outline: 2px solid blue;
        transform: scale(.98);
    }
`

const LoginForm = () => {

    const email = useInput("email");

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (!email.error) {
                const user = await signInWithEmail(email.value)
                console.log(user)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <CustomInput {...email} />
            <SubmitButton>Enviar</SubmitButton>
        </FormContainer>
    )
}
export default LoginForm