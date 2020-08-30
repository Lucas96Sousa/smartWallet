import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {Container, Label} from './styles';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
  },

  label: {
    fontSize: 22,
  },
});

const EntrySummaryList = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Categorias</Text>
        <FlatList
          data={[
            {key: 'Alimentação: R$ 201'},
            {key: 'Combustível: R$ 50'},
            {key: 'Alguel: R$800'},
            {key: 'Lazer: R$120'},
            {key: 'Outros: R$1000'},
          ]}
          renderItem={({item}) => (
            <Text style={styles.label}> -{item.key} </Text>
          )}
        />
      </View>
    </>
  );
};

export default EntrySummaryList;
