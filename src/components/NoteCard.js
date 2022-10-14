import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../utils';

const NoteCard = props => {
  const {children, backgroundColor, index, onPress} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: index % 2 === 0 ? theme.colors.lightpurpal : '#DCEDFB',
        margin: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});
