import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native"
import {useNavigation} from "@react-navigation/native"
import MealDetailsComponent from './MealDetailsComponent';



function MealItem({id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate('MealDetail', {detailId: id})
    }

    return (
        <View style={styles.mealItem}>
            <Pressable 
            android_ripple={{color: '#ccc'}}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPress={onPressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{
                            uri: imageUrl
                        }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                   <MealDetailsComponent duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>

        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container: {

    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowColor: 'black',
        overflow: Platform.OS === 'andriod' ? 'hidden' : 'visible'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 8
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    }
})