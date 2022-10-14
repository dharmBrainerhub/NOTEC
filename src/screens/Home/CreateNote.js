import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Loader} from '../../components';
import {scale, theme} from '../../utils';
import {addNote, noteLoadding} from '../../redux/Actions/NoteActions';

const CustomTextInput = props => {
  const {placeholder, numberOfLines, style, onChangeText, value} = props;
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.purpal}
      multiline={true}
      onChangeText={onChangeText}
      value={value}
      numberOfLines={numberOfLines}
    />
  );
};
const CreateNote = ({route}) => {
  const navigation = useNavigation();
  const {userInfo} = route.params;
  const [title, setTitle] = useState();
  const [descrption, setDescrption] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const isLoad = useSelector(state => {
    state.NoteReducers.isLoadding;
  });
  const handleNote = async () => {
    dispatch(noteLoadding(true));
    setLoading(true);
    const add = {
      data: [
        {
          title: title.trim(),
          desc: descrption,
          date: new Date().toDateString(),
          color: '',
          _id: Math.floor(Math.random() * 1145415614635351),
          user_id: userInfo?._id,
          create_by: `${userInfo?.first_name} ${userInfo?.last_name}`,
        },
      ],
    };
    await dispatch(addNote(add));
    setLoading(false);
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Header
        HeaderTitle="Create your Note"
        onPress={() => navigation.goBack()}
        iconName={'save'}
        onPressSave={handleNote}
      />

      <View style={styles.container}>
        <CustomTextInput
          placeholder="Note title"
          numberOfLines={1}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <CustomTextInput
          placeholder="Note description..."
          value={descrption}
          style={styles.input1}
          onChangeText={text => {
            setDescrption(text);
          }}
          numberOfLines={5}
        />
      </View>
      {loading && <Loader loading={true} />}
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.SCREENHEIGHT * 0.05,
    width: '85%',
    alignSelf: 'center',
  },
  input: {
    borderBottomWidth: scale(1),
    borderBottomEndRadius: scale(2),
    borderBottomColor: theme.colors.purpal,
    fontSize: scale(25),
    padding: scale(5),
  },
  input1: {
    // borderBottomWidth: scale(1),
    // borderBottomEndRadius: scale(2),
    borderBottomColor: theme.colors.white,
    fontSize: scale(14),
    padding: scale(5),
    height: theme.SCREENHEIGHT * 0.3,
    marginTop: theme.SCREENHEIGHT * 0.02,
  },
  TextInput: {
    marginTop: 30,
  },
  RoundIcon: {backgroundColor: theme.colors.lightpurpal, margin: 10},
});
