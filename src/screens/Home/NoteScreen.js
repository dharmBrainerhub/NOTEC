import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {theme} from '../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import CustomIcon from '../../components/CustomIcon';
import Feather from 'react-native-vector-icons/Feather';
import {InputBox, Label, Title, NoteCard, Loader} from '../../components';
import * as Animatable from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import {CustomModal} from '../../components';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RoundIcon from '../../components/RoundIcon';
import {getUserNote, noteLoadding} from '../../redux/Actions/NoteActions';
import {noteCollection} from '../../utils/FirebaseServices';
const NoteScreen = props => {
  const [searchInput, setSearchInput] = useState(false);
  const [load, setLoadding] = useState(false);
  const [noteDatas, setNoteData] = useState([]);
  const [noData, setNodata] = useState(false);
  const userInfo = useSelector(state => state.UserReducer.userDetails);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const noteData = useSelector(state => state.NoteReducers.noteData);

  const getNote = async () => {
    setLoadding(true);
    noteCollection.doc(userInfo?._id).onSnapshot(async documentSnapshot => {
      if (documentSnapshot.exists) {
        const notes = await documentSnapshot.data();
        setNoteData(notes.data?.reverse());
        setLoadding(false);
        setNodata(false);
      } else {
        setNodata(true);
        setLoadding(false);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      getNote();
    }, []),
  );

  const RenderNote = ({item, index}) => {
    return (
      <View>
        <NoteCard
          index={index}
          onPress={() => navigation.navigate('Notedescription', {item})}>
          <Title title={item?.title} />
          <Label
            title={item?.desc}
            style={{marginTop: 3, fontWeight: '300', color: '#333'}}
            numberOfLines={2}
          />
        </NoteCard>
      </View>
    );
  };

  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: theme.colors.white,
      }}>
      <View style={styles.headerView}>
        <View>
          <Title
            style={{
              color: theme.colors.purpal,
              fontSize: 24,
              fontWeight: '600',
            }}
            title="Notes"
          />
          <Label
            title={`Welcome ${userInfo?.first_name}`}
            style={{color: theme.colors.purpal, fontWeight: '300'}}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          {searchInput === true ? (
            <CustomIcon
              iconName="close"
              IconSetName={FontAwesome}
              onPress={() => setSearchInput(false)}
              iconSize={20}
            />
          ) : (
            <CustomIcon
              iconName="search"
              IconSetName={FontAwesome}
              onPress={() => setSearchInput(true)}
              iconSize={20}
            />
          )}
          <CustomIcon
            iconName="user"
            IconSetName={Feather}
            onPress={() =>
              navigation.navigate('Profile', {userInfo, noteDatas})
            }
            iconSize={20}
          />
        </View>
      </View>
      {searchInput && (
        <Animatable.View animation="slideInDown">
          <InputBox />
        </Animatable.View>
      )}
      {noData ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={{
              uri: 'https://assets5.lottiefiles.com/packages/lf20_hynobukt.json',
            }}
            autoPlay
            loop={false}
          />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={noteDatas}
          renderItem={RenderNote}
          keyExtractor={item => item.id}
        />
      )}

      <RoundIcon
        style={styles.roundIcon}
        onPress={() => navigation.navigate('CreateNote', {userInfo})}
        name={'plus'}
      />
      <Loader loading={load} />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  headerView: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputStyle: {
    // width: '80%',
  },
  roundIcon: {
    bottom: 20,
    right: 25,
    position: 'absolute',
  },
});
