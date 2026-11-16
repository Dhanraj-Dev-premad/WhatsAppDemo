import { Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native-unistyles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const inset = useSafeAreaInsets();
    const navigation = useNavigation();   useEffect(() => {
    const timer = setTimeout(() => {
    
        navigation.replace('PhoneNoVerification')

     
    }, 2000); 

  
    return () => clearTimeout(timer);
  }, []);

    
    return (
        <View style={styles.container}>
            
                <Image
                    style={styles.whatsappicon}
                    source={require('../../assets/image/WhatsAppIcon.png')}

                />

        


            <View style={[styles.textContainer,{
                bottom:inset.bottom +50
            }]}>
                <Image
                    style={styles.whatsappTextImage}
                    source={require('../../assets/image/WhatsAppText.png')}


                />

            </View>


        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create((theme, rt) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background

    },
  

  
    whatsappicon: {
       
        height: 100,
        width: 100,


    },
    textContainer: {
        position: "absolute",


    },
    whatsappTextImage: {
        alignSelf: 'center',
        marginTop: 400,

        height: 100,
        width: 100,



    },

}))