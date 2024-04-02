import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: variables.innerWidth,
    padding: variables.paddingTerciary,
    zIndex: 3,
    backgroundColor: variables.clBlack002
  },
  marginBottom: {
    marginVertical: 20
  }
});
  
export default styles;