import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function Rotas() {
    
return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
    name="Home"
    component={Home}
    />
    </Stack.Navigator>
    </NavigationContainer>
    );
}