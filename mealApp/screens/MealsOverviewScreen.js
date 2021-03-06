import React, { useLayoutEffect } from 'react'
import { Text, FlatList, View, StyleSheet } from "react-native"
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { MEALS, CATEGORIES } from "../data/dummy-data"

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

   
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])


    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

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
        <View style={styles.container}>
            <MealList data={displayedMeals} renderMealItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})