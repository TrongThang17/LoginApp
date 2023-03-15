import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login/Login';
import ForgetPass from '../screens/login/ForgetPass';
import Authenticate from '../screens/login/Authenticate';
const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Authenticate"
          component={Authenticate}
          options={{
            title: 'Đăng Nhập',
            headerTitleStyle: {
              marginLeft: 90,
              fontWeight: '600',
            },
          }}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{
            title: 'Quên Mật Khẩu',
            headerTitleStyle: {
              marginLeft: 60,
              fontWeight: '600',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
