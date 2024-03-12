import styled from "styled-components";
import colors from "../../Colors";

const Anchor = styled.a`
    transition: all .2s ease-in;
    text-transform: uppercase;
    font-weight: 700;
    font-style: normal;
    line-height: 26px;
    letter-spacing: 2.286px;
    color: ${props => props.$theme.lightMode ? colors.black : colors.white};
    padding-bottom: 1rem;

    border-bottom: solid ${colors.primary} 2px;

    &:hover{
        cursor: pointer;
        color: ${colors.primary};
    }

    width: ${props => props?.w || 'unset'};

    /** Alignment settings */
    display:     ${props => props.$align ? 'block' : 'inline-block'};
    margin-left: ${props => props?.$align === 'right' ? 'auto' : 0 || 
                            props?.$ml || 0};
    margin-right: ${props => props?.$align === 'left' ? 'auto' : 0 || 
                            props?.$ml || 0};

    margin-top: ${props => props?.$mt || 0};
                            
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    transition: all .2s ease-in;
    text-transform: uppercase;
    font-weight: 700;
    font-style: normal;
    line-height: 26px;
    letter-spacing: 2.286px;
    color: ${props => props.$theme.lightMode ? colors.black : colors.white};
    padding-bottom: 1rem;

    border-bottom: solid ${colors.primary} 2px;

    &:hover{
        cursor: pointer;
        color: ${colors.primary};
    }

    width: ${props => props?.w || 'unset'};

    /** Alignment settings */
    display:     ${props => props.$align ? 'block' : 'inline-block'};
    margin-left: ${props => props?.$align === 'right' ? 'auto' : 0 || 
                            props?.$ml || 0};
    margin-right: ${props => props?.$align === 'left' ? 'auto' : 0 || 
                            props?.$ml || 0};

    margin-top: ${props => props?.$mt || 0};
    
    &:disabled{
        color: ${colors.gray};
        border-bottom-color: ${colors.gray};
    }
`;  



export  {Anchor, Button};
