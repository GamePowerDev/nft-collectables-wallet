import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MainScreens, CollectiblesScreens, ScannerScreens, BACKGROUND_LIGHT, SECONDARY_COLOR} from '../../extra/constants'
import {Market, Settings} from '../../screens/main'
import {CollectiblesNavigator} from './CollectibleNavigator'
import {ScannerNavigator} from './ScannerNavigator'

const {Navigator, Screen} = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Navigator 
            tabBarOptions={{
                showLabel: true,
                activeTintColor: SECONDARY_COLOR,
                inactiveTintColor: 'black',
                style: {
                    backgroundColor: BACKGROUND_LIGHT,
                    position: 'absolute',
                    bottom: 0,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    borderRadius: 20,
                    height: 90,
                },
            }}
            initialRouteName={CollectiblesScreens.Collectibles} 
            screenOptions={{headerShown: false, animationEnabled: false}}>
                <Screen name={CollectiblesScreens.Collectibles} component={CollectiblesNavigator} />
                <Screen name={ScannerScreens.Scan} component={ScannerNavigator} />
                <Screen name={MainScreens.Marketplace} component={Market} />
                <Screen name={MainScreens.Settings} component={Settings} />
        </Navigator>
    )
}