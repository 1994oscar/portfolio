import styled from "styled-components";
import colors from "../Colors";

const Navigation = styled.nav`
    transition: all .5s ease;
    position: relative;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    padding: 39px 0;
    background-color: transparent; 
    color: ${props => props.theme.lightMode ? colors.black : colors.white}; 
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
`;

const SocialsBox = styled.div`
    
    margin-right: 2.9rem;
    display: flex;
    gap: 30px;

    svg{
        width: 24px;
        height: 24px;
        fill: ${colors.white};
    }
`;

export  {Navigation, Logo, NavigationBox, SocialsBox};