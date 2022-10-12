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
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Button, InputBox, Title} from '../../components';
import {scale, theme} from '../../utils';
import { usersCollection } from '../../utils/FirebaseServices';
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupAction = () => {
    auth()
      .createUserWithEmailAndPassword(
        email,
        password,
      )
      .then((res) => {
        let user = {
          userName:name,
          email:res.user.email,
          image:res.additionalUserInfo.profile,
          _id:res.user.uid,
          created_at:new Date()
        }
        usersCollection.doc(res.user.uid).set(user).then((response)=>{
          console.log('response firestore  >> ',response)
        }).catch((e)=>{
          console.log('catch >> ',e)

        }).finally((f)=>{
          console.log('final >> ',f)
        })
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };
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
          <InputBox
            onChangeText={txt => {
              setName(txt);
            }}
            value={name}
            style={styles.textInput}
            placeholder="Name"
          />
          <InputBox
            onChangeText={txt => {
              setEmail(txt);
            }}
            value={email}
            style={styles.textInput}
            placeholder="Your Email"
          />
          <InputBox
            onChangeText={txt => {
              setPassword(txt);
            }}
            value={password}
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            passwordIcon
          />
        </View>
        <Button
          title={'Signup'}
          style={styles.btn}
          onPress={() => {
            signupAction();
          }}
        />
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
    zIndex: -11,
  },
  textInput: {
    width: theme.SCREENWIDTH - scale(70),
    elevation: 15,
    paddingLeft: 15,
  },
  btn: {
    marginTop: scale(25),
  },
});
