import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CompletedScreen from '../screens/CompletedScreen';
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

function CompletedStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Completed" component={CompletedScreen} />
        </Stack.Navigator>
    );
}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'HomeTab') {
                            iconName = 'home';
                        } else if (route.name === 'CompletedTab') {
                            iconName = 'checkcircleo';
                        }
                        return <AntDesign name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
                <Tab.Screen name="CompletedTab" component={CompletedStack} options={{ title: 'Completed' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
