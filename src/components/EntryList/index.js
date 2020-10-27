import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

// import EntryListItem from './EntryListItem';

import {getEntries} from '../../services/Entries';

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

const EntryList = ({navigation}) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }

    loadEntries();

    console.log('EntryList :: useEffect');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <View>
            <Text style={styles.label}>
              - {item.description} R$ {item.amount}
            </Text>
            <Button
              title={item.id}
              onPress={() => {
                navigation.navigate('NewEntry', {entry: item});
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default EntryList;
