import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cartSlice = createSlice({
    name:'cart',

    initialState,

    reducers: {
        add(state,action)  {
            state.push(action.payload)
            /// state refers to initial state default value
            /// here payload will be products sent by dispatch method
        },
        remove(state,action) {
            return state.filter((item) => item.id !== action.payload)
            
        }
    }
    
})

export const {add,remove}  = cartSlice.actions;
export default cartSlice.reducer;

//reducers are pure functions means functions which dosent change the outside data
//its purpose is to change the state
//it has two parameters state and action 