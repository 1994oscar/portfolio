import { useContext } from "react";
import { ThemeContext } from "../context/ThemContext";

export const useGetThemeSettings = () => {
    /**
     * @useContext
     * @ThemeSettings
     * @changeThemeMode {(Hook:useState) => themeSettings:Object}
    */
    const {themeSettings, changeThemeMode} = useContext(ThemeContext);

    return {themeSettings, changeThemeMode}
}