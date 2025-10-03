import { configureStore } from '@reduxjs/toolkit';
import { documentReducer } from '@prabhath-tharaka/html-editor';

const store = configureStore({
  reducer: {
    document: documentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['document/updateContent'],
        ignoredPaths: ['document.pages.content']
      }
    })
});

export default store;
