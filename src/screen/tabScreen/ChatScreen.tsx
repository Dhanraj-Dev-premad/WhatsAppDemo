import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
  console.log('entered in ChatScreen');
  
     const navigation = useNavigation();
  return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'white'}}>
      <Text>Home Screen</Text>
      {/* <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button> */}
    </View>

   
   
  )
}

export default ChatScreen

const styles = StyleSheet.create({})