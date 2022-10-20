import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {scale, theme} from '../../utils';
import {InputBox, Label, Header, Title} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {noteCollection} from '../../utils/FirebaseServices';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

const NoteDescription = ({route}) => {
  const {item, noteDatas} = route.params;
  const [allNotes, setAllnotes] = useState([]);
  const navigation = useNavigation();
  const userInfo = useSelector(state => state.UserReducer.userDetails);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleDelete = async () => {
    // await noteCollection
    //   .doc(userInfo?._id)
    //   .onSnapshot(async documentSnapshot => {
    //     if (documentSnapshot.exists) {
    //       const notes = await documentSnapshot.data();
    //       console.log('notesnotesnotes', notes);
    //       setAllnotes(notes.data);
    //     }
    //   });
    setAllnotes(noteDatas);
    let filterData = [];
    filterData = allNotes?.filter(function (n) {
      return n?._id != item?._id;
    });

    console.log('all data ++++ ', filterData);
    console.log('filterData' + filterData);
    // noteCollection
    //   .doc(userInfo?._id)
    //   .update({
    //     myArray: FirebaseFirestoreTypes.FieldValue.arrayRemove(item),
    //   })
    //   .then(r => {
    //     alert('Delete note successfully');
    //     navigation.goBack();
    //   });
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Header
        onPress={() => navigation.goBack()}
        HeaderTitle={'Note Description'}
        iconStyle={styles.iconStyle}
        iconName="edit"
        deleteIcon
        onPressDelete={handleDelete}
        onPressSave={() => {
          navigation.replace('CreateNote', {userInfo, edit: item});
        }}
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
