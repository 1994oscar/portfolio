import { themeBlack } from "../../Colors";
import styled from "styled-components";

const HeroSection = styled.div`
    position: absolute;
    top:0;
    width: 100%;
    z-index: 0;
    padding-top: 19.8rem;
    background: ${props => props.colors.black};
    padding-bottom: 20.9rem;
    //border-bottom: solid 1px ${themeBlack.white};
`;

const HeroContent = styled.div`
    height: 100%;
    width: 100%;
    color: ${props => props.colors.white};

    h1{
        max-width: 70.9rem;
    }

    p{
        margin-top: 43px;
        max-width: 445px;
        margin-bottom: 6.6rem;
    }
`;

const HeroImage = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    max-width: 1110px;
    display: flex;
    justify-content: flex-end;
`;

const Image = styled.div`
    position: relative;
    width: 100%;
    height: auto; 
    max-width: 444px; 

    &:before{
        content: "";
        width: 129px;
        height: 129px;
        position: absolute;
        background-image: url('../public/images/oval.svg');
        bottom: 10rem;
        left: 0;
        transform: translate(-50%, 0);
        z-index: 1;
    }

    img{
        width: 100%;
        height: auto;
    }
`;

export {HeroSection, HeroContent, HeroImage, Image};