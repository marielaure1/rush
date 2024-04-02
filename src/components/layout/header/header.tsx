import React, {useContext} from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View } from 'react-native';
import buttons from '@theme/theme.buttons';
import texts from '@theme/theme.texts';
import ButtonSecondary from "@components/buttons/buttonSecondary";
import useHeader from "@/src/components/layout/header/header.hook";
import styles from "@/src/components/layout/header/header.styles";

const Header: React.FC = ({navigation}) => {
    const {handleSignOut} = useHeader()
    return (
        <View style={[styles.container]}>
            <Text style={texts.textPrimary}>Rush</Text>
            <ButtonSecondary navigation={navigation} styleTxt={[styles.marginBottom, texts.textPrimary]}  action={handleSignOut} text="Deconnexion"/>
        </View>
    );
};

export default Header;
