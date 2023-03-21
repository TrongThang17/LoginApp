import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login/Login';
import ForgetPass from '../screens/login/ForgetPass';
import Authenticate from '../screens/login/Authenticate';
import {Colors} from '../../assets/Colors';
const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
    </NavigationContainer>
  );
};

export default Navigation;
