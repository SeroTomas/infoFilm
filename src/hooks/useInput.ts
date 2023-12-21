import { InputType } from "@/models";
import { ChangeEvent, useState, useMemo } from "react"

const emptyError = {
    email: "Debe ingresar su Email",
}

const wrongError = {
    email: "Ingrese un Email valido",
}

const placeholder = {
    email: "Por favor ingrese su Email",
}

const regexp = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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