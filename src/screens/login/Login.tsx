import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomTextInput from '../../../assets/customs/CustomTextInput';
import {image} from '../../../assets/images/image';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../assets/customs/CustomButtonLogin';
import {Colors} from '../../../assets/Colors';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface validate {
  customerID: number;
  ID: string;
  password: string;
}

const schema = yup.object().shape({
  customerID: yup.string().required(),
  ID: yup.string().required(),
  password: yup.string().required(),
});
const Login = () => {
  const [showPW, setShowPW] = useState(true);
  const [savePass, setSavePass] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  }: any = useForm<validate>({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();

  const onLogin = useCallback((value: any) => {
    navigation.navigate('SeeMore');
  }, []);

  const onForgetPass = useCallback(() => {
    navigation.navigate('ForgetPass');
  }, []);

  const onHandleShowPW = useCallback(() => {
    showPW ? setShowPW(false) : setShowPW(true);
  }, [showPW]);

  const onHandleSavePass = useCallback(() => {
    savePass ? setSavePass(false) : setSavePass(true);
  }, [savePass]);
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <Image source={image.logo} style={styles.logo} />
        </View>

        <View style={styles.viewTextInput}>
          <View style={styles.textInput}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <CustomTextInput
                  placeHolder="Mã khách hàng"
                  onChangeText={value => onChange(value)}
                  value={value}
                  valueErr={errors.customerID}
                />
              )}
              name={'customerID'}
            />
          </View>
          {errors.customerID && (
            <View style={styles.viewErr}>
              <Text style={styles.textErr}>Vui lòng nhập mã khách hàng!</Text>
            </View>
          )}
          <View style={styles.textInput}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <CustomTextInput
                  placeHolder="ID"
                  onChangeText={onChange}
                  value={value}
                  valueErr={errors.ID}
                />
              )}
              name={'ID'}
            />
          </View>
          {errors.ID && (
            <View style={styles.viewErr}>
              <Text style={styles.textErr}>Vui lòng nhập tài khoản!</Text>
            </View>
          )}
          <View style={styles.textInput}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <CustomTextInput
                  placeHolder="Mật khẩu"
                  onChangeText={onChange}
                  value={value}
                  isShowPW={showPW}
                  onShowPW={onHandleShowPW}
                  valueErr={errors.password}
                />
              )}
              name={'password'}
            />
          </View>
          {errors.password && (
            <View style={styles.viewErr}>
              <Text style={styles.textErr}>Vui lòng nhập mật khẩu!</Text>
            </View>
          )}
        </View>
        <View style={styles.viewUnderTextInput}>
          <View style={styles.viewSuperUnderTextInput}>
            <View style={styles.viewSavePass}>
              <TouchableOpacity
                style={styles.touchSavePass}
                onPress={onHandleSavePass}>
                {savePass ? (
                  <Image source={image.savePass} style={styles.tickSavePass} />
                ) : null}
              </TouchableOpacity>
              <Text style={styles.savePass}>Lưu mật khẩu</Text>
            </View>
            <View style={styles.viewTextForgetPass}>
              <TouchableOpacity onPress={onForgetPass}>
                <Text style={styles.textForgetPass}>Quên mật khẩu ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.viewFooter}>
          <CustomButton
            label="Đăng Nhập"
            img={image.faceID}
            colors={Colors.color_btn_login}
            onPress={handleSubmit(onLogin)}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color_bg,
  },
  logo: {
    width: 107,
    height: 35,
    marginTop: 100,
    marginBottom: 48,
  },
  viewHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextInput: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewUnderTextInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSuperUnderTextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 312,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 18,
  },
  viewFooter: {
    alignItems: 'center',
  },
  touchSavePass: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: Colors.color_border_savepass,
    borderWidth: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickSavePass: {
    width: 15,
    height: 15,
  },
  savePass: {
    color: Colors.color_text1,
  },
  textInput: {
    alignItems: 'center',
    marginBottom: 8,
  },
  viewSavePass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '60%',
  },
  viewTextForgetPass: {
    width: '40%',
    alignItems: 'flex-end',
  },
  textForgetPass: {
    color: Colors.color_text_fogotpass,
  },
  viewErr: {
    width: 296,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textErr: {
    color: Colors.color_text_err,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
  },
});

export default Login;
