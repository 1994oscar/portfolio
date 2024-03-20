import styled from "styled-components";
import {devices} from "../devices.jsx";

const Container = styled.div`
    /* Commen */
    display: block;
    max-width: ${props => props.$fluid ? "100%" : "1110px"};
    margin: 0 auto;
    
    @media ${devices.max.lg}{
        padding: 0 3rem;
    }
`;


export default Container;   