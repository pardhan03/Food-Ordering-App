import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name:"cart",
    initialState:{
        items :[],
    },
    reducers:{
        //mutating
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});

export const {addItem,removeItem,clearCart}=Cartslice.actions;

export default Cartslice.reducer;