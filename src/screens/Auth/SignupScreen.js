import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Button, InputBox, Title} from '../../components';
import {scale, theme} from '../../utils';
const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const SignupScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: theme.colors.white}}>
      <ScrollView style={{flex: 1, height: theme.SCREENHEIGHT}}>
        <View style={styles.firstView}>
          <Title
            style={{
              color: theme.colors.white,
              fontSize: 23,
              // zIndex: 111,
              marginTop: theme.SCREENHEIGHT * 0.1,
              left: -theme.SCREENWIDTH * 0.1,
            }}
            title={'Create Account'}
          />
        </View>
        <View
          style={{
            // width: '80%',
            alignSelf: 'center',
            marginTop: h * 0.4,
          }}>
          <InputBox style={styles.textInput} placeholder="Name" />
          <InputBox style={styles.textInput} placeholder="Your Email" />
          <InputBox style={styles.textInput} placeholder="Password" />
        </View>
        <Button title={'Signup'} style={styles.btn} />
        <View style={styles.lastView} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default SignupScreen;
const styles = StyleSheet.create({
  firstView: {
    height: theme.SCREENHEIGHT / 3,
    backgroundColor: theme.colors.purpal,
    position: 'absolute',
    width: '100%',
    top: -h * 0.02,
    // left: -w * 0.1,
    zIndex: -111,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: theme.SCREENHEIGHT * 7,
    borderBottomLeftRadius: theme.SCREENHEIGHT * 2,
  },
  lastView: {
    height: '50%',
    width: '100%',
    backgroundColor: theme.colors.purpal,
    position: 'absolute',
    borderRadius: 200,
    bottom: -h * 0.29,
    right: -w * 0.5,
    zIndex:-11
  },
  textInput: {
    width: theme.SCREENWIDTH - scale(70),
    // borderRadius: 10,
    // backgroundColor: '#DDA0DD',
    elevation: 15,
    // marginTop: 20,
    // fontSize: 18,
    paddingLeft: 15,
    // fontWeight: '600',
  },
  btn:{
    marginTop:scale(25)
  }
});