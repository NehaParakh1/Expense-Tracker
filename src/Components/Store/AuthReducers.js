import { createSlice } from '@reduxjs/toolkit';

const initialAuthState={
    isAuthenticated:false, email:"", token:""
}
const authSlice= createSlice({
    name:'authentication',
    initialState: initialAuthState,
    reducers:{
        login(state,action){
            
            state.isAuthenticated=true;
const email=action.payload.email;
const token=action.payload.token;
localStorage.setItem('email',email)
localStorage.setItem('token',token)

state.email=email;
state.token=token;

        },
logout(state){
    state.isAuthenticated=false;
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    state.email='';
    state.token='';
}
    }
});

export const authActions=authSlice.actions;
export default authSlice.reducer;