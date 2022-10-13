import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomIcon from '../../components/CustomIcon';
import Feather from 'react-native-vector-icons/Feather';
import {InputBox, Label} from '../../components';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import {CustomModal} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NoteScreen = props => {
  const [searchInput, setSearchInput] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const userInfo = useSelector(state => state.UserReducer.userDetails);
  console.log('user info ', userInfo);
  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={styles.headerView}>
        <View>
          <Text
            style={{
              color: theme.colors.purpal,
              fontSize: 24,
              fontWeight: '600',
            }}>
            Notes
          </Text>
          <Label
            title={`Welcome ${userInfo?.userName}`}
            style={{color: theme.colors.lightpurpal, fontWeight: '700'}}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          {searchInput === true ? (
            <CustomIcon
              iconName="close"
              IconSetName={FontAwesome}
              onPress={() => setSearchInput(false)}
            />
          ) : (
            <CustomIcon
              iconName="search"
              IconSetName={FontAwesome}
              onPress={() => setSearchInput(true)}
            />
          )}

          {userModal === true ? (
            <CustomIcon
              iconName="close"
              IconSetName={FontAwesome}
              onPress={() => setUserModal(false)}
            />
          ) : (
            <CustomIcon
              iconName="user"
              IconSetName={Feather}
              onPress={() => setUserModal(true)}
            />
          )}
        </View>
      </View>
      {searchInput && (
        <Animatable.View animation="slideInDown">
          <InputBox />
        </Animatable.View>
      )}
      {userModal && (
        <CustomModal ModalHeight="60%">
          <Text
            style={{
              color: theme.colors.white,
              fontWeight: '800',
              fontSize: 25,
            }}>
            {userInfo?.userName}
          </Text>
        </CustomModal>
      )}
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
