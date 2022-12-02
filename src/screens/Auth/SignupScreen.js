import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  AlertModel,
  Button,
  Error,
  InputBox,
  Loader,
  Title,
} from '../../components';
import {scale, theme} from '../../utils';
import {usersCollection} from '../../utils/FirebaseServices';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const SignupScreen = () => {
  const naviagtion = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoadding] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMsg, setErrormsg] = useState({
    firstName: '',
    lastName: '',
    email: '',
    passsword: '',
  });

  const clearFilds = () => {
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };
  let error = false;
  const validation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (firstName.trim() === '') {
      errorMsg.firstName = 'Please enter first name';
      error = true;
    } else {
      errorMsg.firstName = '';
    }
    if (lastName.trim() === '') {
      errorMsg.lastName = 'Please enter last name';
      error = true;
    } else {
      errorMsg.lastName = '';
    }
    if (reg.test(email) === false) {
      errorMsg.email = 'Please enter valid email';
      error = true;
    } else {
      errorMsg.email = '';
    }
    if (password.trim().length !== 6) {
      errorMsg.passsword = 'Please enter minimum 6 chars';
      error = true;
    } else {
      errorMsg.passsword = '';
    }
    setErrormsg({...errorMsg, errorMsg});
    return error;
  };
  const signupAction = () => {
    if (!validation()) {
      setLoadding(true);
      try {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            console.log('resresresresres0>>   0', res);
            let user = {
              first_name: firstName,
              last_name: lastName,
              email: res.user.email,
              image: '',
              _id: res.user.uid,
              created_at: new Date(),
            };
            console.log('user from mail >> ', user);
            usersCollection
              .doc(res.user.uid)
              .set(user)
              .then(response => {
                clearFilds();
                setLoadding(false);
                naviagtion.navigate('SignIn');
                console.log('response firestore  >> ', response);
              })
              .catch(e => {
                setLoadding(false);
                console.log('catch >> ', e);
              })
              .finally(f => {
                setLoadding(false);
                console.log('final >> ', f);
              });
            console.log('User account created & signed in!');
          })
          .catch(error => {
            setLoadding(false);
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
              clearAlert('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
              clearAlert('That email address is invalid!');
            }
            if (error.code === 'auth/weak-password') {
              console.log('The given password is invalid.');
              clearAlert('The given password is invalid.');
            }
            console.error(error);
          });
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const clearAlert = desc => {
    setTimeout(() => {
      setShow(true);
      setErrormsg(desc);
    }, 350);
  };

  const closeModel = () => {
    setShow(false);
    setErrormsg('');
  };
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        height: theme.SCREENHEIGHT,
      }}
      showsVerticalScrollIndicator={false}>
      <View style={styles.firstView}>
        <Title
          style={{
            color: theme.colors.white,
            fontSize: 23,
            // zIndex: 111,
            marginTop: theme.SCREENHEIGHT * 0.1,
            left: -theme.SCREENWIDTH * 0.1,
          }}
          title={'Create New Account'}
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
            setFirstName(txt);
          }}
          value={firstName}
          style={styles.textInput}
          placeholder="First Name"
        />
        {errorMsg.firstName && (
          <Error error={errorMsg.firstName} style={{top: -5}} />
        )}
        <InputBox
          onChangeText={txt => {
            setLastName(txt);
          }}
          value={lastName}
          style={styles.textInput}
          placeholder="Last Name"
        />
        {errorMsg.lastName && (
          <Error error={errorMsg.lastName} style={{top: -5}} />
        )}
        <InputBox
          onChangeText={txt => {
            setEmail(txt);
          }}
          value={email}
          style={styles.textInput}
          placeholder="Your Email"
        />
        {errorMsg.email && <Error error={errorMsg.email} style={{top: -5}} />}
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
        {errorMsg.passsword && (
          <Error error={errorMsg.passsword} style={{top: -5}} />
        )}
      </View>
      <Button
        title={'Signup'}
        style={styles.btn}
        onPress={() => {
          signupAction();
        }}
      />
      <TouchableOpacity
        style={{alignSelf: 'center', padding: 10}}
        onPress={() => naviagtion.navigate('SignIn')}>
        <Text
          style={{
            fontWeight: '700',
            color: theme.colors.purpal,
          }}>
          Login
        </Text>
      </TouchableOpacity>
      {isLoading && <Loader loading={isLoading} />}
      {show && (
        <AlertModel title="Signup" subTitle={errorMsg} close={closeModel} />
      )}
    </KeyboardAwareScrollView>
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
    borderBottomRightRadius: Platform.OS === 'android' ? 180 : 200,
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
    elevation: 5,
    paddingLeft: 15,
  },
  btn: {
    marginTop: scale(25),
  },
});
