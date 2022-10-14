import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Header, InputBox, Title} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../utils';
import RoundIcon from '../../components/RoundIcon';

const CustomTextInput = props => {
  const {placeholder, numberOfLines, style, onChangeText, value} = props;
  return (
    <TextInput
      style={[styles.input, style]}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.lightpurpal}
      multiline={true}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const CreateNote = () => {
  const navigation = useNavigation();
  const [showbtn, setShowbtn] = useState(false);
  const [title, setTitle] = useState();
  const [descrption, setDescrption] = useState();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Header
        HeaderTitle="Create your Note"
        onPress={() => navigation.goBack()}
      />

      <View style={{padding: 30, marginTop: 20}}>
        <CustomTextInput
          placeholder="Note Title"
          numberOfLines={1}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <CustomTextInput
          placeholder="Note Description"
          style={styles.TextInput}
          value={descrption}
          onChangeText={text => {
            setShowbtn(true);
            setDescrption(text);
          }}
        />
        <Text></Text>
        {title && descrption ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 30,
            }}>
            <RoundIcon
              style={styles.RoundIcon}
              name="check"
              animation="bounceInLeft"
            />
            <RoundIcon
              style={styles.RoundIcon}
              name="close"
              animation="bounceInRight"
              onPress={() => navigation.goBack()}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.purpal,
    fontSize: 18,
    padding: 10,
  },
  TextInput: {
    marginTop: 30,
  },
  RoundIcon: {backgroundColor: theme.colors.lightpurpal, margin: 10},
});
