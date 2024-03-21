import Container from "../assets/styles/components/Container";
import TextUnderline from "../assets/styles/components/generics/TextUnderline";
import {HeroSection, HeroContent, HeroImage, Image, HeroImageMobile} from "../assets/styles/pages/home/HeroSection";
import { useGetThemeSettings } from "../hooks/useGetThemeSettings";
import {Button} from "../assets/styles/components/generics/Button.jsx";

const Hero = () => {   
    const {themeSettings} = useGetThemeSettings();

    const profileImages = {
        black: '/images/profile-picture.jpg',
        white: '/images/profile-picture-white.jpg',
        mobile: '/images/image-profile-mobile.png'
    }

    return ( 
        <>
            <HeroSection $theme = {themeSettings}>
                <Container>

                    <HeroImageMobile>
                        <Image $theme = {themeSettings}><img src={profileImages.mobile} alt="" /></Image>
                    </HeroImageMobile>

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

                    <Button as='a' href="#contact" $theme = {themeSettings}>Contact Me</Button>
                </Container>
            </HeroSection>   
        </>
    );
}

export default Hero; 