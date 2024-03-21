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
                                <a target='_blank' href="https://github.com/1994oscar/">
                                    <Icon $theme = {themeSettings}>{icons.gitHub}</Icon>
                                </a>

                                <a  target='_blank' href="https://www.frontendmentor.io/profile/1994oscar">
                                    <Icon $theme = {themeSettings}>{icons.frontEndMentor}</Icon>
                                </a>

                                <a target='_blank' href="https://www.linkedin.com/in/oscar-zuniga-mora">
                                    <Icon $theme = {themeSettings}>{icons.linkedIn}</Icon>
                                </a>

                                <a href="#!">
                                    <Icon $theme = {themeSettings}>{icons.twitter}</Icon>
                                </a>

                                <a role="button" onClick={() => changeThemeMode()}>   
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