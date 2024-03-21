import icons from "../assets/icons";
import Container from "../assets/styles/components/Container";
import { Logo, Navigation, NavigationBox, SocialsBox } from "../assets/styles/components/Navigation"
import { Icon } from "../assets/styles/components/generics/Icon";
import { useGetThemeSettings } from "../hooks/useGetThemeSettings";

const Footer = () => {
   /**
     * @useGetThemeSettings {Custom Hook}
     */
   const {themeSettings, changeThemeMode} = useGetThemeSettings();

   return (   
           <Navigation as='footer' $footer="true" $theme = {themeSettings} $position = 'relative'>
                   <Container>
                       <NavigationBox $footer="true" $border="true" $theme={themeSettings}>
                          <Logo><span>adamkeyes</span></Logo>
                          <SocialsBox $footer="true">
                               <a target='_blank' href="https://github.com/1994oscar/" aria-label='Github link'>
                                   <Icon $theme = {themeSettings}>{icons.gitHub}</Icon>
                               </a>

                               <a target='_blank' href="https://www.frontendmentor.io/profile/1994oscar" aria-label='FrontenMentor link'>
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
   );
}

export default Footer