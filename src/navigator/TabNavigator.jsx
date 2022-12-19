
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MisProyectos } from '../screens/MisProyectos';
import { Tab1Screen } from '../screens/Tab1Screen';
import { FilterScreen } from '../screens/Tab2Screen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            {/*MAPAAAA SCREEN o REGISTROS SCREEN */}
            <Tab.Screen name="Mapa" component={MisProyectos} />
            {/*FILTERRR SCREEN */}
            <Tab.Screen name="Filtros" component={FilterScreen} />
        </Tab.Navigator>
    );
}