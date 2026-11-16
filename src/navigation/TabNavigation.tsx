import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, Users, Search, MoreVertical } from 'lucide-react-native';
import ChatScreen from '../screen/tabScreen/ChatScreen';
import StatuScreen from '../screen/tabScreen/StatuScreen';
import CallScreen from '../screen/tabScreen/CallScreen';
import CommunityScreen from '../screen/tabScreen/CommunityScreen';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();
  const [showOptions, setShowOptions] = useState(false);

  const options = () => {
    return (
      <View
      style={styles.optionContainer}>
        <Text
        style={styles.TextScreen}
          
          onPress={() => {
            setShowOptions(false);
            navigation.navigate('NewGroupScreen');
          }}
        >
          New Group
        </Text>
        <Text
          style={styles.TextScreen}        
          onPress={() => {
            setShowOptions(false);
            navigation.navigate('NewBroadcastScreen');
          }}
        >
          New broadcast
        </Text>
        <Text
           style={styles.TextScreen}
          onPress={() => {
            setShowOptions(false);
            navigation.navigate('LinkedDevices');
          }}
        >
          Linked devices
        </Text>
        <Text
           style={styles.TextScreen}
          onPress={() => {
            setShowOptions(false);
            navigation.navigate('StarredMessages');
          }}
        >
          Starred Messages
        </Text>
        <Text
          style={styles.TextScreen}
          onPress={() => {
            setShowOptions(false);
            navigation.navigate('PaymentScreen');
          }}
        >
          Payments
        </Text>
        <Text
          style={styles.TextScreen}
          onPress={() => {
            setShowOptions(false);
            navigation.navigate('SettingScreen');
          }}
        >
          Settings
        </Text>
      </View>
    );
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setShowOptions(false)}>
        <View style={{ flex: 1 }}>
          {/* WhatsApp Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>WhatsApp</Text>
            <View style={styles.headerActions}>
              <Pressable style={styles.iconButton}>
                <Camera size={23} color="white" />
              </Pressable>
              <Pressable style={styles.iconButton}>
                <Search size={23} color="white" />
              </Pressable>
              <Pressable
                style={styles.iconButton}
                onPress={() => setShowOptions(!showOptions)}
              >
                <MoreVertical size={23} color="white" />
              </Pressable>
            </View>
          </View>

          {showOptions && options()}

          <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={{
              tabBarStyle: {
                backgroundColor: '#075E54',
                elevation: 0,
              },
              tabBarActiveTintColor: '#FFFFFF',
              tabBarInactiveTintColor: '#B8D5D0',
              tabBarIndicatorStyle: {
                backgroundColor: '#FFFFFF',
                height: 3,
                borderRadius: 3,
              },
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                textTransform: 'none',
              },
              tabBarItemStyle: {
                height: 48,
              },
              tabBarPressColor: '#128C7E',
              swipeEnabled: true,
              animationEnabled: true,
            }}
          >
            <Tab.Screen
              name="Community"
              component={CommunityScreen}
              options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ color }) => <Users size={22} color={color} />,
              }}
            />
            <Tab.Screen name="Chats" component={ChatScreen} />
            <Tab.Screen name="Status" component={StatuScreen} />
            <Tab.Screen name="Calls" component={CallScreen} />
          </Tab.Navigator>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075E54',
  },
  optionContainer:{
     position: 'absolute',
          top: 100,
          right: 16,
          zIndex: 1,
          elevation: 10,
          height: 260,
          width: 190,
          backgroundColor: '#2DB099',
          gap: 20,
          padding: 20,
          borderRadius: 8,

  },
  TextScreen:{
    fontSize: 16,
     color: 'white'

  },

  headerContainer: {
    height: 58,
    backgroundColor: '#075E54',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
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
});
