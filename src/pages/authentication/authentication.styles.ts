import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    width: variables.innerWidth,
    height: variables.innerHeight,
    padding: variables.paddingPrimary
  },
  container: {
    padding: variables.paddingPrimary,
    zIndex: 3
  },
  marginBottom: {
    marginVertical: 20
  }
});
  
export default styles;