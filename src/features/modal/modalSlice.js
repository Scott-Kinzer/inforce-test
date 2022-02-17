import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: {
    id: 0,
    imageUrl: "none",
    name: "name",
    count: 0,
    size: {
      width: 200,
      height: 200,
    },
    weight: "200g",
    comments: []
  }
}

export const modalSlice = createSlice({
  name: 'modal/modalSlice',
  initialState,
  reducers: {

    addProductToModal: (state, action) => {
      state.modal = action.payload
    },

  }

})


// Action creators are generated for each case reducer function
export const { addProductToModal } = modalSlice.actions;

export default modalSlice.reducer;