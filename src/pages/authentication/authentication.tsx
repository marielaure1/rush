import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  useColorScheme,
  View,
  ImageBackground,
  Text
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonPrimary from "@components/buttons/buttonPrimary";
import BackgroundImageAuth from "@assets/images/background-auth.jpg";
import HookAuthentication from "@pages/authentication/authentication.hook";
import styles from "@pages/authentication/authentication.styles";
import buttons from '@theme/theme.buttons';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Authentication: React.FC<LoginProps> = ({ navigation }) => {
  const { isDarkMode, backgroundStyle } = HookAuthentication();

  return (
    <SafeAreaView style={backgroundStyle}>
		<StatusBar
			barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			backgroundColor={backgroundStyle.backgroundColor}
		/>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
			<ImageBackground source={BackgroundImageAuth} resizeMode="cover" style={styles.image}>
				<View style={styles.container}>
					<ButtonPrimary navigation={navigation} styleBg={[styles.marginBottom, buttons.buttonBgPurple]} link={"Login"} text="Connexion"/>
					<ButtonPrimary navigation={navigation} styleBg={buttons.buttonBgBlack} link={"Register"} text="Inscription"/>
				</View>
			</ImageBackground>
		</ScrollView>
    </SafeAreaView>
   );
}

export default Authentication;