import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/logins/Login';
import ForgetPass from '../screens/logins/ForgetPass';
import Authenticate from '../screens/logins/Authenticate';
import SeeMore from '../screens/dashboard/SeeMore';
import {Colors} from '../../assets/Colors';
import {image} from '../../assets/images/image';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import Signature from '../screens/signature/Signature';
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

  const tabScreen = () => {
    return (
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
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Tab"
          component={tabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Stack" component={stackScreen} /> */}

        <Stack.Screen
          name="Signature"
          component={Signature}
          options={({navigation}) => ({
            title: 'Cài đặt chữ ký',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Colors.color_bg_auth,
              borderBottomWidth: 1,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate('Login')}>
                <Image source={image.back} />
              </TouchableOpacity>
            ),
          })}
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
          options={({navigation}) => ({
            title: 'Đăng Nhập',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Colors.color_bg_auth,
              borderBottomWidth: 1,
            },

            headerLeft: () => (
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate('Login')}>
                <Image source={image.back} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={({navigation}) => ({
            title: 'Quên Mật Khẩu',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Colors.color_bg_auth,
              borderBottomWidth: 1,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate('Login')}>
                <Image source={image.back} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="SeeMore"
          component={SeeMore}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft: 10,
  },
});

export default Navigation;
