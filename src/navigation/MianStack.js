import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup, Home, SignIn} from '../screens';
import OnboardingScreen from '../screens/OnboardingScreen';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const MianStack = () => {
  const isLogin = useSelector(state => state.UserReducer.login);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLogin ? 'Home' : 'onBoardingScreen'}>
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
