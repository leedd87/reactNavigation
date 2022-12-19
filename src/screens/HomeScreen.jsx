import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='Detalles' onPress={() => { navigation.navigate('Detalles') }} />
        </View>
    );
};
