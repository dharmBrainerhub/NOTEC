import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
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
