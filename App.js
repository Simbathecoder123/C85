import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './screens/Feed';
import CreatePost from './screens/CreatePost'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';w

const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <View>
      <Text>Feed</Text>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
