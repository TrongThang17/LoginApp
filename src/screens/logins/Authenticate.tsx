import {View, Image, StyleSheet, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomButton from '../../../assets/customs/CustomButton';
import {image} from '../../../assets/images/image';
import {Colors} from '../../../assets/Colors';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const Authenticate = () => {
  const [value, setValue] = useState('');
  const [showErrAuth, setShowErrAuth] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    value == '000000' ? setShowErrAuth(true) : setShowErrAuth(false);
    console.log(value);
  }, [value]);

  const onConfirmAuth = () => {
    // showErrAuth ? setShowErrAuth(false) : setShowErrAuth(true);
    // console.log(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={image.logoAuthen} />
      </View>
      <View style={styles.viewUnderHeader}>
        <View style={styles.viewTextUnderHeader}>
          <Text style={styles.textUnderHeader}>
            Vui lòng nhập mã OTP được gửi đến số điện thoại *** *** **20
          </Text>
        </View>
      </View>
      <View style={styles.viewBody}>
        <View style={styles.viewTextInput}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[
                  styles.cell,
                  showErrAuth
                    ? {borderColor: Colors.color_button_auth_select}
                    : isFocused
                    ? {borderColor: Colors.color_button_auth_select}
                    : {borderColor: Colors.color_button_auth_not_select},
                ]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        {showErrAuth ? (
          <View style={styles.viewErr}>
            <Image source={image.errorAuth} style={styles.imgErr} />
            <Text style={styles.textErr}>
              Mã OTP không đúng, vui lòng nhập lại! (còn 4 lần)
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.viewFooter}>
        <CustomButton
          label="Xác Nhận"
          colors={Colors.color_btn_login}
          onPress={onConfirmAuth}
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
    marginTop: 24,
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
  viewBody: {
    marginBottom: 61,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewFooter: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flex: 1,
  },
  cell: {
    width: 45,
    height: 60,
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 22,
    marginRight: 10,
    textAlign: 'center',
    paddingTop: 14,
    color: Colors.color_text1,
    fontWeight: '500',
  },
  viewErr: {
    width: 307,
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textErr: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.color_text_err,
  },
  imgErr: {
    marginRight: 4,
  },
});
export default Authenticate;
