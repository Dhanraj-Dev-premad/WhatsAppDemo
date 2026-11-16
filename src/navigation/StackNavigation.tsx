import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CallsScreen from '../screen/tabScreen/CallScreen';
import HomeScreen from '../screen/tabScreen/ChatScreen';
import StatusScreen from '../screen/tabScreen/StatuScreen';
import TabNavigation from './TabNavigation';
import NewGroupScreen from '../screen/popUpScreenOptions/NewGroupScreen';
import NewBroadcastScreen from '../screen/popUpScreenOptions/NewBroadcastScreen';
import LinkedDevices from '../screen/popUpScreenOptions/LinkedDevices';
import StarredMessages from '../screen/popUpScreenOptions/StarredMessages';
import PaymentScreen from '../screen/popUpScreenOptions/PaymentScreen';
import SettingScreen from '../screen/popUpScreenOptions/SettingScreen';

const StackNavigation = () => {
  const Stack= createNativeStackNavigator();
  return (
    <Stack.Navigator
    
    >
       <Stack.Screen
          name="TabNavigation" 
          component={TabNavigation} 
          options={{title:'TabNavigation',headerShown:false}} />
        <Stack.Screen
          name="NewGroupScreen" 
          component={NewGroupScreen} 
          options={{title:'StatusScreen',headerShown:false}} />

        <Stack.Screen
          name="NewBroadcastScreen" 
          component={NewBroadcastScreen} 
          options={{title:'NewBroadcastScreen',headerShown:false}} />
        <Stack.Screen
          name="LinkedDevices" 
          component={LinkedDevices} 
          options={{title:'LinkedDevices',headerShown:false}} />

          <Stack.Screen
          name="StarredMessages" 
          component={StarredMessages} 
          options={{title:'StarredMessages',headerShown:false}} />
          <Stack.Screen
          name="SettingScreen" 
          component={SettingScreen} 
          options={{title:'SettingScreen',headerShown:false}} />
           <Stack.Screen
          name="PaymentScreen" 
          component={PaymentScreen} 
          options={{title:'SettingScreen',headerShown:false}} />




      

    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})