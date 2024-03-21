import {Navigation, Logo, NavigationBox, SocialsBox} from "../assets/styles/components/Navigation";
import Container from "../assets/styles/components/Container";
import { Icon } from "../assets/styles/components/generics/Icon";
import icons from "../assets/icons";
import {useGetThemeSettings} from "../hooks/useGetThemeSettings";

const Header = () => {

    /**
     * @useGetThemeSettings {Custom Hook}
     */
    const {themeSettings, changeThemeMode} = useGetThemeSettings();

    return (
        <>   
            <Navigation $theme = {themeSettings} >
                    <Container>
                        <NavigationBox>
                           <Logo><span>adamkeyes</span></Logo>
                           <SocialsBox>
                                <a target='_blank' href="https://github.com/1994oscar/" aria-label='Github link'>
                                    <Icon $theme = {themeSettings}>{icons.gitHub}</Icon>
                                </a>

                                <a  target='_blank' href="https://www.frontendmentor.io/profile/1994oscar" aria-label='FrontenMentor link'>
                                    <Icon $theme = {themeSettings}>{icons.frontEndMentor}</Icon>
                                </a>

                                <a target='_blank' href="https://www.linkedin.com/in/oscar-zuniga-mora" aria-label='Linkedin link'>
                                    <Icon $theme = {themeSettings}>{icons.linkedIn}</Icon>
                                </a>

                                <a href="#!" aria-label='Twitter link'>
                                    <Icon $theme = {themeSettings}>{icons.twitter}</Icon>
                                </a>

                                <a onClick={() => changeThemeMode()} aria-label='Darkmode button'>
                                    <Icon $theme = {themeSettings}>{themeSettings.lightMode ? icons.moon : icons.sun}</Icon>
                                </a>
                           </SocialsBox>
                        </NavigationBox>                 
                    </Container>
            </Navigation>  
        </>
    );
}

export default Header;