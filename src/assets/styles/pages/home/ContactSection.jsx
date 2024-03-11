import styled from "styled-components";
import colors from "../../Colors";

const images ={
    oval: 'oval.svg',
    ovalBlack: 'oval-black.svg',
    oval2: 'oval-2.svg',
    oval2Black: 'oval-2-black.svg'
}

const ContactSection = styled.div`
    transition: all .5s ease;
    padding: 8.4rem 0 7.7rem;
    position: relative;
    background-color: ${props => props.$theme.lightMode ? colors.gray : colors.dkGray };

    &::before{
        content: "";
        background-image: url(../public/images/${props => props.$theme.lightMode ? images.oval2Black : images.oval2}); 
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 160px;
        width: 325px;
        position: absolute;
        z-index: 1;
        top: 30rem;
        left: 0;
    }
`;

const ContactBox = styled.div`
    color: ${props => props.$theme.lightMode ? colors.black : colors.white };

    h1{
        margin-bottom: 36px;
    }
`;

const ContactBoxRight = styled(ContactBox)`
      display: flex;
      justify-content: flex-end;
`; 



export {ContactSection, ContactBox, ContactBoxRight}