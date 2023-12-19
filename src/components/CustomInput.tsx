import styled from "styled-components"
import { InputType } from "@/models"
import { ChangeEvent } from "react"

interface Props {
    value: string
    error: string
    type: InputType
    placeholder?: string
    handleValue: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    height: 55px;
`
const Input = styled.input<{ $haveError?: boolean}>`
        outline: none;
        font-size: 1.6rem;
        font-weight: 600;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding: 10px;
        box-shadow:${(props) => props.$haveError ? "0 2px 0 red" : null};
    
    &::placeholder{
        opacity: .5;
    }

    &:hover{
        background-color: aliceblue;
        cursor: pointer;
    }

    &:focus{
        background-color: aliceblue;
    }

    
`
const ErrorSpan = styled.span`
    font-size: 1.2rem;
    padding-left: 5px;
    color: red;
`


const CustomInput = ({ type, error, placeholder,  handleValue }: Props) => {
    
    return (
        <InputLayout>
            <Input type={type} placeholder={placeholder} onChange={handleValue} $haveError={!!error} />
            <ErrorSpan>{error}</ErrorSpan>
        </InputLayout>
    )
}
export default CustomInput;