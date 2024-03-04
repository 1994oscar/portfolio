import Container from "../assets/styles/components/Container";
import Button from "../assets/styles/components/Generics/Button";
import TextUnderline from "../assets/styles/components/generics/TextUnderline";
import {HeroSection,HeroContent, HeroImage, Image} from "../assets/styles/pages/home/HeroSection";
import { useThemeColor } from "../hooks/useThemeColor";


const Hero = () => {
    const {changeColorTheme, theme} = useThemeColor();
    const {darkMode} = theme;
    
    const colors ={
        white: theme.whiteColor,
        black: theme.blackColor
    }

    //console.log(colors.white)

    return ( 
        <>
            <HeroSection colors = {colors}>
                <Container>
                    <HeroContent colors = {colors}>
                        <h1>
                            <span>Nice to meet you! </span>
                            <span>I’m <TextUnderline>Adam Keyes.</TextUnderline></span>
                        </h1>

                        <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
   
                    </HeroContent>
                    
                    <HeroImage>
                        <Image><img src="/images/profile-picture.jpg" alt="" /></Image>  
                    </HeroImage>

                    <Button>Contact Me</Button>
                </Container>
            </HeroSection>   
        </>
    );
}

export default Hero; 