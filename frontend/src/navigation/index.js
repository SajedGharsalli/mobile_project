import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from '../auth/screens/login'
import Home from '../home/screens/Home'
import Ride from '../Ride/screens/Ride'
import Route from '../route/screen/Route'
import Account from '../account/screens/Account'
import Footer from '../home/footer/footer'
import ChatScreen from '../chat/screen/Chat'


const Stack = createStackNavigator()

const Index = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Ride' component={Ride}/>
            <Stack.Screen name='Route' component={Route}/>
            <Stack.Screen name='Account' component={Account}/>
            <Stack.Screen name='Footer' component={Footer}/>
            <Stack.Screen name='chat' component={ChatScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index

