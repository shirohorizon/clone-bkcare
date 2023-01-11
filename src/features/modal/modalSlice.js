import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isShow: false,
    name: '',
    data: {},
    innerWidth: '',
    effect: true,
  },
  reducers: {
    showModal(state, children) {
      state.isShow = true;
      state.name = children.payload.name;
      state.data = children.payload.data;
      state.effect = children.payload.effect;
      state.innerWidth = children.payload.innerWidth;
    },
    hideModal(state) {
      state.isShow = false;
      state.name = '';
      state.data = {};
      state.innerWidth = '';
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
