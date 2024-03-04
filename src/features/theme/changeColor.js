import {createSlice} from '@reduxjs/toolkit'
import { colors } from "../../assets/styles/Colors"; 

export const changeColorSlice = createSlice({

    name: 'color',
    initialState: {
        darkMode: false, 
        whiteColor: colors.white,
        blackColor: colors.black
    },

    reducers: {

        changeColorTheme: (state) =>{
            console.log(state)
            //return state.darkMode = true;
            // if(!state.darkMode){  
            //     state.whiteColor = colors.black;
            //     state.darkMode = true;
            // }else{
            //     state.whiteColor = colors.white;
            //     state.darkMode = false;           
            // }
        },
    },
});

export const {changeColorTheme} = changeColorSlice.actions;

export default changeColorSlice.reducer;