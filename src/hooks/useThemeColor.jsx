import { useState } from "react";
import { colors } from "../assets/styles/Colors";

export const useThemeColor = () => {
    const [theme, setTheme] = useState({
                                            darkMode: false, 
                                            whiteColor: colors.white,
                                            blackColor: colors.black
                                        });
                          
    const changeColorTheme = (event, darkMode) =>{
        event.preventDefault();

        if(!darkMode){
            setTheme({
                ...theme,
                whiteColor: colors.black,
                darkMode: true,
            });

        }else{
            setTheme({
                ...theme,
                whiteColor: colors.white,
                darkMode: false,
            });
        }
    }

    return {theme, changeColorTheme};
}

