import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TestScreen from '../screen/TestScreen';

const AuthNavigation = () => {
    const Auth =createNativeStackNavigator();
  return (
    <Auth.Navigator>
        <Auth.Screen
        name="TestScreen" component={TestScreen} 
        />
        
    </Auth.Navigator>

  )
   
}

export default AuthNavigation

const styles = StyleSheet.create({})