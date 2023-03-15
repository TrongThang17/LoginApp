import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

interface customInputProps {
  placeHolder: string;
}

const CustomTextInput: React.FC<customInputProps> = props => {
  return <TextInput placeholder={props.placeHolder} style={styles.textInput} />;
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 65,
    borderRadius: 7,
    elevation: 5,
  },
});
export default CustomTextInput;
