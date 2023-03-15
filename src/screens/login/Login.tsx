import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../assets/customs/CustomTextInput';
import {image} from '../../../assets/images/image';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const onLogin = () => {
    navigation.navigate('Authenticate');
  };

  const onForgetPass = () => {
    navigation.navigate('ForgetPass');
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={image.logo} style={styles.logo} />
      </View>

      <View style={styles.viewTextInput}>
        <View style={styles.textInput}>
          <CustomTextInput placeHolder="Mã khách hàng" />
        </View>
        <View style={styles.textInput}>
          <CustomTextInput placeHolder="ID" />
        </View>
        <View style={styles.textInput}>
          <CustomTextInput placeHolder="Mật khẩu" />
        </View>
      </View>

      <View style={styles.viewUnderTextInput}>
        <View style={styles.viewHandlePass}>
          <View style={styles.viewSavePass}>
            <TouchableOpacity style={styles.touchSavePass} />
            <Text>Lưu mật khẩu</Text>
          </View>

          <Text style={styles.textForgetPass} onPress={onForgetPass}>
            Quên mật khẩu ?
          </Text>
        </View>
      </View>

      <View style={styles.viewFooter}>
        <View style={styles.viewSuperFooter}>
          <View style={styles.viewTouchLogin}>
            <TouchableOpacity style={styles.touchLogin} onPress={onLogin}>
              <Text style={styles.textLogin}>Đăng Nhập</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewTouchFaceScan}>
            <TouchableOpacity style={styles.touchFaceScan}>
              <Image source={image.faceScan} style={styles.imgFaceScan} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
  },
  logo: {
    width: 200,
    height: 50,
  },
  viewHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: 130,
  },
  viewTextInput: {
    justifyContent: 'center',
    height: 240,
  },
  viewUnderTextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  viewFooter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  touchSavePass: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: '#cdd0d4',
    borderWidth: 1,
    marginRight: 10,
  },
  viewTouchLogin: {
    flex: 10,
    height: 60,
    width: '87%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTouchFaceScan: {
    height: 60,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  touchLogin: {
    height: 50,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  touchFaceScan: {
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  imgFaceScan: {
    width: 30,
    height: 30,
  },
  textInput: {
    alignItems: 'center',
    marginBottom: 10,
  },
  viewHandlePass: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  viewSuperFooter: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
  },
  viewSavePass: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textForgetPass: {
    color: '#53a6e6',
  },
  textLogin: {
    color: 'white',
  },
});

export default Login;
