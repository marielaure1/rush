import { useContext, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useColorScheme } from 'react-native';
import {Amplify, Auth} from 'aws-amplify';
import amplifyconfig from '@/amplifyconfiguration.js';
import { AuthContext } from "@/App";
Amplify.configure(amplifyconfig);

export default function  HookRegister() {
    const { setIsAuthenticated } = useContext(AuthContext);
    const isDarkMode = useColorScheme() === 'dark';
    const [register, setRegister] = useState("edjour.marielaure@gmail.com");
    const [password, setPassword] = useState("Azerty123333.");
    const [otp, setOtp] = useState();
    const [message, setMessage] = useState();
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
      
    const handleSignUp = async () => {
        try{
            const signUpInfo = {
                username: register, 
                password: password,
                attributes: {},
                autoSignIn: { enable: false}
            }
    
            const {user} = await Auth.signUp(signUpInfo);

            setIsAuthenticated(true)
            
        } catch(error){
            console.log("Erreur > Register > ", error); 

            if(error instanceof TypeError && error.message.includes('cyclical structure in JSON object')){
                setMessage("Veuillez saisir un identifiant et un mot de passe correct.");
                
            } else if(error instanceof TypeError && error.message.includes('An account with the given email already exists.')){
                setMessage("Ce compte existe déjà");
            }
            
        }
    }

    const handleOTP = async () => {
        try{
            const confirmation = await Auth.confirmSignUp(
                register, otp
            );
        } catch(error){
            console.log('error', error);
        }
    }

    return { register, setRegister, password, setPassword, backgroundStyle, handleSignUp, isDarkMode, handleOTP, message }
}