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
} from 'react-native';
// import Athentification from "./src/pages/Authentification.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View >
      <Text>HomeScreen</Text>
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View >
      <Text>DiscoverScreen</Text>
    </View>
  );
}

function LiveScreen() {
  return (
    <View >
      <Text>LiveScreen</Text>
    </View>
  );
}

function AbonnementScreen() {
  return (
    <View >
      <Text>AbonnementScreen</Text>
    </View>
  );
}
function AccountScreen() {
  return (
    <View >
      <Text>AccountScreen</Text>
    </View>
  );
}

export default function App(): JSX.Element {
  return(
    <>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Discover" component={DiscoverScreen}/>
        <Tab.Screen name="Live" component={LiveScreen}/>
        <Tab.Screen name="Abonnement" component={AbonnementScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  )
}

