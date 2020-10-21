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

const EntryList = ({entries}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text style={styles.label}>
            {' '}
            - {item.description} -R$ {item.amount}
          </Text>
        )}
      />
    </View>
  );
};

export default EntryList;
