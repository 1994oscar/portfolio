import styled from "styled-components";
import colors from "../Colors";


const defaultProps = {
    w: '100%',
}

const ContactForm = styled.div`
    width: ${props => props.$w || defaultProps.w};
`;

const Input = styled.input`

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

        border-bottom: solid 1px ${props => props.$error === 'success' ? (colors.success) : 
                                                (props.$error === 'error' ? colors.error  :
                                                props.$theme.lightMode ? colors.dkGray : colors.white) };
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