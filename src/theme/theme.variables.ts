import { Dimensions } from 'react-native';
  
const screenWidth= Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
  
const variables = {
    clPurple: "#5617FF",
    clWhite: "#FFFFFF",
    clBlack: "#000000",
    clBlack002: "#1E1E1E",
    clBlack003: "#111111",
    paddingPrimary: 20,
    paddingSecondary: 15,
    paddingTerciary: 10,
    brPrimary: 30,
    brSecondary: 20,
    brTerciary: 10,
    innerWidth: screenWidth,
    innerHeight: screenHeight
}

export default variables;