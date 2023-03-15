import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';

interface customButtonProps {
  label: string;
}

const CustomButton: React.FC<customButtonProps> = props => {
  return (
    <TouchableOpacity style={styles.textButton}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButton: {
    backgroundColor: 'red',
    width: '90%',
    height: 55,
    borderRadius: 7,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
export default CustomButton;
