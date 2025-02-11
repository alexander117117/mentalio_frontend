import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from '@/entities/user/store/auth/authSlice'
import userFilesSlice from '@/entities/folder/store/userFiles/userFilesSlice'
import publicFilesSlice from '@/entities/folder/store/publicFiles/publicFilesSlice'
import analyticsSlice from '@/app/store/features/analytics/analyticsSlice'
import catalogSlice from '@/features/pagination/store/catalogSlice'

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
      serializableCheck: false, // отключаем проверку сериализуемых значений
    }),
})

export const persistor = persistStore(store)
