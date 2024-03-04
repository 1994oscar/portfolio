import { configureStore } from "@reduxjs/toolkit";
import changeColorReducer from "../features/theme/changeColor";


export default configureStore({
    reducer: {
        changeColor: changeColorReducer,
    },
});