import React from 'react';
import {View, Text} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';

import styles from './styles';

import Colors from '../../../styles/Colors';

const EntryListItem = ({entry}) => {
  return (
    <View>
      <Svg height="50" width="30">
        <Rect x="9" y="0" width="1.5" height="50" fill={Colors.white} />
      </Svg>
    </View>
  ); // 11 59
};
export default EntryListItem;
