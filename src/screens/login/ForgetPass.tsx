import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {image} from '../../../assets/images/image';
import CustomButton from '../../../assets/customs/CustomButton';
import {Colors} from '../../../assets/Colors';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
interface validate {
  email: string;
}
const schema = yup.object().shape({
  email: yup.string().required().email(),
});
const ForgetPass = () => {
  const [showBoderInput, setShowBorderInput] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  }: any = useForm<validate>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((value: any) => {
    console.log('aaa', value);
  }, []);

  useEffect(() => {
    errors.email ? setShowBorderInput(true) : setShowBorderInput(false);
    console.log('aaa');
  }, [errors.email]);

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={image.logoAuthen} />
      </View>
      <View style={styles.viewUnderHeader}>
        <View style={styles.viewTextUnderHeader}>
          <Text style={styles.textUnderHeader}>
            Vui lòng nhập địa chỉ email bạn đã đăng ký để đặt lại mật khẩu
          </Text>
        </View>
      </View>
      <View style={styles.viewTextInput}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <View
              style={[
                styles.viewTextInputSuper,
                {
                  borderColor: showBoderInput
                    ? Colors.color_border_input
                    : 'black',
                },
              ]}>
              <Text style={styles.textEmail}>Email</Text>
              <TextInput
                placeholder="Nhập địa chỉ Email"
                style={styles.textInput}
                onChangeText={value => onChange(value)}
                value={value}
              />
            </View>
          )}
          name={'email'}
        />
        {errors.email ? (
          <View style={styles.viewErr}>
            <Text style={styles.textErr}>Vui lòng nhập địa chỉ email</Text>
          </View>
        ) : (
          <Text />
        )}
      </View>

      <View style={styles.viewFooter}>
        <CustomButton
          label="Gửi"
          colors={Colors.color_btn_login}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color_bg_auth,
  },
  viewHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  viewUnderHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  viewTextUnderHeader: {
    width: 328,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUnderHeader: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.color_text1,
  },
  viewTextInput: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75,
  },
  logo: {
    width: 107,
    height: 35,
  },
  textInput: {
    width: 315,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.color_text_email,
    marginLeft: 15,
  },
  viewTextInputSuper: {
    width: 328,
    height: 56,
    backgroundColor: Colors.color_textInput_forget,
    borderRadius: 10,
    borderWidth: 1,
  },
  textEmail: {
    height: 16,
    marginLeft: 16,
    marginBottom: -8,
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
  },
});

export default ForgetPass;
