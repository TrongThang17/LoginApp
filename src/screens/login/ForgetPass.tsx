import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images/image';
import CustomButton from '../../../assets/customs/CustomButton';
const ForgetPass = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={image.logo} style={styles.logo} />
      </View>
      <View style={styles.viewTextInput}>
        <View style={styles.viewTextInputSuper}>
          <Text style={styles.textEmail}>Email</Text>

          <TextInput
            placeholder="Nhập địa chỉ Email"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.viewFooter}>
        <CustomButton label="Gửi" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextInput: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewFooter: {
    flex: 4,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 50,
  },
  textInput: {
    backgroundColor: 'white',
    width: 370,
    height: 35,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTextInputSuper: {
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  textEmail: {
    marginLeft: 10,
  },
});

export default ForgetPass;
