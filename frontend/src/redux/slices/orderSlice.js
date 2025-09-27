import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to fetch all orders of the logged-in user
export const fetchUserOrders = createAsyncThunk(
  "orders/fetchUserOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/orders/my-orders`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async Thunk to fetch details of a specific order by ID
export const fetchOrderDetails = createAsyncThunk(
  "orders/fetchOrderDetails",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Orders Slice
const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    orderDetails: null,
    loadingOrders: false,
    loadingOrderDetails: false,
    errorOrders: null,
    errorOrderDetails: null,
  },
  reducers: {
    // optional synchronous reducers if needed
    clearOrderDetails: (state) => {
      state.orderDetails = null;
      state.errorOrderDetails = null;
    },
  },
  extraReducers: (builder) => {
    // fetchUserOrders
    builder
      .addCase(fetchUserOrders.pending, (state) => {
        state.loadingOrders = true;
        state.errorOrders = null;
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.loadingOrders = false;
        state.orders = action.payload;
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.loadingOrders = false;
        state.errorOrders = action.payload;
      });

    // fetchOrderDetails
    builder
      .addCase(fetchOrderDetails.pending, (state) => {
        state.loadingOrderDetails = true;
        state.errorOrderDetails = null;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loadingOrderDetails = false;
        state.orderDetails = action.payload;
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loadingOrderDetails = false;
        state.errorOrderDetails = action.payload;
      });
  },
});

export const { clearOrderDetails } = ordersSlice.actions;

export default ordersSlice.reducer;
