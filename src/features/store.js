import { configureStore } from '@reduxjs/toolkit';
import intl from './intl';

export default configureStore({
  reducer: {
    intl,
  },
});
