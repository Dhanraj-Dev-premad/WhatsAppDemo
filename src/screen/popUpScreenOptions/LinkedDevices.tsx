import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native-unistyles';

const LinkedDevices = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.savContainer} edges={['top']}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="keyboard-backspace" size={26} color="white" />
        </Pressable>
        <Text style={styles.headerTitle}>Linked devices</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.devicesImage}
            source={require('../../assets/image/popUpScreenImages/LinkedDevices.png')}
          />
          <Text
          style={styles.headerInfo}
          >Use WhatsApp on Web, Desktop, and other devices.</Text>
          <Text style={styles.learnMoreText}>Learn more</Text>
           <Pressable
        style={styles.btnContainer}
        >
            <Text style={styles.BtnText}>Link a device</Text>
        </Pressable>

        </View>
        <View
        style={styles.screenBreakView}
        >

        </View>
       

        <View style={styles.statusContainer}>
            <Text style={styles.statusHeading}>Device Status</Text>
            <Text style={styles.statusSubHeading}>Tap a device to log out</Text>

            <View>
                <View style={styles.windowsContainer}>
                   <Image
            style={styles.windowsImage}
            source={require('../../assets/image/popUpScreenImages/Windows.png')}
          />
                </View>
                <View>
                    <Text style={styles.deviceName}>Windows</Text>
                    <Text style={styles.deviceStatus}>Last active today at 12:00 am</Text>
                </View>
            </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default LinkedDevices;

const styles = StyleSheet.create((theme, rt) => ({
  savContainer: {
    flex: 1,
    backgroundColor: '#075E54',
    
  },
  headerContainer: {
    height: 58,
    backgroundColor: '#075E54',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  subHeaderTitle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  iconButton: {
    padding: 3,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 32,
  },
   imageWrapper: {
  width: '100%',
  paddingHorizontal: 20, 
  alignItems: 'center',  
},
  devicesImage: {
   
    resizeMode: 'contain',
  },
 

  statusContainer:{
    paddingHorizontal:20,
    width:'100%'


  },
  statusHeading:{
    marginTop:10,
    fontSize:16,
    color:"#6C7880"


  },
  statusSubHeading:{
    fontSize:20,
    color:"#6C7880"


  },


 
headerInfo: {
  color: 'gray',
  textAlign: 'left',
  alignSelf: 'center', 
  marginTop: 12,
  fontSize:16
},
learnMoreText:{
    fontSize:18,
    color:'#02B099'
    
},
btnContainer:{
    marginTop:20,
    height:55,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor:'#017B6B',
    

    

},
BtnText:{
    color:'white',
    fontSize:18

},
screenBreakView:{
    marginTop:25,
    height:12,
    width:'100%',
    backgroundColor:'#e9ecee'

},
windowsContainer:{
    
},
windowsImage:{

},
 deviceName:{

  },
  deviceStatus:{

  },





}));
