import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import UserAvatar from 'react-native-user-avatar';
import {scale, theme} from '../../utils';
import {InputBox, Label, Header} from '../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../components/CustomIcon';
import {useDispatch} from 'react-redux';
import {isLogin, logout} from '../../redux/Actions/UserActions';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = ({route}) => {
  const navigation = useNavigation();
  const {userInfo} = route.params;
  const dispatch = useDispatch();
  const showAlert = () =>
    Alert.alert('Are you sure, you want to Logout ?', null, [
      {
        text: 'Cancel',
        cancelable: true,
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(logout());
          dispatch(isLogin(false));
          navigation.navigate('SignIn');
        },
      },
    ]);

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Header onPress={() => navigation.goBack()} HeaderTitle="Profile" />
      <UserAvatar
        size={50}
        name={userInfo?.first_name}
        style={styles.UserAvatar}
        bgColor={theme.colors.lightpurpal}
      />
      <View style={{marginTop: '10%'}}>
        <InputBox
          value={userInfo?.first_name}
          style={styles.textInput}
          inputStyle={styles.inputStyle}
          editable={false}
        />
        <InputBox
          value={userInfo?.last_name}
          style={styles.textInput}
          placeholder="Last name"
          inputStyle={styles.inputStyle}
          editable={false}
        />
        <InputBox
          value={userInfo?.email}
          style={styles.textInput}
          placeholder="Email"
          inputStyle={styles.inputStyle}
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.logoutView} onPress={showAlert}>
        <Icon name="power" size={scale(20)} color={theme.colors.red} />
        <Label title={'  Logout'} style={{color: theme.colors.red}} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  UserAvatar: {
    width: 95,
    padding: 20,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: '15%',
    borderWidth: 4,
    borderColor: '#FBFBFB',
  },
  logOutIcon: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputStyle: {
    // color: theme.colors.purpal,
    marginLeft: 10,
  },
  logoutView: {
    position: 'absolute',
    bottom: scale(20),
    marginHorizontal: scale(27),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
