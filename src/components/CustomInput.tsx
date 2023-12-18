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

const emptyInputError = {
    email: "Debe ingresar su Email",
    password: "Debe ingresar su contraseña"
}

const wrongInputValueError = {
    email: "Ingrese un Email valido",
    password: "Su contraseña debe tener al menos 6 letras"
}

const regexp = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-zA-Z].{6,})[^\s]+$/
}

const getPlaceholder = (type: InputType) => placeholder[type];

const getRegex = (type: InputType) => regexp[type];

const getEmptyInputError = (type: InputType) => emptyInputError[type];

const getWrongInputValueError = (type: InputType) => wrongInputValueError[type];


interface Props {
    value: string
    type: InputType
    handleValue: (event: ChangeEvent<HTMLInputElement>) => {}
}

const CustomInput = ({ value, type, handleValue }: Props) => {

    const handleErrorMessage = (value: string): string | null => {
        if (!value) return getEmptyInputError(type);
        return getRegex(type).test(value) ? null : getWrongInputValueError(type)
    }

    return (
        <InputLayout>
            <Input type={type} placeholder={getPlaceholder(type)} value={value} onChange={(event) => { handleValue(event) }} />
            <ErrorSpan>{handleErrorMessage(value)}</ErrorSpan>
        </InputLayout>
    )
}
export default CustomInput