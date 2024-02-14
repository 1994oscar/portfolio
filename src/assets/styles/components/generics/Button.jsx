import styled from "styled-components";
import { themeBlack } from "../../Colors";

const Button = styled.a`
    transition: all .2s ease-in;
    text-transform: uppercase;
    font-weight: 700;
    font-style: normal;
    line-height: 26px;
    letter-spacing: 2.286px;
    color: ${themeBlack.white};
    padding-bottom: 1rem;

    border-bottom: solid ${themeBlack.primary} 2px;

    &:hover{
        cursor: pointer;
        color: ${themeBlack.primary};
    }
`;

export default Button;
