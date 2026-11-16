// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const TestScreen = () => {
//   return (
//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//       <Text>TestScreen</Text>
//     </View>
//   )
// }

// export default TestScreen

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TestScreen() {
  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pickerVisible, setPickerVisible] = useState(false);

  const countryName = country
    ? typeof country.name === 'string'
      ? country.name
      : country.name.common
    : 'United States';

  const callingCode = country?.callingCode?.[0] ?? '1';
  const isReady = phoneNumber.trim().length >= 5;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Top Bar */}
      <View style={styles.header}>
        <View style={styles.headerSide} />
        <Text style={styles.headerTitle}>Phone number</Text>
        <TouchableOpacity
          disabled={!isReady}
          style={styles.headerSide}
          onPress={() => {
            console.log(`+${callingCode}${phoneNumber}`);
          }}
        >
          <Text style={[styles.doneText, isReady && styles.doneTextActive]}>
            Done
          </Text>
        </TouchableOpacity>
      </View>

      {/* Instruction Text */}
      <Text style={styles.subtitle}>
        Please confirm your country code and{'\n'}enter your phone number
      </Text>

      {/* Grouped Form Rows */}
      <View style={styles.formSection}>
        {/* Row 1: Country Name */}
        <TouchableOpacity
          style={styles.countryRow}
          activeOpacity={0.6}
          onPress={() => setPickerVisible(true)}
        >
          <Text style={styles.countryName}>{countryName}</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Row 2: Dial Code & Phone Input */}
        <View style={styles.phoneRow}>
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>+{callingCode}</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="phone number"
            placeholderTextColor="#C7C7CC"
            keyboardType="phone-pad"
            selectionColor="#007AFF"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            autoFocus
          />
        </View>
      </View>

      {/* Hidden Modal Triggered by Row 1 */}
      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag
        withCallingCode
        withFlagButton={false}
        visible={pickerVisible}
        onSelect={(selected) => {
          console.log(selected, "selected");
          
          setCountryCode(selected.cca2);
          setCountry(selected);
          setPickerVisible(false);
        }}
        onClose={() => setPickerVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    paddingHorizontal: 16,
    backgroundColor: '#F7F7F7',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#B2B2B2',
  },
  headerSide: {
    width: 50,
    alignItems: 'flex-end',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  doneText: {
    fontSize: 17,
    color: '#C7C7CC',
  },
  doneTextActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 20,
    color: '#000000',
    marginTop: 22,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  formSection: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E5EA',
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 46,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  countryName: {
    fontSize: 17,
    color: '#007AFF',
  },
  chevron: {
    fontSize: 22,
    color: '#C7C7CC',
    lineHeight: 22,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  codeBox: {
    width: 82,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#E5E5EA',
  },
  codeText: {
    fontSize: 20,
    color: '#000000',
  },
  phoneInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 14,
    fontSize: 20,
    color: '#000000',
  },
});
