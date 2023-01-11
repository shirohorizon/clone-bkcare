import { configureStore } from '@reduxjs/toolkit';
import intl from './intl';
import modal from './modal';

export default configureStore({
  reducer: {
    intl,
    modal,
  },
});
