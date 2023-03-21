import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';
import {image} from '../images/image';
interface customInputProps {
  placeHolder: string;
  onChangeText?: (value: any) => void;
  value?: any;
  onShowPW?: () => void;
  isShowPW?: boolean;
  isShowBorderInput?: boolean;
}

const CustomTextInput: React.FC<customInputProps> = props => {
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: props.isShowBorderInput ? 1 : 0,
          borderColor: props.isShowBorderInput ? Colors.color_border_input : '',
        },
      ]}>
      <TextInput
        placeholder={props.placeHolder}
        style={[
          styles.textInput,
          {width: props.placeHolder == 'Mật khẩu' ? 240 : 280},
        ]}
        placeholderTextColor={Colors.color_text_placeholder_login}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.isShowPW}
      />
      {props.placeHolder == 'Mật khẩu' ? (
        <TouchableOpacity style={styles.eye} onPress={props.onShowPW}>
          <Image source={image.eye} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 56,
    backgroundColor: Colors.color_textInput_login,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    marginLeft: 16,
  },
  eye: {
    width: 24,
    height: 24,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CustomTextInput;
