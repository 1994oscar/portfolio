import Container from "../assets/styles/components/Container";
import Button from "../assets/styles/components/Generics/Button";
import TextUnderline from "../assets/styles/components/generics/TextUnderline";
import {HeroSection,HeroContent, HeroImage, Image} from "../assets/styles/pages/home/HeroSection";


const Hero = () =>{
    return ( 
        <>
            <HeroSection>
                <Container>
                    <HeroContent>
                        <h1>
                            <span>Nice to meet you! </span>
                            <span>I’m <TextUnderline>Adam Keyes.</TextUnderline></span>
                        </h1>

                        <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
   
                    </HeroContent>
                    <HeroImage>
                        <Image><img src="../public/images/profile-picture.jpg" alt="" /></Image>  
                    </HeroImage>

                    <Button>Contact Me</Button>
                </Container>
            </HeroSection>   
        </>
    );
}

export default Hero; 