import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';

const store = configureStore({
  redeucer: {
    ui: uiSlice.redeucer
  }
});

export default store;