import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import articleSlice from './slices/article/slice';
import scrapSlice from './slices/scrap/slice';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const logger = createLogger();
const rootReducer = combineReducers({
	article: articleSlice.reducer,
	scrap: scrapSlice.reducer,
});

const initialState = {};

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['scrap'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
					'article/setFilterData',
				],
				ignoredActionPaths: ['payload.date', 'article.filterDate'],
			},
		}),
	// }).concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState: initialState,
	enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkApiType = {
	state: RootState;
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
