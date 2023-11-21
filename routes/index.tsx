import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParams } from "../components/types";
import Home from "../components/Home";
import Detail from "../components/Detail";
const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: 'rgba(7,26,93,255)',
    },
    headerTitleStyle: {
        color: '#fff',
    },
};
const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Home} 
                options={routeScreenDefaultOptions}
                />
                <Stack.Screen 
                name="Detail" 
                component={Detail} 
                options={routeScreenDefaultOptions}
                />
                </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;