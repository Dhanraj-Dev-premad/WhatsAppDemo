import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import { StatusBar } from 'react-native';

const App = () => {
  return (
     
      <SafeAreaProvider>
       
            <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

       
     
     <RootNavigation/>
    </SafeAreaProvider>

    
    
  );
};

export default App;