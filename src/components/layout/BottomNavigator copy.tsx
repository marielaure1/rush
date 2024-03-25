// import {Text, View, StyleSheet, Image } from 'react-native';
// import Authentication from '../../pages/Authentication.tsx';
// // import {NavigationContainer} from "@react-navigation/native";
// import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// // import AntDesign from "react-native-vector-icons/AntDesign";
// // import Authentification from "../../pages/Authentification.tsx";
// // import Svg, { Path } from 'react-native-svg';
// // import Animated, { useAnimatedStyle, withTiming, useDerivedValue } from 'react-native-reanimated'
// // lottie
// import Lottie from 'lottie-react-native';

// // import Lottie from 'lottie-react-native'
// import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// // const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator();

import React, { useEffect, useReducer, useRef } from 'react'
import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
  Dimensions
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedStyle, withTiming, useDerivedValue } from 'react-native-reanimated'
import Lottie from 'lottie-react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

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
    // tabBar={(props) => <AnimatedTabBar {...props} />}
    initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
      >
 <Tab.Screen
            name="Home"
            options={{
              // @ts-ignore
              tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="home-edit-outline" color={color} size={26} />
              ),
            }}
            component={HomeScreen}
          />
          {/* <Tab.Screen
            name="Upload"
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => <Lottie ref={ref} loop={false} source={require('../../assets/lottie/upload.icon.json')} style={styles.icon} />,
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Uploadd"
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => <Lottie ref={ref} loop={false} source={require('../../assets/lottie/upload.icon.json')} style={styles.icon} />,
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Chat"
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => <Lottie ref={ref} loop={false} source={require('../../assets/lottie/chat.icon.json')} style={styles.icon} />,
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Settings"
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => <Lottie ref={ref} loop={false} source={require('../../assets/lottie/settings.icon.json')} style={styles.icon} />,
            }}
            component={HomeScreen}
          /> */}
    </Tab.Navigator>
  );
}

// const AnimatedTabBar = ({ state: { index: activeIndex, routes }, navigation, descriptors } : BottomTabBarProps) => {
//   const { bottom } = useSafeAreaInsets()

//   const reducer = (state: any, action: { x: number, index: number }) => {
//     return [...state, { x: action.x, index: action.index }]
//   }

//   const [layout, dispatch] = useReducer(reducer, [])
//   console.log(layout)

//   const handleLayout = (event: LayoutChangeEvent, index: number) => {
//     dispatch({ x: event.nativeEvent.layout.x, index })
//   }

//   const xOffset = useDerivedValue(() => {
//     if (layout.length !== routes.length) return 0;
//     return [...layout].find(({ index }) => index === activeIndex)!.x - 25
//   }, [activeIndex, layout])

//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
//     }
//   })

//   const screenWidth = Dimensions.get('window').width;
//   return (
//     <View style={[styles.tabBar, { paddingBottom: bottom }]}>
//       <AnimatedSvg
//         width={screenWidth}
//         height={60}
//         viewBox={"0 0 100 80"}
//         style={[styles.activeBackground, animatedStyles]}
//       >
    

//     <Path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M214 0H0V80H214H309H523V0H309L308.982 0.00012207C299.451 0.0100098 291.727 7.7395 291.727 17.2728V21.5909C291.727 38.285 278.194 51.8182 261.5 51.8182C244.806 51.8182 231.273 38.2849 231.273 21.5909V17.2727C231.273 7.73328 223.539 0 214 0Z" />
//       </AnimatedSvg>

//       <View style={styles.tabBarContainer}>
//         {routes.map((route, index) => {
//           const active = index === activeIndex
//           const { options } = descriptors[route.key]

//           return (
//             <TabBarComponent
//               key={route.key}
//               active={active}
//               options={options}
//               onLayout={(e) => handleLayout(e, index)}
//               onPress={() => navigation.navigate(route.name)}
//             />
//           )
//         })}
//       </View>
//     </View>
//   )
// }

// type TabBarComponentProps = {
//   active?: boolean
//   options: BottomTabNavigationOptions
//   onLayout: (e: LayoutChangeEvent) => void
//   onPress: () => void
// }

// const TabBarComponent = ({ active, options, onLayout, onPress }: TabBarComponentProps) => {
//   const ref = useRef(null)

//   useEffect(() => {
//     if (active && ref?.current) {
//       // @ts-ignore
//       ref.current.play()
//     }
//   }, [active])

//   const animatedComponentCircleStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           scale: withTiming(active ? 1 : 0, { duration: 250 })
//         }
//       ]
//     }
//   })

//   const animatedIconContainerStyles = useAnimatedStyle(() => {
//     return {
//       opacity: withTiming(active ? 1 : 0.5, { duration: 250 })
//     }
//   })

//   return (
//     <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
//       <Animated.View
//         style={[styles.componentCircle, animatedComponentCircleStyles]}
//       />
//       <Animated.View style={[styles.iconContainer, animatedIconContainerStyles]}>
//         {options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>}
//       </Animated.View>
//     </Pressable>
//   )
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: 'transparent',
//     height: 60
//   },
//   activeBackground: {
//     position: 'absolute',
//     left: -180
//   },
//   tabBarContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   component: {
//     height: 50,
//     width: 50,
//     marginTop: -20,
//   },
//   componentMiddle: {
//     marginTop: -20,
//   },
//   componentCircle: {
//     flex: 1,
//     borderRadius: 30,
//     backgroundColor: 'white',
//   },
//   iconContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   icon: {
//     height: 24,
//     width: 24
//   }
// })
