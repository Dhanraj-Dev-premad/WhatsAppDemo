import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthNavigation from './AuthNavigation'
import { NavigationContainer } from '@react-navigation/native'

const RootNavigation = () => {
  return (

    <NavigationContainer>
             <AuthNavigation/>


    </NavigationContainer>
   
   
  )
}

export default RootNavigation

const styles = StyleSheet.create({})