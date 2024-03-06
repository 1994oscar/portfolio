import styled from "styled-components";
import colors from "../../Colors";

const Button = styled.a`
    transition: all .2s ease-in;
    text-transform: uppercase;
    font-weight: 700;
    font-style: normal;
    line-height: 26px;
    letter-spacing: 2.286px;
    color: ${props => props.theme.lightMode ? colors.black : colors.white};
    padding-bottom: 1rem;

    border-bottom: solid ${colors.primary} 2px;

    &:hover{
        cursor: pointer;
        color: ${colors.primary};
    }
`;



export default Button;
