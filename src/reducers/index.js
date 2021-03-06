import { combineReducers } from "redux";
import { isLoadingReducer } from "./isLoadingReducer";
import { errorReducer } from "./errorReducer";
import { projectsReducer } from "./projectsReducer";
import { palettesReducer } from "./palettesReducer";
require('dotenv').config();

export const rootReducer = combineReducers({
    isLoading: isLoadingReducer,
    error: errorReducer,
    projects: projectsReducer,
    palettes: palettesReducer
})