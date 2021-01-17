import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/AntDesign';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';

import styles from './styles';

const BalancePanel = ({onNewEntryPress}) => {
  const currentBalance = 2064.35;
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity onPress={onNewEntryPress} style={styles.button}>
        <Icon name="pluscircle" size={35} style color={Colors.green} />
      </TouchableOpacity>
    </View>
  );
};

export default BalancePanel;
