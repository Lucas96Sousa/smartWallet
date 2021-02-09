import React from 'react';
import {View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import {styles} from './styles';

const NewEnrtyInput = ({value, onChangeValue}) => {
  return (
    <View>
      <TextInputMask
        style={styles.textInput}
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue);
        }}
      />
    </View>
  );
};

export default NewEnrtyInput;
