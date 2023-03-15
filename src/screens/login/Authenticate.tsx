import {View, Image, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../assets/customs/CustomButton';
import {image} from '../../../assets/images/image';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const Authenticate = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={image.logo} style={styles.logoHeader} />
      </View>

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
                isFocused ? {borderColor: 'red'} : {borderColor: '#d6d4d4'},
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      <View style={styles.viewFooter}>
        <CustomButton label="Xác Nhận" />
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
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFooter: {
    flex: 2,
    alignItems: 'center',
  },
  logoHeader: {
    width: 250,
    height: 70,
  },
  root: {
    flex: 1,
    // padding: 20,
  },
  cell: {
    width: 58,
    height: 90,
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 45,
    marginRight: 5,
    textAlign: 'center',
    paddingTop: 13,
  },
});
export default Authenticate;
