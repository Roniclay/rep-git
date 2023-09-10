import styled from 'styled-components'

export const ItemContainer = styled.div`
    width: 80%;
    border: 1px solid white;
    padding: 20px;
    h3 {
        font-size: 32px;
        color: #FAFAFA;

    }

    P {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }
    

    hr {
        color: #FAFAFA60;
        margin: 20px 0;;
    }

    button.remove {
        background-color: #FAFAFA;
        border: 1px solid #FAFAFA;
        border-radius: 30px;
        cursor: pointer;

        height: 22px;
        width: 20%;
        margin-top: 10px;
        &:hover {
            background-color: #FF0000;
            color: white;
        }

    }
    button.see {
        background-color: #FAFAFA;
        border: 1px solid #FAFAFA;
        border-radius: 30px;
        cursor: pointer;

        height: 22px;
        width: 20%;
        margin-top: 10px;
        &:hover {
            background-color: #0000FF50;
            color: white
        }

    }
`