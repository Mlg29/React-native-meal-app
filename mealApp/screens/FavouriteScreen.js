import React from 'react'
import { Text, View, StyleSheet } from "react-native"

import { useDispatch, useSelector } from "react-redux"
import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

function FavouriteScreen() {
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

    const favoriteMeals = MEALS.filter(item => favoriteMealIds.includes(item.id))

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Yo have no favorite meals</Text>
            </View>
        )
    }

    const renderMealItem = (itemData) => {
        const item = itemData.item

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            id: item.id
        }

        return <MealItem
            {...mealItemProps}
        />
    }

    return (
        <View>
            <MealList data={favoriteMeals} renderMealItem={renderMealItem} />
        </View>
    )
}

export default FavouriteScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    }
})