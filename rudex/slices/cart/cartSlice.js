import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    carts: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    NewCart: {},
    getOne: {},
}

// 1. all cart

export const getAllcart = 
createAsyncThunk('cart/getall', async (_,{rejectWithValue}) =>{
    try {
      const {data} = await axios.get('http://localhost:7000/api/Cart/all')
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  })

    // 2. POST REQUEST -> NEW PRODUCTS
    export const newcart = createAsyncThunk(
        'cart/create',
        async (cartData, { rejectWithValue, getState }) => {
          try {
            const token = getState().auth.user.token;
    
            console.log(token)
      
            const { data } = await axios.post(
              'http://localhost:7000/api/Cart/',
              {
                qty: cartData.qty,
                subId: cartData.subId,
              
              },
      
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }
      );

      export const getOnecart = createAsyncThunk(
        'cart/getOne',
        async (cartId, { rejectWithValue }) => {
          try {
            console.log(cartId)
            const { data } = await axios.get(
              `http://localhost:7000/api/Cart/getone/${cartId}`
            );
      
            console.log(data)
            return data
          } catch (error) {
            console.log(error)
            return rejectWithValue(error);
          }
        }
      );
    

      export const deletecart = createAsyncThunk(
        '/cart/delete',
        async (cartId, { rejectWithValue,getState }) => {
          try {
            const token = getState().auth.user.token;
      
            console.log(cartId)
            const { data } = await axios.delete(
              `http://localhost:7000/api/Cart/delete/${cartId}`,
      
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log(data);
            
          } catch (error) {
            console.log(error);
            return rejectWithValue(error);
          }
        }
      );


      // API REQ -> EDITING product

export const editcart = createAsyncThunk(
    'cart/update',
    async (datas, { rejectWithValue,getState }) => {
      try {
        const token = getState().auth.user.token;
  
        console.log(token)
        const { data } = await axios.put(
          `http://localhost:7000/api/Cart/update/${datas.cartId}`,
          {
            qty: cartData.qty,
            subId: cartData.subId,
          },
  
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  console.log(data)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  const cartSlice = createSlice({
    name: 'cart slice',
    initialState,
    reducers:{
      reset: (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.NewCart = {};
      },
    },

    extraReducers:(builder) => {
        builder .addCase(getAllcart.pending,(state,action) =>{
          state.isLoading = true;
          state.isError = false;
          state.isSuccess = false;
          state.carts = [];
        })
    
        builder .addCase(getAllcart.fulfilled,(state,action) =>{
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.carts = action.payload;
        })
    
        .addCase(getAllcart.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.carts = [];
          state.errorMessage = 'Something went wrong please try again...';
        })

        // =================

        builder .addCase(getOnecart.pending,(state,action) =>{
          state.isLoading = true;
          state.isError = false;
          state.isSuccess = false;
          state.NewCart = [];
        })
    
        builder .addCase(getOnecart.fulfilled,(state,action) =>{
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.NewCart = action.payload;
        })
    
        .addCase(getOnecart.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.NewCart = [];
          state.errorMessage = 'Something went wrong please try again...';
        })
// =======================
.addCase(deletecart.pending,(state,action) =>{
  state.isLoading = true;
  state.isError = false;
  state.isSuccess = false;
  state.carts = [];
})

builder .addCase(deletecart.fulfilled,(state,action) =>{
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.carts =  action.payload;
})

.addCase(deletecart.rejected, (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.carts = [];
  state.errorMessage = 'Something went wrong please try again...';
})
// ====================================
.addCase(editcart.pending,(state,action) =>{
  state.isLoading = true;
  state.isError = false;
  state.isSuccess = false;
  state.carts = [];
})

builder .addCase(editcart.fulfilled,(state,action) =>{
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.carts =  action.payload;
})

.addCase(editcart.rejected, (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.carts = [];
  state.errorMessage = 'Something went wrong please try again...';
})
    
      }
})

export const { reset } = cartSlice.actions;
export default cartSlice;