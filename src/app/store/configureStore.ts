import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from '@/entities/user/model/store/auth/authSlice'
import userFilesSlice from '@/entities/folder/model/store/userFiles/userFilesSlice'
import publicFilesSlice from '@/entities/folder/model/store/publicFiles/publicFilesSlice'
import analyticsSlice from '@/app/store/features/analytics/analyticsSlice'
import catalogSlice from '@/features/pagination/model/store/catalogSlice'

interface AuthPersistConfig extends PersistConfig<ReturnType<typeof authReducer>> {
  whitelist: string[]
}

const persistConfig: AuthPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    userFiles: userFilesSlice,
    publicFiles: publicFilesSlice,
    auth: persistedReducer,
    analytics: analyticsSlice,
    catalog: catalogSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
