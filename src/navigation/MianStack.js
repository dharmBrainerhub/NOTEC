import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup, Home, SignIn} from '../screens';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const MianStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoardingScreen">
        <Stack.Screen
          name="onBoardingScreen"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MianStack;
