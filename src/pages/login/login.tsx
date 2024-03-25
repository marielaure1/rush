import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  TextInput,
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView
} from 'react-native';

import ButtonPrimary from "@components/buttons/buttonPrimary";
import ButtonSecondary from "@components/buttons/buttonSecondary";
import HookLogin from "@pages/login/login.hook";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackgroundImageAuth from '@assets/images/background-auth.jpg';
import styles from "@pages/login/login.styles";
import buttons from '@theme/theme.buttons';
import texts from '@theme/theme.texts';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { login, setLogin, password, setPassword, backgroundStyle, handleSignIn, isDarkMode } = HookLogin();

  return (
    <KeyboardAvoidingView style={backgroundStyle}>
		<StatusBar
			barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			backgroundColor={backgroundStyle.backgroundColor}
		/>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
			<ImageBackground source={BackgroundImageAuth} resizeMode="cover" style={styles.image}>
			
				<View style={styles.container}>
					<TextInput 
					placeholder={"Nom d’utilisateur / Email"}
					value={login} 
					onChange={(content) => setLogin(content)}
					style={[styles.inputField]}
					/>
					<TextInput 
					secureTextEntry={true}
					value={password} 
					onChange={(content) => setPassword(content)}
					style={[styles.inputField]}
					/>

                    <ButtonPrimary navigation={navigation} styleBg={[styles.marginBottom, buttons.buttonBgPurple]} action={handleSignIn} text="Se connecter"/>
                    <ButtonSecondary navigation={navigation} styleTxt={[styles.marginBottom]} action={() => navigation.goBack()} text="Mot de passe oublié ?"/>
                    <ButtonSecondary navigation={navigation} styleTxt={[styles.marginBottom]}  action={navigation.goBack} text="Retour"/>
				</View>
			</ImageBackground>
		</ScrollView>
    </KeyboardAvoidingView>
   );
}

export default Login;