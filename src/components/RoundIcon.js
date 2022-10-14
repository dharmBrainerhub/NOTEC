import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../utils';

const RoundIcon = props => {
  const {style, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: theme.colors.purpal,
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        },
        style,
      ]}>
      <AntDesign name="plus" size={30} color="white" style={{}} />
    </TouchableOpacity>
  );
};

export default RoundIcon;

const styles = StyleSheet.create({});
