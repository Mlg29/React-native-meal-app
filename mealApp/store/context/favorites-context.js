import { createContext, useState } from "react"



const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
})


function FavoriteContextProvider({ children }) {

    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId !== id))
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}


export default FavoriteContextProvider