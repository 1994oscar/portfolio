import { useState } from "react";

export const useThemeSettings = () => {
    
    const settings = {
        lightMode: false,
    }

    const [themeSettings, setThemeSettings] = useState(settings);

    const changeThemeMode = () => {

        if(themeSettings.lightMode){
            setThemeSettings({
                ...themeSettings,
                lightMode: false
            });
        }else{
            setThemeSettings({
                ...themeSettings,
                lightMode: true
            });
        }

    }

    return {themeSettings, changeThemeMode};
}

