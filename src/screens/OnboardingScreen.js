import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  ViewPagerAndroidBase,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loader} from '../components';
import {useDispatch} from 'react-redux';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {onBoarding} from '../redux/Actions/UserActions';
const OnboardingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleNavigate = () => {
    navigation.navigate('SignIn');
    dispatch(onBoarding(true));
  };

  const rnBiometrics = new ReactNativeBiometrics();

  // useEffect(() => {
  //   rnBiometrics.isSensorAvailable().then(resultObject => {
  //     const {available, biometryType} = resultObject;

  //     if (available && biometryType === BiometryTypes.TouchID) {
  //       console.log('TouchID is supported');
  //     } else if (available && biometryType === BiometryTypes.FaceID) {
  //       console.log('FaceID is supported');
  //     } else if (available && biometryType === BiometryTypes.Biometrics) {
  //       console.log('Biometrics is supported');
  //     } else {
  //       console.log('Biometrics not supported');
  //     }
  //   });

  //   rnBiometrics
  //     .simplePrompt({promptMessage: 'Confirm fingerprint for use'})
  //     .then(resultObject => {
  //       const {success} = resultObject;

  //       if (success) {
  //         console.log('successful biometrics provided');
  //       } else {
  //         console.log('user cancelled biometric prompt');
  //       }
  //     })
  //     .catch(() => {
  //       bioAuth();
  //       console.log('biometrics failed');
  //     });
  // }, []);

  // const bioAuth = () => {
  //   console.log('first');
  //   rnBiometrics
  //     .simplePrompt({promptMessage: 'Confirm fingerprint for use'})
  //     .then(resultObject => {
  //       const {success} = resultObject;

  //       if (success) {
  //         console.log('successful biometrics provided');
  //       } else {
  //         console.log('user cancelled biometric prompt');
  //         setTimeout(() => {
  //           bioAuth();
  //         }, 500);
  //       }
  //     })
  //     .catch(() => {
  //       console.log('biometrics failed');
  //     });
  // };
  return (
    <>
      <Onboarding
        onDone={handleNavigate}
        onSkip={handleNavigate}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image source={require('../assets/Images/onboarding-img1.png')} />
            ),
            title: 'Take Notes',
            subtitle: 'Take notes and access them from Anywhere, Anytime',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image source={require('../assets/Images/onboarding-img2.png')} />
            ),
            title: 'Not Just Texts',
            subtitle: 'Add images, video, recording or any file to your notes',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image source={require('../assets/Images/onboarding-img3.png')} />
            ),
            title: 'Stay Organised',
            subtitle: 'Group your notes and keep them organized ',
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnboardingScreen;
