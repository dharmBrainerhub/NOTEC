import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const theme = {
  fonts: {
    // PoppinsBold: 'Poppins-Bold',
    // PoppinsLight: 'Poppins-Light',
    // PoppinsMedium: 'Poppins-Medium',
    // PoppinsSemiBold: 'Poppins-SemiBold',
    // GrandHotel: 'GrandHotel-Regular',
    // Robato: 'Roboto-Black',
    // RobatoBlod: 'Roboto-Bold',
    // RobatoMedium: 'Roboto-Medium',
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#9E9E9E',
    purpal: '#002a4c',
    lightpurpal: '#F4FAFF',
    red: '#FF0000',
    lightBlue: '#DCEDFB',
  },
  SCREENWIDTH: width,
  SCREENHEIGHT: height,
};

export default theme;
