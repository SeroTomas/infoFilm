import { InputType } from "@/models";
import { ChangeEvent, useState } from "react"


const useInput = (type: InputType) => {

    const [value, setValue] = useState("");

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    }

    return {
        type,
        value,
        handleValue
    }
}
export default useInput