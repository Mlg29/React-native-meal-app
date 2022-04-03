import {configureStore} from "@reduxjs/toolkit"

import favoriteReducer from "./favourite"

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducer
    }
})