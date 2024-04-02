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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Header from "@/src/components/layout/header/header";
import Home from "@pages/home/home";
import Discover from "@pages/discover/discover";
import Live from "@pages/live/live";
import Category from "@pages/category/category";
import Account from "@pages/account/account";
import variables from '@theme/theme.variables';

LogBox.ignoreAllLogs();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {

	return (
		<>
			<Header/>
			<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: 'white',
				tabBarStyle: { backgroundColor: variables.clBlack002 },
			}}
			barStyle={{ backgroundColor: variables.clBlack002, color: variables.clWhite }}
			>
				<Tab.Screen
				name="Home"
				options={{
				tabBarIcon: ({color}) => (
					<MaterialCommunityIcons name="home" color={color} size={26} />
				),
				}}
				component={Home}
				/>

				<Tab.Screen
				name="Découverte"
				options={{
				tabBarIcon: ({color}) => (
					<FontAwesome6 name="ranking-star" color={color} size={26} />
				),
				}}
				component={Discover}
				/>

				<Tab.Screen
				name="Live"
				options={{
				tabBarIcon: ({color}) => (
					<FontAwesome name="video-camera" color={color} size={26} />
				),
				}}
				component={Live}
				/>

				<Tab.Screen
				name="Category"
				options={{
				tabBarIcon: ({color}) => (
					<MaterialIcons name="category" color={color} size={26} />
				),
				}}
				component={Category}
				/>

			<Tab.Screen
				name="Account"
				options={{
				tabBarIcon: ({color}) => (
					<FontAwesome name="user" color={color} size={26} />
				),
				}}
				component={Account}
				/>
				
			</Tab.Navigator>
		</>
	);
}

const styles = StyleSheet.create({
	bottomNavigator:{
		backgroundColor: "#282828"
	}
})
