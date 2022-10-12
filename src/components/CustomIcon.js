import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../utils';

export default CustomIcon = props => {
  const {iconName, onPress, IconSetName} = props;
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.lightpurpal,
        marginHorizontal: 5,
      }}
      onPress={onPress}>
      <IconSetName name={iconName} size={20} color={theme.colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
