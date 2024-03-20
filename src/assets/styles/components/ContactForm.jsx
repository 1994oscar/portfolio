import styled from "styled-components";
import colors from "../Colors";
import {devices} from "../devices.jsx";


const defaultProps = {
    w: '100%',
}

const ContactForm = styled.div`
    width: ${props => props.$w || defaultProps.w};
    position: relative;
    z-index: 3;
    
    @media ${devices.max.sm}{
        width: 100%;
    }
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
        &:focus-visible{
            outline: none;
            -moz-outline-color: unset;
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
    transition: all .5s ease;
    position: relative;
    display: ${props => props.$show ? 'block' : 'none'};
    color: ${colors.error};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6rem; /* 133.333% */
    letter-spacing: -0.167px;
    text-align: right;
    margin-top: .5rem;

    &::before{
        content: "";
        width: 24px;
        height: 24px;
        background-image: url("/public/images/icons/error-icon.svg");
        background-size: contain;
        background-position: center;
        z-index: 1;
        position: absolute;
        top: -50px;
        right: 0;
    }
`;

export {ContactForm, Input, TextArea, Label}