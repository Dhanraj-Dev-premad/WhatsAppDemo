import { Pressable, StyleSheet, Text, View } from 'react-native'
    import React from 'react'
    import { SafeAreaView } from 'react-native-safe-area-context'
    
    import MaterialIcons from '@react-native-vector-icons/material-icons'
    import { useNavigation } from '@react-navigation/native'
    
    const PaymentScreen = () => {
        const navigation=useNavigation();
      return (
        <SafeAreaView style={styles.savContainer}>
             <View style={styles.headerContainer}>
              
                    <Pressable
                    onPress={()=>{navigation.goBack()}}>
                        <MaterialIcons
                        name='keyboard-backspace'
                        size={30}
                        color='white' />
                    </Pressable>
                      
                    <Text style={styles.headerTitle}>Payments</Text>
                   
                    
               
              
    
          
          </View>
    
            <View style={styles.mainContainer} >
         
            </View>
    
        </SafeAreaView>
        
      )
    }
    
    export default PaymentScreen
    
    const styles = StyleSheet.create(
        {
         savContainer:{
            backgroundColor:'#075E54'
    
            },
         headerContainer: {
             height: 58,
             backgroundColor: '#075E54',
             flexDirection: 'row',
             alignItems: 'center',
          
             paddingHorizontal: 16,
             gap:10
            },
           
    
    
          
         headerTitle: {
            fontSize: 22,
            fontWeight: '500',
             color: '#FFFFFF',
           },
           subHeaderTitle:{
            fontSize: 16,
           
             color: '#FFFFFF',
    
    
           },
       
        iconButton: {
           padding: 3,
           },
         mainContainer:{
    
            }
        })