import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, InputBox, Title} from '../../components';
import {scale, theme} from '../../utils';
import {useNavigation} from '@react-navigation/native';
const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        height: theme.SCREENHEIGHT,
      }}>
      <View style={styles.firstView}>
        <Title
          style={{
            color: theme.colors.white,
            fontSize: 23,
            marginTop: theme.SCREENHEIGHT * 0.1,
            left: -theme.SCREENWIDTH * 0.1,
          }}
          title={'Login to your account'}
        />
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: h * 0.4,
        }}>
        <InputBox
          style={styles.textInput}
          placeholder="Your Email"
          onChangeText={txt => {
            setEmail(txt);
          }}
        />
        <InputBox
          onChangeText={txt => {
            setPassword(txt);
          }}
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
          passwordIcon
        />
      </View>
      <Button
        title={'Login'}
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Home'), console.log(email, password);
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginText}>Create new Account</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  firstView: {
    height: theme.SCREENHEIGHT / 3,
    backgroundColor: theme.colors.purpal,
    position: 'absolute',
    width: '100%',
    top: -h * 0.02,
    zIndex: -111,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: Platform.OS === 'ios' ? 250 : 200,
    // borderBottomLeftRadius: theme.SCREENHEIGHT * 2,
  },
  lastView: {
    height: theme.SCREENHEIGHT * 0.5,
    width: '100%',
    backgroundColor: theme.colors.purpal,
    position: 'absolute',
    borderRadius: 200,
    bottom: -18,
    right: -w * 0.5,
    zIndex: -11,
  },
  textInput: {
    width: theme.SCREENWIDTH - scale(70),
    // borderRadius: 10,
    // backgroundColor: '#DDA0DD',
    elevation: Platform.OS === 'android' ? 5 : 15,
    // marginTop: 20,
    // fontSize: 18,
    paddingLeft: 15,
    // fontWeight: '600',
  },
  btn: {
    marginTop: scale(25),
  },
  loginText: {
    alignSelf: 'center',
    color: theme.colors.purpal,
    fontWeight: '700',
    padding: 10,
  },
});
