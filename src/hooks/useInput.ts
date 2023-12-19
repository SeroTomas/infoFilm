import { InputType } from "@/models";
import { ChangeEvent, useState, useMemo } from "react"

const emptyError = {
    email: "Debe ingresar su Email",
    password: "Debe ingresar su contraseña"
}

const wrongError = {
    email: "Ingrese un Email valido",
    password: "Su contraseña debe tener al menos 6 letras"
}

const placeholder = {
    email: "Por favor ingrese su Email",
    password: "Por favor ingrese su contraseña"
}

const regexp = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-zA-Z].{6,})[^\s]+$/
}

const getPlaceholder = (type: InputType) => placeholder[type];

const getRegex = (type: InputType) => regexp[type];

const getEmptyError = (type: InputType) => emptyError[type];

const getWrongError = (type: InputType) => wrongError[type];


const useInput = (type: InputType) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    //Memorizamos para que no se vuelvan a llamar en los re-renders
    const placeholder = useMemo(() => getPlaceholder(type), []);
    const regex = useMemo(() => getRegex(type), [])

    const handleError = (value: string) => {
        const regexOut = regex.test(value);

        regexOut ? setError("") : setError(getWrongError(type));
        !value && setError(getEmptyError(type));
    }

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        setValue(inputValue);
        handleError(inputValue);
    }

    return {
        type,
        value,
        placeholder,
        error,
        handleValue,
    }
}
export default useInput