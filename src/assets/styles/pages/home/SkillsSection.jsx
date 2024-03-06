import colors from "../../Colors";
import styled from "styled-components";

const images ={
    oval3: 'oval-3.svg',
    oval3Black: 'oval-3-black.svg',
}


const SkillsSection = styled.div`
    position: relative;
    transition: all .5s ease;
    background-color: ${props => props.theme.lightMode ? colors.white : colors.black};
   
    &::before{
        content: "";
        background-image: url(../public/images/${props => props.theme.lightMode ? images.oval3Black : images.oval3});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 145px;
        width: 305px;
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: 0;
    }
`;

const SkillsBox = styled.div`
    padding-top: 5.8rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;

   &:first-of-type{
        padding-top: 7.2rem;
        border-top: 1px solid ${props => props.theme.lightMode ? colors.black : colors.white};
   }
`;

const Skill = styled.div`
    width: 33%;
    margin-bottom: 5.5rem;
    h2{
        color: ${props => props.theme.lightMode ? colors.black : colors.white};
    }

    p{
        color: ${props => props.theme.lightMode ? colors.black : colors.white};
    }
`;


export {SkillsSection, SkillsBox, Skill}