import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup, Home, SignIn} from '../screens';
import OnboardingScreen from '../screens/OnboardingScreen';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const MianStack = () => {
  const isLogin = useSelector(state => state.UserReducer.login);
  const [isSkip, setSkip] = useState('');
  useEffect(async () => {
    async function fetchData() {
      const isSkip = await AsyncStorage.getItem('intro');
      if (isSkip == 'true') {
        setSkip(true);
        // navigation.navigate('SignIn');
      } else {
        setSkip(false);
      }
    }
    fetchData();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          isLogin ? 'Home' : isSkip ? 'SignIn' : 'onBoardingScreen'
        }>
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
