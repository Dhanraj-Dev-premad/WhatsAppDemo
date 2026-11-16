import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Search } from 'lucide-react-native'
import MaterialIcons from '@react-native-vector-icons/material-icons'
import { useNavigation } from '@react-navigation/native'

const NewBroadcastScreen = () => {
    const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.savContainer}>
         <View style={styles.headerContainer}>
            <View style={styles.box1}>
                <Pressable
                onPress={()=>{navigation.goBack()}}>
                    <MaterialIcons
                    name='keyboard-backspace'
                    size={30}
                    color='white' />
                </Pressable>
                  
            <View>
                <Text style={styles.headerTitle}>New Broadcast</Text>
                <Text style={styles.subHeaderTitle}>0 of100 selected</Text>

            </View>
             
                
            </View>
          

        <View style={styles.headerActions}>
         

          <Pressable style={styles.iconButton}>
            <Search size={23} color="white" />
          </Pressable>

        
        </View>
      </View>

        <View style={styles.mainContainer} >
     
        </View>

    </SafeAreaView>
    
  )
}

export default NewBroadcastScreen

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
         justifyContent: 'space-between',
         paddingHorizontal: 16,
        },
        box1:{
            flexDirection:'row',
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
    headerActions: {
       flexDirection: 'row',
       alignItems: 'center',
       gap: 20,
       },
    iconButton: {
       padding: 3,
       },
     mainContainer:{

        }
    })