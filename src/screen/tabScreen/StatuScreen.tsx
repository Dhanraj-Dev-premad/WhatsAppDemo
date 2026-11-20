import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const StatuScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      {/* <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button> */}
    </View>
  )
}

export default StatuScreen



const styles = StyleSheet.create({})