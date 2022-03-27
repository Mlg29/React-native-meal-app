import React from 'react'
import {Text, View, StyleSheet} from "react-native"

function FavouriteScreen() {
  return (
   <View style={styles.container}>
       <Text style={styles.title}>Not Available</Text>
   </View>
  )
}

export default FavouriteScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    }
})