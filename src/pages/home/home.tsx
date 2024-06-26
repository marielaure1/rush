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
import useHome from "@pages/home/home.hook";
// import Stories from "@components/stories/stories";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {

  return (
    <SafeAreaView>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
		    <View style={styles.container}>		
        {/* <Stories/> */}
			</View>
		</ScrollView>
    </SafeAreaView>
   );
}

export default Home;