import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Amplify, Auth} from 'aws-amplify';
import amplifyconfig from '../../amplifyconfiguration.js';
import BackgroundImageAuth from '../assets/images/background-auth.jpg';
Amplify.configure(amplifyconfig);

// import Styles from "../styles";

export default function Authentication(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [login, setLogin] = useState("edjour.marielaure@gmail.com");
  const [motDePasse, setMotDePasse] = useState("Azerty123333.");
  const [otp, setOtp] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const BackgroundImageAuth = {uri: '../../../../src/assets/images/auth.png'};



  const handleSignUp = async () => {

    try{
      const signUpInfo = {
        username: login, 
        password: motDePasse,
        attributes: {},
        autoSignIn: { enable: false}
      }

      const {user} = await Auth.signUp(signUpInfo);

      console.log(user);
      
    } catch(error){
      console.log('error', error);
      
    }
  }

  const handleSignIn = async () => {

    try{
      
      const user = await Auth.signIn(login, motDePasse);

      console.log(user);
      
    } catch(error){
      console.log('error', error);
      
    }
  }

  const handleOTP = async () => {
    try{

      console.log(login);
      console.log(otp);

      const confirmation = await Auth.confirmSignUp(
        login, otp
      );

      console.log(confirmation);
      
    } catch(error){
      console.log('error', error);
      
    }
  }

  const handleSignOut = async () => {
    try{

      const result = await Auth.signOut();

      console.log(result);
      
    } catch(error){
      console.log('error', error);
      
    }
  }
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
         <ImageBackground source={BackgroundImageAuth} resizeMode="cover" style={styles.image}>
      <View>

            <Text> Login :</Text>
            <TextInput value={login} onChangeText={(nouveauContenu) => setLogin(nouveauContenu)}/>
        
            <Text> Mot de passe :</Text>
            <TextInput 
            secureTextEntry={true}
            value={motDePasse} 
            onChangeText={(nouveauContenu) => setMotDePasse(nouveauContenu)}/>
            <Button 
            title="Créer un compte" 
            onPress={handleSignUp}

            />
        </View>
  {/* 
        <View
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
        </View>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

            <Text> Login :</Text>
            <TextInput value={login} onChange={(nouveauContenu) => setLogin(nouveauContenu)}/>
        
            <Text> Mot de passe :</Text>
            <TextInput 
            secureTextEntry={true}
            value={motDePasse} 
            onChange={(nouveauContenu) => setMotDePasse(nouveauContenu)}/>
            <Button 
            title="Se connecter" 
            onPress={handleSignIn}

            />
        </View>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

            <Button 
            title="Deconnexion" 
            onPress={handleSignOut}
            style={[styles.red]}

            />
        </View> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

  const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: screenHeight
  }
});