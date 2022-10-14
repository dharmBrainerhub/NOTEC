import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, theme} from '../../utils';
import {InputBox, Label, Header, Title} from '../../components';
import {useNavigation} from '@react-navigation/native';

const NoteDescription = ({route}) => {
  const {item, iconStyle} = route.params;
  const navigation = useNavigation();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      {console.log('fcghfhjgvhkg', item)}
      <Header
        onPress={() => navigation.goBack()}
        // HeaderTitle={'Note Description'}
        iconStyle={styles.iconStyle}
      />
      <View style={{padding: 20}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Title
            title={capitalizeFirstLetter(item.title)}
            style={{fontSize: 30, marginTop: 10}}
          />
          <View>
            <Label
              title="Created at"
              style={{opacity: 0.5, fontSize: scale(12)}}
            />
            <Label
              title={item?.date}
              style={{opacity: 0.5, fontSize: scale(10), left: scale(2)}}
            />
          </View>
        </View>
        <Label
          title={item.desc}
          style={{marginTop: scale(15), fontWeight: '300', fontSize: scale(13)}}
        />
      </View>
    </View>
  );
};

export default NoteDescription;

const styles = StyleSheet.create({});
