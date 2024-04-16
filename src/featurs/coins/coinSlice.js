import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";


const coinSlice = createSlice({
    name : "coins",
    initialState : {
        trending : [],
        coin : [],
        isLoding : false,
        isSuccess : false,
        isError : false,
    },

    reducers :{} ,
    extraReducers : (builder) => {
        builder 
        .addCase(getCoin.pending, (state, action)=> {
            state.isLoding = true;
            state.isSuccess = false;
            state.isError = false
        })  .addCase(getCoin.fulfilled, (state, action)=> {
            state.isLoding = false;
            state.isSuccess = true;
            state.isError = false
            state.trending = action.payload
        })  .addCase(getCoin.rejected, (state, action)=> {
            state.isLoding = false;
            state.isSuccess = false;
            state.isError = true
        }) .addCase(CoinData.pending, (state, action)=> {
            state.isLoding = true;
            state.isSuccess = false;
            state.isError = false
        })  .addCase(CoinData.fulfilled, (state, action)=> {
            state.isLoding = false;
            state.isSuccess = true;
            state.isError = false
            state.coin = action.payload
        })  .addCase(CoinData.rejected, (state, action)=> {
            state.isLoding = false;
            state.isSuccess = false;
            state.isError = true
        })
    }

})

export default coinSlice.reducer ;



export const getCoin = createAsyncThunk("FETCH/TRENDING", async()=> {
   try {
  return await coinService.fetchTrendingCoin();

   } catch (error) {
    console.log(error)
   }
})

export const CoinData = createAsyncThunk("FETCH/COIN", async(id)=> {
    try {
   return await coinService.fetchCoin(id);
 
    } catch (error) {
     console.log(error)
    }
 })


