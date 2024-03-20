import styled from "styled-components";
import colors from "../../Colors";

export const Icon = styled.i`
   svg{
    transition: all .5s ease;
    fill: ${props => props.$theme.lightMode ? colors.black : colors.white};
   }
    color: ${props => props.$theme.lightMode ? colors.black : colors.white};

    &:hover{
        cursor: pointer;
        
        svg{
            fill: ${colors.primary};
        }
    }
`; 