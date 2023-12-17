import { createSlice } from "@reduxjs/toolkit";
  
const chatSlice = createSlice({
    name: "chatSlice",
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state, action)=>{
            if( state.message.length === 30) state.message.shift()
            state.message.push(action.payload)
        }
    }
})
export const {addMessage} = chatSlice.actions
export default chatSlice.reducer;