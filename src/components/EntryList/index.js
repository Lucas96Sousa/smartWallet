import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import EntryListItem from './EntryListItem';

// import { Container } from './styles';

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

const EntryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaraia Asa Branca: R$10'},
          {key: 'Supermercado Isadora: R$ 190'},
          {key: 'Posto Ipiranga: R$ 190'},
        ]}
        renderItem={({item}) => <Text style={styles.label}>{item.key}</Text>}
      />
    </View>
  );
};

export default EntryList;
