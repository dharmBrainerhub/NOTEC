import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomIcon from '../../components/CustomIcon';
import Feather from 'react-native-vector-icons/Feather';
import {InputBox, Label, Title, NoteCard} from '../../components';
import * as Animatable from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import {CustomModal} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const noteData = [
  {
    id: 1,
    title: 'first note',
    descrption:
      'hello this is the first descrption hello this is the first descrption hello this is the first descrption hello this is the first descrption',
    color: '#663399',
    date: new Date(),
  },
  {
    id: 2,
    title: 'second note',
    descrption: 'hello this is the first descrption',
    color: '#CBC3E3',
    date: new Date(),
  },
  {
    id: 3,
    title: 'second note',
    descrption: 'hello this is the first descrption',
    color: '#CBC3E3',
    date: new Date(),
  },
  {
    id: 4,
    title: 'second note',
    descrption: 'hello this is the first descrption',
    color: '#CBC3E3',
    date: new Date(),
  },
];

const NoteScreen = props => {
  const [searchInput, setSearchInput] = useState(false);
  const userInfo = useSelector(state => state.UserReducer.userDetails);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log('user info ', userInfo);
  const RenderNote = ({item, index}) => {
    return (
      <View>
        {console.log(JSON.stringify(item.item, null, 2))}
        <NoteCard
          index={index}
          onPress={() => navigation.navigate('Notedescription', {item})}>
          <Title title={item.title} />
          <Label
            title={item.descrption}
            style={{marginTop: 3}}
            numberOfLines={2}
          />
        </NoteCard>
      </View>
    );
  };

  return (
    <View style={{paddingHorizontal: 10, flex: 1}}>
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
            style={{color: theme.colors.lightpurpal, fontWeight: '700'}}
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
            onPress={() => navigation.navigate('Profile', {userInfo})}
            iconSize={20}
          />
        </View>
      </View>
      {searchInput && (
        <Animatable.View animation="slideInDown">
          <InputBox />
        </Animatable.View>
      )}

      <FlatList
        data={noteData}
        renderItem={RenderNote}
        keyExtractor={item => item.id}
      />
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
});
