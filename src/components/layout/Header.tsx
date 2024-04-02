import React, {useContext} from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import buttons from '@theme/theme.buttons';
import texts from '@theme/theme.texts';
import ButtonSecondary from "@components/buttons/buttonSecondary";
import {Amplify, Auth} from 'aws-amplify';
import amplifyconfig from '@/amplifyconfiguration.js';
import { AuthContext } from "@/App";
import styles from "@pages/register/register.styles";
Amplify.configure(amplifyconfig);

const Header: React.FC = ({navigation}) => {
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleSignOut = async () => {
        try{
    
          const result = await Auth.signOut();
    
          setIsAuthenticated(false)
          
        } catch(error){
          console.log('error', error);
          
        }
    }
    return (
        <ButtonSecondary navigation={navigation} styleTxt={[styles.marginBottom, texts.textPrimary]}  action={handleSignOut} text="Deconnexion"/>
    );
};

export default Header;
