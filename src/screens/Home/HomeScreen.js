import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NoteScreen from './NoteScreen';
import {useDispatch, useSelector} from 'react-redux';
import {theme} from '../../utils';
import {isLogin} from '../../redux/Actions/UserActions';
import {useEffect} from 'react';

export default HomeScreen = () => {
  const userInfo = useSelector(state => state.UserReducer);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      <NoteScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
