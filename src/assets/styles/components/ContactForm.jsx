import styled from "styled-components";
import colors from "../Colors";


const defaultProps = {
    w: '100%',
}

const ContactForm = styled.div`
    width: ${props => props.$w || defaultProps.w}  ;
    input, textarea{ 
        &::placeholder{
            color: rgba(${props => props.$theme.lightMode ? '0, 0, 0' : '255, 255, 255'}, .5);

            font-family: "Space Grotesk";
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px; /* 162.5% */
            letter-spacing: -0.222px;
            text-transform: uppercase;
        }
    }

    /* input, textarea{
        height: 42px;
        width: 100%;
        margin-bottom: 32px;
        background-color: transparent;
        border: none;
        border-bottom: solid 1px ${props => props.$theme.lightMode ? colors.black : colors.white};
        color: rgba(${props => props.$theme.lightMode ? '0, 0, 0' : '255, 255, 255'}, .5);

        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 162.5% */
        /* letter-spacing: -0.222px;
    } */

    /* textarea{
        height: 10.7rem;
    }  */
`;

const Input = styled.input`
        height: 42px;
        width: 100%;
        margin-top: 32px;
        background-color: transparent;
        border: none;
        color: rgba(${props => props.$theme.lightMode ? '0, 0, 0' : '255, 255, 255'}, .5);

        text-transform: uppercase;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 162.5% */
        letter-spacing: -0.222px;

        border-bottom: solid 1px ${props => props?.$error ? colors.success : colors.error };
`;

const TextArea = styled(Input)`
    height: 10.7rem;
`;

const Label = styled.label`
    display: block;
    color: ${colors.error};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6rem; /* 133.333% */
    letter-spacing: -0.167px;
    text-align: right;
    margin-top: .5rem;
`;

export {ContactForm, Input, TextArea, Label}