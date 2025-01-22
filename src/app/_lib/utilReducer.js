import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product:null
};
const utilSlice=createSlice({
    
    name:"props",
    initialState,
    reducers:{
        setProductData(state,action){
            console.log(action);
            state.product=action.payload;
            console.log(action.payload);
        }
    
    }
});
export const {setProductData}=utilSlice.actions;
export default utilSlice.reducer;