import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TestScreen from '../screen/TestScreen';
import SplashScreen from '../screen/splash/SplashScreen';
import PhoneNoVerification from '../screen/authScreen/PhoneNoVerification';

const AuthNavigation = () => {
    const Auth =createNativeStackNavigator();
  return (
    <Auth.Navigator>
       {/* <Auth.Screen name="TestScreen"
        component={TestScreen} 
        options={{title:'WhatsAppIcon',headerShown:false}} /> */}
         <Auth.Screen name="SplashScreen" 
         component={SplashScreen} 
         options={{title:'WhatsAppIcon',headerShown:false}} />

         
        <Auth.Screen name="PhoneNoVerification"
        component={PhoneNoVerification} 
        options={{title:'PhoneNoVerification',headerShown:false}} />

        <Auth.Screen name="TestScreen"
        component={TestScreen} 
        options={{title:'WhatsAppIcon',headerShown:false}} />
        
    </Auth.Navigator>

  )
   
}

export default AuthNavigation

const styles = StyleSheet.create({})