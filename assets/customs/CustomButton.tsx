import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';

interface customButtonProps {
  label?: string;
  colors?: string;
  onPress?: () => void;
}

const CustomButton: React.FC<customButtonProps> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonLogin, {backgroundColor: props.colors}]}
        onPress={props.onPress}>
        <Text style={styles.text}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonLogin: {
    width: 328,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  text: {
    color: Colors.color_text_login,
  },
});
export default CustomButton;
