import Footer from "../components/Footer";
import Header from "../components/Header";
import {ThemeContext} from "../context/ThemContext"
import { useThemeSettings } from "../hooks/useThemeSettings";

export const ThemeProvider = ({children}) => {
    
    /**
     * @useThemeSettings {CustomHook}
     */
    const {themeSettings, changeThemeMode} = useThemeSettings();

    return (
        <ThemeContext.Provider value={{themeSettings, changeThemeMode}}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </ThemeContext.Provider>
    );
}