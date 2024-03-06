import colors from "../../Colors";
import styled from "styled-components";

const images ={
    oval: 'oval.svg',
    ovalBlack: 'oval-black.svg',
    oval2: 'oval-2.svg',
    oval2Black: 'oval-2-black.svg'
}

const HeroSection = styled.div`
    transition: all .5s ease;
    position: relative;
    width: 100%;
    z-index: 0;
    padding-top: 19.8rem;
    background: ${props => props.theme.lightMode ? colors.white : colors.black};
    padding-bottom: 20.9rem;
`;

const HeroContent = styled.div`
    transition: all .5s ease;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.lightMode ? colors.black : colors.white};
   
    h1{
        max-width: 70.9rem;
    }

    p{
        margin-top: 43px;
        max-width: 445px;
        margin-bottom: 6.6rem;
    }

    &::before{
        content: "";
        background-image: url(../public/images/${props => props.theme.lightMode ? images.oval2Black : images.oval2});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 160px;
        width: 530px;
        position: absolute;
        z-index: -1;
        top: 10.8rem;
        left: -10.4rem;
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
        background-image: url(../public/images/${props => props.theme.lightMode ? images.ovalBlack : images.oval});
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