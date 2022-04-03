import {createSlice} from "@reduxjs/toolkit"


const favouriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFunction: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFunction: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        },
    }
})



export const addFavorite = favouriteSlice.actions.addFunction

export const removeFavorite = favouriteSlice.actions.removeFunction

export default favouriteSlice.reducer