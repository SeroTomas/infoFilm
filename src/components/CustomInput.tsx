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

const CustomInput = () => {
    return (
        <InputLayout>
            <Input />
            <ErrorSpan />
        </InputLayout>
    )
}
export default CustomInput