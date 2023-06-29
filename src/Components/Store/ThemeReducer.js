import { createSlice } from "@reduxjs/toolkit";

const initialThemeState={premium:false, themeMode:'light'}

const themeSlice=createSlice({
    name:'theme',
    initialState:initialThemeState,
    reducers:{
        changeTheme(state, action) {
            state.themeMode = state.themeMode === "light" ? "dark" : "light";
          },
          activePremium(state, action) {
            state.premium = action.payload;
          },
    }
})

export const themeActions=themeSlice.actions;
export default themeSlice.reducer;