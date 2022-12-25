import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import CafeService from '../../services/cafe.service';
import {CafeResponse, CafeState, createCafeBek} from "@constants/types";



const CAFE_STATE: CafeState = {
    foundEntities: [
        {
            id: -1,
            name: '',
            distance: '',
            avatar: '',
            address: '',
            rating: '',
        },
    ],
    totalCount: 0,
    cafeItemProducts: {
        foundEntities: [
            {
                id: 0,
                name: "string",
                description: "string",
                avatar: "string",
                status: "Available",
                price: 0,
                cafeId: 0,
                productVariants: [
                    {
                        id: 0,
                        type: "string"
                    }
                ],
                productTypes: [
                    {
                        id: 0,
                        type: "string"
                    }
                ]
            }
        ],
        totalCount: 0
    }
};


export const getCafesThunk = createAsyncThunk<CafeResponse, undefined, { rejectValue: string }>
('cafe/getCafes',
    async function (_, {rejectWithValue}) {
    try {
        const response = await CafeService.getCafes();
        return response;
    } catch {
        return rejectWithValue('Server Error!');
    }
});
export const createCafeThunk = createAsyncThunk
('cafe/createCafes',
    async function (data: createCafeBek, {rejectWithValue}) {
    try {
         await CafeService.createCafeItem(data);
    } catch {
        return rejectWithValue('Server Error!');
    }
});

export const getCafeItemProductsThunk = createAsyncThunk
('cafe/getItemCafe',
    async function (id: number, {rejectWithValue}) {
        try {
            const response = await CafeService.getCafeItem(id);
            return response;
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

const cafeSlice = createSlice({
    name: 'cafe',
    initialState: CAFE_STATE,
    reducers: {
        clearCafeProductState: (state)=>{
            state.cafeItemProducts = CAFE_STATE.cafeItemProducts
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCafesThunk.fulfilled, (state, action) => {
                state.foundEntities = action.payload.foundEntities;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(getCafesThunk.rejected, (e) => console.log(e))
            .addCase(getCafeItemProductsThunk.fulfilled, (state, action) => {
                state.cafeItemProducts = action.payload
            })
            .addCase(getCafeItemProductsThunk.rejected, (e) => console.log(e));
    },
});

const {actions} = cafeSlice;
export const { clearCafeProductState } = actions;
export default cafeSlice.reducer;
