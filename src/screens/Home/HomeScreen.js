import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NoteScreen from './NoteScreen';
import {useSelector} from 'react-redux';

export default HomeScreen = () => {
  const userInfo = useSelector(state => state.UserReducer);
  console.log('user info ', userInfo);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NoteScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
