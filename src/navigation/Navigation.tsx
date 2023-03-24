import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/login/Login';
import ForgetPass from '../screens/login/ForgetPass';
import Authenticate from '../screens/login/Authenticate';
import SeeMore from '../screens/dashboard/SeeMore';
import {Colors} from '../../assets/Colors';
import {image} from '../../assets/images/image';
import {Image} from 'react-native';
const Navigation = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const stackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SeeMore"
          component={SeeMore}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Authenticate"
          component={Authenticate}
          options={{
            title: 'Đăng Nhập',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Colors.color_bg_auth,
              borderBottomWidth: 1,
            },
          }}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{
            title: 'Quên Mật Khẩu',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Colors.color_bg_auth,
              borderBottomWidth: 1,
            },
          }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Setting"
          component={Login}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Image source={image.setting} />;
            },
          }}
        />
        <Tab.Screen
          name="Hotline"
          component={Login}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Image source={image.hotline} />;
            },
          }}
        />
        <Tab.Screen
          name="History"
          component={Login}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Image source={image.history} />;
            },
          }}
        />
        <Tab.Screen
          name="PowerMeter"
          component={Login}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Image source={image.powerMeter} />;
            },
          }}
        />
        <Tab.Screen
          name="SeeMore"
          component={SeeMore}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Image source={image.seeMore} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
