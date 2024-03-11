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
           <Navigation $footer="true" $theme = {themeSettings} $position = 'relative'>
                   <Container>
                       <NavigationBox $footer="true" $border="true" $theme={themeSettings}>
                          <Logo><span>adamkeyes</span></Logo>
                          <SocialsBox $footer="true">
                               <a href="#!">
                                   <Icon $theme = {themeSettings}>{icons.gitHub}</Icon>
                               </a>

                               <a href="#!">
                                   <Icon $theme = {themeSettings}>{icons.frontEndMentor}</Icon>
                               </a>

                               <a href="#!">
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
   );
}

export default Footer