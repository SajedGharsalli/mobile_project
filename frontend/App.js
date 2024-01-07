import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/auth/screens/login';
import Home from './src/home/screens/Home';
import Route from './src/route/screen/Route';
import LoginForm from './src/auth/components/LoginForm';
import Index from './src/navigation';
import ChatScreen from './src/chat/screen/Chat';


export default function App() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
