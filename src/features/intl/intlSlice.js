import { createSlice } from '@reduxjs/toolkit';

import { LOCALES, vn as message_vn, en as message_en } from '~/translations';
import { flattenMessages } from '~/utils/flattenMessages';

const messages = {
  [LOCALES.ENGLISH]: flattenMessages(message_en),
  [LOCALES.VIETNAM]: flattenMessages(message_vn),
};

export const intlSlice = createSlice({
  name: 'intl',
  initialState: {
    language: LOCALES.VIETNAM,
    message: messages[LOCALES.VIETNAM],
  },
  reducers: {
    setLanguage(state, { payload }) {
      state.language = payload;
      state.message = messages[payload];
    },
  },
});

export const { setLanguage } = intlSlice.actions;
export default intlSlice.reducer;
