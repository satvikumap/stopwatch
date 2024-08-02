import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Alarm from '../screens/Alarm';
import Stopwatch from '../screens/Stopwatchs';
import WorldClock from '../screens/WorldClock';
import Timer from '../screens/Timer';
import Icons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import TimerClock from '../screens/TimerClock';


const Tab = createBottomTabNavigator();
const satck = createStackNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator   screenOptions={{
      tabBarStyle: {
        backgroundColor: '#1c1b1b'
      },
      headerShown:false,
    }}>
      <Tab.Screen name="Alarm" component={Alarm}  options={{
          tabBarIcon: ({focused}) => (
            <Icons name="alarm" size={28} color={focused ? "#FFFFFF" : "#6b6565"} />
          ),
        }}/>
      <Tab.Screen name="WorldClock" component={WorldClock} options={{
          tabBarIcon: ({focused}) => (
            <Icons name="globe" size={28} color={focused ? "#FFFFFF" : "#6b6565" } />
          ),
        }}/>
        <Tab.Screen name="StopWatchs" component={Stopwatch} options={{
          tabBarIcon: ({focused}) => (
            <Icons name="stopwatch" size={28} color={focused ? "#FFFFFF" : "#6b6565" } />
          ),
        }}/>
      <Tab.Screen name="Timer" component={Stackscreen} options={{
          tabBarIcon: ({focused}) => (
            <Icons name="hourglass" size={28} color={focused ? "#FFFFFF" : "#6b6565" } />
          ),
        }}/>

        
    </Tab.Navigator>
  )
}

function Stackscreen(){
  return (
    <satck.Navigator screenOptions={{ headerShown:false}}>
      <satck.Screen name='Timer' component={Timer} />
      <satck.Screen name='TimerClock' component={TimerClock}/>
    </satck.Navigator>
  )
}
