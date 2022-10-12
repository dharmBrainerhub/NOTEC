import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomIcon from '../../components/CustomIcon';
import Feather from 'react-native-vector-icons/Feather';
import {InputBox} from '../../components';
import * as Animatable from 'react-native-animatable';

const NoteScreen = props => {
  const [searchInput, setSearchInput] = useState(false);
  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={styles.headerView}>
        <Text
          style={{color: theme.colors.purpal, fontSize: 24, fontWeight: '600'}}>
          Notes
        </Text>
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
          <CustomIcon iconName="user" IconSetName={Feather} />
        </View>
      </View>
      {searchInput && (
        <Animatable.View animation="slideInDown">
          <InputBox />
        </Animatable.View>
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
