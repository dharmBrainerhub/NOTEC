import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Label} from './Label';
import {scale, theme} from '../utils';
import * as Animatable from 'react-native-animatable';

const HeaderComponent = props => {
  const {onPress, HeaderTitle, iconStyle} = props;
  return (
    <Animatable.View animation="fadeInDown">
      <SafeAreaView
        style={{
          backgroundColor: theme.colors.purpal,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            paddingHorizontal: 25,
            alignItems: 'center',
            // justifyContent: 'space-between',
          }}>
          <Feather
            name="chevron-left"
            color={theme.colors.white}
            size={scale(25)}
            onPress={onPress}
            style={[iconStyle, {left: scale(-9.5)}]}
          />
          <Label
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: scale(15),
              marginLeft: scale(5),
            }}
            title={HeaderTitle}
          />
        </View>
      </SafeAreaView>
    </Animatable.View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
