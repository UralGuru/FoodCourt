import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ProfileService from "../../services/profile.service";

const PROFILE_STATE = {
    name: '',
    email: ''
};

export const getProfileThunk = createAsyncThunk
('profile/getProfile',
    async function (_,  {rejectWithValue}) {
        try {
            return await ProfileService.getProfile();
        } catch {
            return rejectWithValue('Server Error!');
        }
    });

const orderSlice = createSlice({
    name: 'profile',
    initialState: PROFILE_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfileThunk.fulfilled, (state, action) => {
                state.name = action.payload.name;
                state.email = action.payload.email;
            })
            },

});

const {actions} = orderSlice;
export const {} = actions;
export default orderSlice.reducer;
