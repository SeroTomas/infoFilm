import styled from "styled-components"

const InputLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const Input = styled.input`
    
`
const ErrorSpan = styled.span`
    
`

interface Props {
    value: string
    type: string
    handleValue: () => {}
}

const handlePlaceholder = () => {
    
}


const CustomInput = ({ value, type, handleValue }: Props) => {
    return (
        <InputLayout>
            <Input type={type} placeholder={ } />
            <ErrorSpan></ErrorSpan>
        </InputLayout>
    )
}
export default CustomInput