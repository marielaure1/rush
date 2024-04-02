import { useContext, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useColorScheme } from 'react-native';
import {Amplify, Auth} from 'aws-amplify';
import amplifyconfig from '@/amplifyconfiguration.js';
import { AuthContext } from "@/App";
Amplify.configure(amplifyconfig);

export default function useLogin() {
    const { setIsAuthenticated } = useContext(AuthContext);
    const isDarkMode = useColorScheme() === 'dark';
    const [login, setLogin] = useState("edjour.marielaure@gmail.com");
    const [password, setPassword] = useState("Azerty123333@");
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    const handleSignIn = async () => {
        console.log("dd");
        
        try{
            const user = await Auth.signIn(login, password);

            setIsAuthenticated(true)
        } catch(error){
            console.log("Erreur > Login > ", error); 

        }
    }

    return { login, setLogin, password, setPassword, backgroundStyle, handleSignIn, isDarkMode }
}