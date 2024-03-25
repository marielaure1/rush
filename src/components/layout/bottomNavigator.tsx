import React, { useEffect, useReducer, useRef, useContext } from 'react'
import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
  Dimensions,
  LogBox
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

LogBox.ignoreAllLogs();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen,;l</Text>
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View>
      <Text>DiscoverScreen</Text>
    </View>
  );
}

function LiveScreen() {
  return (
    <View>
      <Text>LiveScreen</Text>
    </View>
  );
}

function AbonnementScreen() {
  return (
    <View>
      <Text>AbonnementScreen</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
}


export default function BottomNavigator() {

	return (
		<Tab.Navigator
		initialRouteName="Home"
		screenOptions={{
			tabBarActiveTintColor: 'white',
		}}
		>
			<Tab.Screen
			name="Home"
			options={{
			tabBarIcon: ({color}) => (
				<MaterialCommunityIcons name="home" color={color} size={26} />
			),
			}}
			component={HomeScreen}
			/>

            <Tab.Screen
			name="Découverte"
			options={{
			tabBarIcon: ({color}) => (
				<MaterialCommunityIcons name="home" color={color} size={26} />
			),
			}}
			component={HomeScreen}
			/>

			<Tab.Screen
			name="Live"
			options={{
			tabBarIcon: ({color}) => (
				<MaterialCommunityIcons name="home-edit-outline" color={color} size={26} />
			),
			}}
			component={HomeScreen}
			/>

            <Tab.Screen
			name="Category"
			options={{
			tabBarIcon: ({color}) => (
				<MaterialCommunityIcons name="home-edit-outline" color={color} size={26} />
			),
			}}
			component={HomeScreen}
			/>

           <Tab.Screen
			name="Account"
			options={{
			tabBarIcon: ({color}) => (
				<MaterialCommunityIcons name="home-edit-outline" color={color} size={26} />
			),
			}}
			component={AccountScreen}
			/>
			
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	bottomNavigator:{
		backgroundColor: "#282828"
	}
})
