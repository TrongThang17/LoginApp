import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';

interface customButtonProps {
  label?: string;
  img?: string;
  colors?: string;
  onPress?: () => void;
}

const CustomButtonLogin: React.FC<customButtonProps> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonLogin, {backgroundColor: props.colors}]}
        onPress={props.onPress}>
        <Text style={styles.text}>{props.label}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonFaceID, {backgroundColor: props.colors}]}>
        <Image source={props.img} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 312,
    flexDirection: 'row',
  },
  buttonLogin: {
    width: 260,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  text: {
    color: Colors.color_text_login,
  },
  buttonFaceID: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
export default CustomButtonLogin;
