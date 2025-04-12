import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from '@/entities/user/model/store/auth/authSlice'
import userFilesSlice from '@/entities/folder/model/store/userFiles/userFilesSlice'
import analyticsSlice from '@/app/store/features/analytics/analyticsSlice'
import catalogSlice from '@/entities/folder/model/store/catalog/catalogSlice'
import userTopicSlice from '@/entities/topic/model/store/userTopicSlice'
import { testInteractive } from '@/entities/testInteractive/store/slice'
import { testAnalyticsReducer } from '@/entities/testAnalytics/testAnalyticsSlice'
import { chosenAvatarReducer } from '@/features/chosenAvatar/chosenAvatarSlice'

const rootReducer = combineReducers({
  userFiles: userFilesSlice,
  userTopic: userTopicSlice,
  auth: authReducer,
  analytics: analyticsSlice,
  catalog: catalogSlice,
  testInteractive: testInteractive,
  testAnalyticsSlice: testAnalyticsReducer,
  chosenAvatar: chosenAvatarReducer,
})
type RootReducerState = ReturnType<typeof rootReducer>

const persistConfig: PersistConfig<RootReducerState> = {
  key: 'root',
  storage,
  whitelist: ['auth', 'testInteractive', 'userFiles', 'userTopic'],
}

const persistedReducer = persistReducer<RootReducerState>(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
