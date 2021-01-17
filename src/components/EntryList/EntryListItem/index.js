import React from 'react';
import {View} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';

import styles from './styles';

import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  // const bulletColor = entry.category.color || Colors.white;
  const bulletColor = Colors.white;

  return (
    <View>
      <Svg height="50" width="30">
        {showBulletLine && (
          <Rect
            x="8.5"
            y={bulletLineY}
            width="1.5"
            height={bulletLineHeight}
            fill={Colors.background}
          />
        )}
        <Circle
          cx="9"
          cy="25"
          r={8}
          stroke={Colors.background}
          strokeWidth="1.5"
          fill={bulletColor}
        />
      </Svg>
    </View>
  );
};
export default EntryListItem;
