import styled from "styled-components"
import { CustomInput } from "@/components";
import { useInput, useSupaSession } from "@/hooks";
import { ChangeEvent } from "react";
import { supabase } from "@/services";

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
            async function signInWithEmail() {
                await supabase.auth.signInWithOtp({
                    email: email.value,
                    options: {
                        // set this to false if you do not want the user to be automatically signed up
                        shouldCreateUser: false,
                    },
                })
            }
            signInWithEmail();
        } catch (error) { console.log(error) }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <CustomInput {...email} />
            <SubmitButton type="submit">Enviar</SubmitButton>
        </FormContainer>
    )
}
export default LoginForm