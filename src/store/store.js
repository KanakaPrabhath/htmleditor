import { configureStore } from '@reduxjs/toolkit';
import documentReducer from './slices/documentSlice';

/**
 * Configures the Redux store for the multi-page editor
 * Manages document state
 */
const store = configureStore({
  reducer: {
    document: documentReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable values in editor state
        ignoredActions: ['document/updatePageContent', 'document/updatePages'],
        ignoredPaths: ['document.pages']
      }
    })
});

export default store;