import styled from "styled-components";
import colors from "../Colors";
import {devices} from "../devices.jsx";

const Navigation = styled.nav`
    transition: all .5s ease;
    position: ${props => props?.$position || 'absolute'};
    top: 0;
    z-index: 1;
    width: 100%;
    padding: ${props => props.$footer ? '0 0' : '39px 0'};
    background-color: ${props => props.$footer ? (props.$theme.lightMode ? colors.gray : colors.dkGray) : 'transparent'}; 
    color: ${props => props.$theme.lightMode ? colors.black : colors.white}; 
`;

const Logo = styled.div`
    width: 100%;
    max-width: 172px;
    
    img{
        width: 100%;
        height: auto;
    }

    span{
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px; /* 100% */
        letter-spacing: -0.444px;
    }
`;

const NavigationBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: solid 1px ${props => props.$border ? (props.$theme.lightMode ? colors.black : colors.white) : 'transparent'};
    padding: ${props => props.$footer ? '47px 0 92px' : '0'};
    
    @media ${devices.max.sm}{
        flex-direction: column;
        gap: 20px;
    }
`;

const SocialsBox = styled.div`
    
    margin-right: ${props => props.$footer ? 0 : '2.9rem'};
    display: flex;
    gap: 30px;

    svg{
        width: 24px;
        height: 24px;
        //fill: ${colors.white};
    }
`;

export  {Navigation, Logo, NavigationBox, SocialsBox};