import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../utils';
import {InputBox, Label, Header} from '../../components';
import {useNavigation} from '@react-navigation/native';

const NoteDescription = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      {console.log('fcghfhjgvhkg', item)}
      <Header
        onPress={() => navigation.goBack()}
        HeaderTitle={'Note Description'}
      />
      <Text>{item.title}</Text>
    </View>
  );
};

export default NoteDescription;

const styles = StyleSheet.create({});
