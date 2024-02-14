import styled from "styled-components";
import { themeBlack } from "../../Colors";

const TextUnderline = styled.span`
    position: relative;
    &::before{
        content: "";
        height: 6px;
        width: 100%;
        background: ${themeBlack.primary};
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
`;

export default TextUnderline;