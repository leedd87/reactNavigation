import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/HomeScreen';
import StackNavigator from './src/navigator/StackNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
};

export default App;
