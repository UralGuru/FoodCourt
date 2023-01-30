import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import BasketService from '../../services/basket.service';
import {BasketResponse, CafeBasket} from "@constants/types";

const BASKET_STATE: BasketResponse = {
    totalPrice: 0,
    totalProductsCount: 0,
    status: "Empty",
    cafesBaskets: []
};

const cafeBsk: CafeBasket = {
        id: 0,
        name: '',
        products: [
            {
                id: 0,
                name: "",
                description: "",
                avatar: "",
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
                    type: ""
                },
                productTypes: [
                    {
                        id: 0,
                        type: ""
                    }
                ],
                productId: 0,
                count: 0
            }
        ]
    };


export const getBasketThunk = createAsyncThunk<BasketResponse, undefined, { rejectValue: string }>
('basket/getBasket',
    async function (_, {rejectWithValue}) {
        try {
            const response = await BasketService.getBasket();
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

export const cleanBasketThunk = createAsyncThunk<undefined, undefined, { rejectValue: string }>
('basket/cleanBasket',
    async function (_, {rejectWithValue}) {
        try {
            await BasketService.cleanBasket();
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

export const addProductToBasketThunk = createAsyncThunk
('basket/addProduct',
    async function (id: number, {rejectWithValue}) {
        try {
            const response = await BasketService.addProductToBasket(id);
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

export const changeCountProductInBasketThunk = createAsyncThunk
('basket/changeCountProduct',
    async function (product:number[],  {rejectWithValue}) {
        try {
            const response = await BasketService.changeCountProductInBasket(product[0], product[1]);
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

export const deleteProductFromBasketThunk = createAsyncThunk
('basket/deleteProduct',
    async function (id:number,  {rejectWithValue}) {
        try {
            const response = await BasketService.removeProductFromBasket(id);
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

const basketSlice = createSlice({
    name: 'basket',
    initialState: BASKET_STATE,
    reducers: {
        clearBasketState: () => BASKET_STATE,
        deleteProductFromBasket: (state, action) => {
            state.cafesBaskets = state.cafesBaskets.map(cafe => {
                cafe.products = cafe.products.filter(p => p.id !== action.payload);
                return cafe
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.totalPrice = action.payload.totalPrice;
                state.totalProductsCount = action.payload.totalProductsCount;
                state.status = action.payload.status;
                state.cafesBaskets = action.payload.cafesBaskets;
            })
            .addCase(getBasketThunk.rejected, (e) => console.log(e))
            .addCase(cleanBasketThunk.fulfilled, (state, action) => {})
            .addCase(deleteProductFromBasketThunk.fulfilled, (state, action) => {})
            .addCase(addProductToBasketThunk.fulfilled, (state, action) => {})
    },
});

const {actions} = basketSlice;
export const {clearBasketState, deleteProductFromBasket} = actions;
export default basketSlice.reducer;
