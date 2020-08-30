import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {fontSize: 22},
});

const BalancePanelLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.label}>R$2.102,45</Text>
      <Button title="Adicionar" />
    </View>
  );
};

export default BalancePanelLabel;
