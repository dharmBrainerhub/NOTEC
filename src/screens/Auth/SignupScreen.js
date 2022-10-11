import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import { InputBox } from '../../components';
const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const SignupScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.firstView}>
        <Text
          style={{
            color: '#000',
            fontSize: 23,
            zIndex: 111,
            position: 'absolute',
            bottom: 0,
          }}>
          Create Account
        </Text>
      </View>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          marginTop: h * 0.4,
        }}>
        <InputBox style={styles.textInput} placeholder="Name" />
        <InputBox style={styles.textInput} placeholder="Your Email" />
        <InputBox style={styles.textInput} placeholder="Password" />
      </View>
      <View style={styles.lastView} />
    </View>
  );
};
export default SignupScreen;
const styles = StyleSheet.create({
  firstView: {
    height: '100%',
    width: '200%',
    backgroundColor: '#663399',
    borderRadius: 430,
    position: 'absolute',
    top: -h * 0.68,
    left: -w * 0.95,
    zIndex: -111,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastView: {
    height: '50%',
    width: '100%',
    backgroundColor: '#663399',
    position: 'absolute',
    borderRadius: 200,
    bottom: -h * 0.29,
    right: -w * 0.5,
  },
  textInput: {
    // borderRadius: 10,
    // backgroundColor: '#DDA0DD',
    // elevation: 15,
    // marginTop: 20,
    // fontSize: 18,
    // paddingLeft: 15,
    // fontWeight: '600',
  },
});