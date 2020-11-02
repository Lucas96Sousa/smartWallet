import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Icon from 'react-native-vector-icons/Entypo';

import Colors from '../../styles/Colors';

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
        <Icon name="circle-with-plus" size={35} color={Colors.green} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  panel: {
    paddingVertical: 10,
  },
  button: {
    flexDirection: 'row-reverse',
  },
});

export default BalancePanel;
