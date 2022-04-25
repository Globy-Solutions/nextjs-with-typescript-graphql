import { configureStore } from '@reduxjs/toolkit'
import Product from '@/models'
import cartShopSlice from '@/states/redux/reducers/cartShop.reducer'

export interface AppStore {
  cartShop?: Product[]
}

export const store = configureStore<AppStore>({
  reducer: {
    cartShop: cartShopSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch