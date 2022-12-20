import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import BasketService from '../../services/basket.service';
import {BasketResponse} from "@constants/types";

const BASKET_STATE: BasketResponse = {
    totalPrice: 0,
    totalProductsCount: 0,
    status: "Empty",
    cafesBaskets: [
        {
            id: 0,
            name: "string",
            products: [
                {
                    id: 0,
                    name: "string",
                    description: "string",
                    avatar: "string",
                    status: "Available",
                    price: 0,
                    proteins: 0,
                    fats: 0,
                    carbohydrates: 0,
                    weight: 0,
                    kcal: 0,
                    cafeId: 0,
                    productVariants: {
                        id: 0,
                        type: "string"
                    },
                    productTypes: [
                        {
                            id: 0,
                            type: "string"
                        }
                    ],
                    productId: 0,
                    count: 0
                }
            ]
        }
    ]
};


export const getBasketThunk = createAsyncThunk<BasketResponse, undefined, { rejectValue: string }>
('basket/getBasket',
    async function (_, {rejectWithValue}) {
    try {
        const response = await BasketService.getBasket();
        console.log(response)
        return response;
    } catch {
        return rejectWithValue('Server Error!');
    }
});

export const addProductToBasketThunk = createAsyncThunk
('basket/addProduct',
    async function (id: number, {rejectWithValue}) {
        try {
            const response = await BasketService.addProductToBasket(id);
            console.log(response)
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

const basketSlice = createSlice({
    name: 'basket',
    initialState: BASKET_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.totalPrice = action.payload.totalPrice;
                state.totalProductsCount = action.payload.totalProductsCount;
                state.status = action.payload.status;
                state.cafesBaskets = action.payload.cafesBaskets;
            })
            .addCase(getBasketThunk.rejected, (e) => console.log(e))
            // .addCase(getCafeItemProductsThunk.fulfilled, (state, action) => {
            //     state.cafeItemProducts = action.payload
            // })
            // .addCase(getCafeItemProductsThunk.rejected, (e) => console.log(e));
    },
});

const {actions} = basketSlice;
export const { } = actions;
export default basketSlice.reducer;
