import styled from "styled-components"
import { InputType } from "@/models"
import { ChangeEvent } from "react"

const InputLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const Input = styled.input`
    
`
const ErrorSpan = styled.span`
    
`
const placeholder = {
    email: "Por favor ingrese su Email",
    password: "Por favor ingrese su contraseña"
}

const getPlaceholder = (type: InputType) => placeholder[type];

interface Props {
    value: string
    error: string
    type: InputType
    handleValue: (event: ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({ value, type, error, handleValue }: Props) => {

    return (
        <InputLayout>
            <Input type={type} placeholder={getPlaceholder(type)} value={value} onChange={handleValue} />
            <ErrorSpan>{error}</ErrorSpan>
        </InputLayout>
    )
}
export default CustomInput;