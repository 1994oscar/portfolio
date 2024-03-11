import styled from "styled-components";

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    //align-items: center;
`;

const Column = styled.div`
    width: ${props => props.$size};
`;

export {Row, Column}
