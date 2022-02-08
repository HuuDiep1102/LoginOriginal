import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './MainNavigation';
import AuthNavigation from './AuthNavigation';
import { useSelector } from 'react-redux';

const rootNavigation = props => {
    const user = useSelector((state) => state.auth.isLoggedIn)

    return user ? (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    ) : (
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    );
}

export default rootNavigation;