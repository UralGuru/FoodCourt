import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CafeService from '../../services/cafe.service';

interface Cafe {
  id: number;
  name: string;
  distance: string;
  avatar: string;
  address: string;
}

interface CafeResponse {
  foundEntities: Cafe[];
  totalCount: 0;
}

const CAFE_STATE: CafeResponse = {
  foundEntities: [
    {
      id: -1,
      name: '',
      distance: '',
      avatar: '',
      address: '',
    },
  ],
  totalCount: 0,
};

export const getCafesThunk = createAsyncThunk<
  CafeResponse,
  undefined,
  { rejectValue: string }
>('cafe/getCafes', async function (_, { rejectWithValue }) {
  try {
    const response = await CafeService.getCafes();
    return response;
  } catch {
    return rejectWithValue('Server Error!');
  }
});

const cafeSlice = createSlice({
  name: 'cafe',
  initialState: CAFE_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCafesThunk.fulfilled, (state, action) => {
        state.foundEntities = action.payload.foundEntities;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCafesThunk.rejected, (e) => console.log(e));
  },
});

const { actions } = cafeSlice;
export default cafeSlice.reducer;
