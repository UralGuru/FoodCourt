import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {OrderResponse, OrderState, OrderStatus, SearchResponseOfOrderResponse} from "@constants/types";
import OrderService from "../../services/order.service";

const ORDER_STATE: OrderState = {
    totalCount: 0,
    foundEntities: [],
    orderItem: {
        id: 0,
        status: OrderStatus.InWork,
        totalPrice: 0,
        creationTime: '',
        comment: '',
        cafeName: '',
        cafeId: 0,
    }
};


export const createOrderThunk = createAsyncThunk<OrderResponse, undefined, { rejectValue: string }>
('basket/getOrders',
    async function (_, {rejectWithValue}) {
        try {
            const response = await OrderService.createOrder();
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

export const getOrderThunk = createAsyncThunk<SearchResponseOfOrderResponse>
('basket/getOrders',
    async function (_, {rejectWithValue}) {
        try {
            const response = await OrderService.getOrders();
            console.log(response)
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

export const getItemOrderThunk = createAsyncThunk
('basket/getItemOrder',
    async function (id:number,  {rejectWithValue}) {
        try {
            const response = await OrderService.gerItemOrder(id);
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

const orderSlice = createSlice({
    name: 'order',
    initialState: ORDER_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrderThunk.fulfilled, (state, action) => {
                state.totalCount = action.payload.totalCount;
                state.foundEntities = action.payload.foundEntities;
            })
            .addCase(getItemOrderThunk.fulfilled, (state, action) => {
                // state.orderItem = action.payload;
                // state.totalCount;
                // state.foundEntities;
                console.log('i am here')
            })
            },

});

const {actions} = orderSlice;
export const {} = actions;
export default orderSlice.reducer;
