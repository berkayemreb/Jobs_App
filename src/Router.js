import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JobsScreen from './pages/Jobs';
import JobsDetailScreen from './pages/JobsDetail';
import FavoriteJobsScreen from './pages/FavoriteJobs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function Router() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jobs" component={JobsScreen} />
        <Stack.Screen name="JobsDetail" component={JobsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

