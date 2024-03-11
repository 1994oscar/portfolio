import Container from "../assets/styles/components/Container";
import { Anchor } from "../assets/styles/components/Generics/Button";
import TextUnderline from "../assets/styles/components/generics/TextUnderline";
import {HeroSection,HeroContent, HeroImage, Image} from "../assets/styles/pages/home/HeroSection";
import { useGetThemeSettings } from "../hooks/useGetThemeSettings";

const Hero = () => {   
    const {themeSettings} = useGetThemeSettings();

    const profileImages = {
        black: '../images/profile-picture.jpg',
        white: '../images/profile-picture-white.jpg'
    }

    return ( 
        <>
            <HeroSection $theme = {themeSettings}>
                <Container>
                    <HeroContent $theme = {themeSettings}>
                        <h1>
                            <span>Nice to meet you! </span>
                            <span>I’m <TextUnderline>Adam Keyes.</TextUnderline></span>
                        </h1>

                        <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
   
                    </HeroContent>
                    
                    <HeroImage>
                        <Image $theme = {themeSettings}><img src={themeSettings.lightMode ? profileImages.white : profileImages.black} alt="" /></Image>  
                    </HeroImage>

                    <Anchor $theme = {themeSettings}>Contact Me</Anchor>
                </Container>
            </HeroSection>   
        </>
    );
}

export default Hero; 