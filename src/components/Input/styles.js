import styled from 'styled-components'

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 30px;

    height: 62px;
    width: 80%;

    input {
        background: transparent;
        border: 0;
        width: 94%;
        height: 62px;
        padding: 0 20px;
        color: #FFFFFF
    }

    textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`