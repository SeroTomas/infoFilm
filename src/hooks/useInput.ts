import { InputType } from "@/models";
import { ChangeEvent, useState } from "react"

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

const getRegex = (type: InputType) => regexp[type];

const getEmptyInputError = (type: InputType) => emptyInputError[type];

const getWrongInputValueError = (type: InputType) => wrongInputValueError[type];


const useInput = (type: InputType) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleError = (value: string) => {
       !value && setError(getEmptyInputError(type));
       value && getRegex(type).test(value) ? setError("") : setError(getWrongInputValueError(type))
    }

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        handleError(inputValue);
    }


    return {
        value,
        type,
        error,
        handleValue,
    }
}
export default useInput