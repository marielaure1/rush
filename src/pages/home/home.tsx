import React, { useState } from 'react';
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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from "@pages/home/home.styles";
import HookHome from "@pages/home/home.hook";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {

  return (
    <SafeAreaView>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
		    <View style={styles.container}>		
			</View>
		</ScrollView>
    </SafeAreaView>
   );
}

export default Home;