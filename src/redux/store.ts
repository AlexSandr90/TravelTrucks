import { configureStore } from '@reduxjs/toolkit';
import {
  PAUSE,
  FLUSH,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import campersReducer from './campers/slice';
import favoritesReducer from './favorites/slice';
import filtersReducer from './filters/slice';

const persistConfig = {
  key: 'favorites',
  storage,
};

const persistFavoritesReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: persistFavoritesReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
