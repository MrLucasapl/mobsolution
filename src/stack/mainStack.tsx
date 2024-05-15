import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/signIn';
import { Home } from '../screens/home';
import { First } from '../screens/forgotPassword/first';
import { Second } from '../screens/forgotPassword/second';
import { Fourth } from '../screens/forgotPassword/fourth';
import { Third } from '../screens/forgotPassword/third';

const Stack = createStackNavigator()

export const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='First' component={First} />
            <Stack.Screen name='Second' component={Second} />
            <Stack.Screen name='Third' component={Third} />
            <Stack.Screen name='Fourth' component={Fourth} />
        </Stack.Navigator >
    )
}