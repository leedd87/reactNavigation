import React from 'react'
import { View, Text, Button } from 'react-native'

export const DetailSreen = ({ navigation }) => {
    return (
        <View>
            <Text>DetailSreen</Text>
            <Button title='Mis Proyectos' onPress={() => { navigation.navigate('MisProyectos') }} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}
