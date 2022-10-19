import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home';
import AlertDemo from '../AlertDemo';

export default function Rotas() {
return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="AlertDemo" component={AlertDemo}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
}