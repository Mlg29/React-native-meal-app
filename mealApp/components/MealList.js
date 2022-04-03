import React from 'react'
import { FlatList, StyleSheet } from "react-native"

function MealList({data, renderMealItem}) {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    )
}

export default MealList