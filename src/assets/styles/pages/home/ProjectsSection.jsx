import styled from "styled-components";
import colors from "../../Colors";
import {devices} from "../../devices.jsx";

const ProjectsSection = styled.div`
    transition: all .5s ease;
    background-color: ${props => props.$theme.lightMode ? colors.white : colors.black};
`;

const ProjectHeader = styled.div`
    padding-top: 8rem;
    width: 100%;
    margin-bottom: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1,h2{
        color: ${props => props.$theme.lightMode ? colors.black : colors.white};
    }  
    
    @media ${devices.max.sm}{
        h1{
            font-size: 4.6rem;
        }
    }
`;
const ProjectsBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ProjectItem = styled.div`
    margin-bottom: 6.9rem;
    width: 100%;
    img{
        width: 100%;
        height: 40rem;
        object-fit: cover;
        object-position: center;
    }

    h3{
        margin-top: 1.9rem;
        margin-bottom: .7rem;
        color: ${props => props.$theme.lightMode ? colors.black : colors.white};
    }

    span{
        color: ${props => props.$theme.lightMode ? colors.black : colors.white};
        margin-right: 1.8rem;
        text-transform: uppercase;
    }
    
    @media ${devices.min.sm}{
        width: 49%;
    }
`;

const HoverDetails = styled.div`
    background-color: rgba(0, 0, 0, .75);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0; 
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4.8rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity .5s ease;
`;

const ProjectImageBox = styled.div`
    position: relative;
    &:hover ${HoverDetails}{
        visibility: visible;
        opacity: 1;
    }
`;


export {ProjectsSection, ProjectHeader , ProjectsBox, ProjectItem, ProjectImageBox, HoverDetails}