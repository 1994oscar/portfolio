import styled from "styled-components";
import colors from "../../Colors";

const ProjectsSection = styled.div`
    background-color: ${props => props.theme.lightMode ? colors.white : colors.black};
`;

const ProjectHeader = styled.div`
    padding-top: 8rem;
    width: 100%;
    margin-bottom: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1,h2{
        color: ${props => props.theme.lightMode ? colors.black : colors.white};
    }  
`;
const ProjectsBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ProjectItem = styled.div`
    margin-bottom: 6.9rem;
    img{
        width: 100%;
        height: 40rem;
        object-fit: cover;
        object-position: center;
    }

    h3{
        margin-top: 1.9rem;
        margin-bottom: .7rem;
        color: ${props => props.theme.lightMode ? colors.black : colors.white};
    }

    span{
        color: ${props => props.theme.lightMode ? colors.black : colors.white};
        margin-right: 1.8rem;
    }
`;


export {ProjectsSection, ProjectHeader , ProjectsBox, ProjectItem}