import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailSreen } from '../screens/DetailSreen';
import { MisProyectos } from '../screens/MisProyectos';
import { TabNavigator } from './TabNavigator';


const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detalles" component={DetailSreen} />
            {/* <Stack.Screen name="MisProyectos" component={MisProyectos} />
            AGREGAR COMPONENTE TAB NAVIGATOR y de DETALLES o en el proyecto "Mis PROYECTOS" al hacer click lleva a TabNavigator
            */}
            <Stack.Screen name="MisProyectos" component={TabNavigator} />

        </Stack.Navigator>



    );
};

export default StackNavigator
