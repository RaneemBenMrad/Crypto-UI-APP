import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome,Home } from './src/screens'


const Stack = createNativeStackNavigator
const App = () => {
  return (
 
   <NavigationContainer>
    <Stack.Navigator>
<Stack.Screen name="Welcome" component={Welcome}/>
<Stack.Screen name = "Home" component = {Home}/>
    </Stack.Navigator>
   </NavigationContainer>


  )
}

export default App

const styles = StyleSheet.create({})
