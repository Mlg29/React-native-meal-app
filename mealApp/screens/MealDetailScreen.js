import React, {  useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import IconButton from '../components/IconButton'
import List from '../components/MealData.js/List'
import Subtitle from '../components/MealData.js/Subtitle'
import MealDetailsComponent from '../components/MealDetailsComponent'
import { MEALS } from "../data/dummy-data"

function MealDetailScreen({ route, navigation }) {

    const detailId = route.params.detailId

    const selectedMeal = MEALS.find(meal => meal.id === detailId)

    const handleButtonPressHandler = () => {
 console.log("hello")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={handleButtonPressHandler}/>
            }
        })
    }, [navigation, handleButtonPressHandler])
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: selectedMeal.imageUrl
                }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>

            <MealDetailsComponent textStyle={styles.detailText} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredient</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Step</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})