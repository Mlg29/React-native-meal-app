import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from "./screens/MealDetailScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()


const DrawerNavigation = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#351401'
    },
    headerTintColor: 'white',
    sceneContainerStyle: {
      backgroundColor: '#3f2f25'
    },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e4baa1'

  }}>
    <Drawer.Screen
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
      }} name='Categories' component={CategoryScreen} />
    <Drawer.Screen
      options={{
        title: 'Favourites',
        drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
      }} name='Favourites' component={FavouriteScreen} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#351401'
          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: '#3f2f25'
          }
        }}>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigation}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name='MealDetail'
            options={{
              title: 'About the meal'
            }}
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
