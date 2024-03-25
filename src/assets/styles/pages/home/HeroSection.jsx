import colors from "../../Colors";
import styled from "styled-components";
import {devices, display} from "../../devices.jsx";
import {Button} from "../../components/generics/Button.jsx";

const images ={
    oval: 'oval.svg',
    ovalBlack: 'oval-black.svg',
    oval2: 'oval-2.svg',
    oval2Black: 'oval-2-black.svg'
}

const HeroSection = styled.div`
    transition: all .5s ease;
    position: relative;
    overflow: hidden;
    width: 100%;
    z-index: 0;
    padding-top: 19.8rem;
    background: ${props => props.$theme.lightMode ? colors.white : colors.black};
    padding-bottom: 20.9rem;
    
    @media ${devices.max.md}{
        padding: 14.8rem 0 10.8rem;
    }
    
    @media ${devices.max.sm}{
        ${Button}{
            display: block;
            margin: 0 auto; 
            max-width: 14.6rem;
            text-align: center;
        }
    }
`;

const HeroContent = styled.div`
    transition: all .5s ease;
    height: 100%;
    width: 100%;
    color: ${props => props.$theme.lightMode ? colors.black : colors.white};
   
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
        background-image: url(/images/${props => props.$theme.lightMode ? images.oval2Black : images.oval2});
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

    @media ${devices.max.lg}{
        h1{
            font-size: 70px;
            max-width: 65rem;
        }
    }

    @media ${devices.max.md}{
        h1{
            font-size: 60px;
            max-width: 48rem;
        }
    }
    
    @media ${devices.max.sm}{
        margin-top: 4rem;
        h1,p{
            text-align: center;
        }
        
        h1{
            line-height: 6rem;
            font-size: 4.2rem;
        }
        
        &::before{
            top: 23.8rem;
            z-index: -2;
            left: -28.4rem;
        }
    }
`;

const HeroImage = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    width: 96.7%;
    max-width: 1110px;
    justify-content: flex-end;
    

    @media ${devices.min.sm}{
        display: flex;
    }
    @media ${devices.max.sm}{
        display: none;
    }
`;

const HeroImageMobile = styled(HeroImage)`
    @media ${devices.min.sm}{
        display: none;
    }
    @media ${devices.max.sm}{
        display: flex;
        position: relative;
        width: 100%;
        justify-content: center;
        margin-top: -210px; 
    }
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
        background-image: url(/images/${props => props.$theme.lightMode ? images.ovalBlack : images.oval});
        bottom: 10rem;
        left: 0;
        transform: translate(-50%, 0);
        z-index: 1;
    }

    img{
        width: 100%;
        height: auto;
    }
    
    @media ${devices.max.md}{
        max-width: 340px;
        position: unset;
        &::before{
            left: unset;
            right: -10%;
            bottom: 0;
            width: 17.4rem;
            height: 17.4rem;
            background-size:contain;
            background-repeat: no-repeat;
            transform: unset;
        }
    }
    
    @media ${devices.max.sm}{
        background: ${colors.dkGray};
        background: linear-gradient(180deg, rgba(36,36,36,0) 0%, rgba(36,36,36,1) 100%);
        
        img{
            height: 100%;
            object-fit:cover;
            position: relative;
            z-index: 5;
        }
        
        &::before{
            right: -25%;
        }
    }
`;

export {HeroSection, HeroContent, HeroImage, HeroImageMobile, Image};