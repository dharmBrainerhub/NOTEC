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
const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [isLoadding, setLoadding] = useState(true);

  useEffect(async () => {
    setLoadding(true);
    const isSkip = await AsyncStorage.getItem('intro');
    if (isSkip == 'true') {
      navigation.navigate('SignIn');
      setLoadding(false);
    } else {
      setLoadding(false);
    }
  }, []);

  const init = async () => {
    const isSkip = await AsyncStorage.getItem('intro');
    if (isSkip == 'true') {
      navigation.navigate('SignIn');
    }
  };

  const handleNavigate = () => {
    navigation.navigate('SignIn');
    AsyncStorage.setItem('intro', 'true');
  };

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
      <Loader
        loading={isLoadding}
        background={{backgroundColor: '#00000020'}}
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
