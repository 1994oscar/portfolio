import styled from "styled-components";
import { themeBlack } from "../../Colors";

export const Icon = styled.i`
   svg{
    fill: ${props => props.color};
   }
    color: ${props => props.color};
`; 