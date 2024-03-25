import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  TextInput,
  View,
  ImageBackground,
  Text
} from 'react-native';

import ButtonPrimary from "@components/buttons/buttonPrimary";
import ButtonSecondary from "@components/buttons/buttonSecondary";
import HookRegister from "@pages/register/register.hook";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackgroundImageAuth from "@assets/images/background-auth.jpg";
import styles from "@pages/register/register.styles";
import buttons from '@theme/theme.buttons';
import texts from '@theme/theme.texts';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface RegisterProps {
  navigation: RegisterScreenNavigationProp;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
    const { 
		register, 
		setRegister, 
		password, 
		setPassword, 
		backgroundStyle, 
		handleSignUp, 
		otp, 
		handleOTP, 
		isDarkMode, 
		message 
	} = HookRegister();

  return (
    <SafeAreaView style={backgroundStyle}>
		<StatusBar
			barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			backgroundColor={backgroundStyle.backgroundColor}
		/>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
			<ImageBackground source={BackgroundImageAuth} resizeMode="cover" style={styles.image}>
			
				<View style={styles.container}>
					<Text>{message}</Text>
					<TextInput 
					placeholder={"Nom d’utilisateur / Email"}
					value={register} 
					onChange={(content) => setRegister(content)}
					style={[styles.inputField]}
					/>
					<TextInput 
					secureTextEntry={true}
					value={password} 
					onChange={(content) => setPassword(content)}
					style={[styles.inputField]}
					/>
					<TextInput 
					secureTextEntry={true}
					value={password} 
					onChange={(content) => setPassword(content)}
					style={[styles.inputField]}
					/>

                    <ButtonPrimary navigation={navigation} styleBg={[styles.marginBottom, buttons.buttonBgBlack]} action={handleSignUp} text="S'inscrire"/>
                    <ButtonSecondary navigation={navigation} styleTxt={[styles.marginBottom, texts.textPrimary]}  action={navigation.goBack} text="Retour"/>
				</View>
				{/* <View
				style={{
					backgroundColor: isDarkMode ? Colors.black : Colors.white,
				}}>

					<Text> Otp :</Text>
					<TextInput 
					keyboardType='numeric'
					value={otp} 
					onChangeText={(nouveauContenu) => setOtp(nouveauContenu)}/>
					<Button 
					title="Valider l'otp" 
					onPress={handleOTP}

					/>
				</View> */}
			</ImageBackground>
		</ScrollView>
    </SafeAreaView>
   );
}

export default Register;