import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    // flex:1
  },

  label: {
    fontSize: 22,
  },

  value: {
    fontSize: 24,
  },
});

const BalanceLabel = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Saldo Atual</Text>
        <Text style={styles.value}>R$: 2.064,35</Text>
      </View>
    </>
  );
};

export default BalanceLabel;
