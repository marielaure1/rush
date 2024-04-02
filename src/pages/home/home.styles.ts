import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
    container: {
        width: variables.innerWidth,
        height: variables.innerHeight,
        padding: variables.paddingPrimary,
        backgroundColor: variables.clBlack003
    },
});
  
export default styles;