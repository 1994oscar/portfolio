import styled from "styled-components";

const Container = styled.div`
    /* Commen */
    display: block;
    max-width: ${props => props.$fluid ? "100%" : "1110px"};
    margin: 0 auto;
`; 

export default Container;   