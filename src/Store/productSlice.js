import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//using Object.freeze we cant chnage the status property from outside or ReadOnly
export const Status = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})
const productSlice = createSlice({
    name: 'product',        //register this name to store also

    initialState: {
        data: [],  //product list
        status: Status.IDLE,
    }
    ,

    // we cannot fetch api in redux as it is syn and api call is async so we use Thunk
    reducers: {
        // For thunk method - 1

        // setProducts(state, action) {
        //     state.data = action.payload
        // },

        // setStatus(state, action) {
        //     state.status = action.payload

    },

    //Forthunk method - 2
    //promises k sath khelna 
    //extraReducers is a property
    extraReducers :(builder) =>  {
        builder
        .addCase(fetchProduct.pending, (state,action) => {
            state.status = Status.LOADING;
        })
        .addCase(fetchProduct.fulfilled, (state,action) => {
            state.data = action.payload     //dispatching the action
            state.status = Status.IDLE;
        })
        .addCase(fetchProduct.rejected, (state,action) => {
            state.status = Status.ERROR;
        })
    }

})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//reducers are pure functions means functions which dosent change the outside data
//its purpose is to change the state
//it has two parameters state and action 


// Thunk is a programming term that delays a piece of code

//Thunk Method - 2

export const fetchProduct = createAsyncThunk('productsFetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})

// thunk Method - 1
// export function fetchProduct() {
//     return async function fetchProductThunk(dispatch, getState) {

//         dispatch(setStatus(Status.LOADING))

//         try {
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json()
//             dispatch(setProducts(data))
//             dispatch(setStatus(Status.IDLE))


//         } catch (error) {
//             console.log('error found', error);
//             dispatch(setStatus(Status.ERROR))

//         }
//     }
// }