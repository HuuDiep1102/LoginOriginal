import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home/Home';
import Todo from '../screens/Todo/Todo';
const Tab = createBottomTabNavigator();


const MainNavigation = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        tabBarIcon: ({size, color}) => (
                          <Icon name="home" size={24} color={color} />
                        ),
                        tabBarLabel: 'Home',
                      }}
                />
                <Tab.Screen 
                    name="Todo" 
                    component={Todo}
                    options={{
                        tabBarIcon: ({size, color}) => (
                          <Icon name="file-plus" size={24} color={color} />
                        ),
                        tabBarLabel: 'Todo',
                      }}
                />
            </Tab.Navigator>
    );
};

export default MainNavigation
