import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import Container from '../Core/Container';
import EntryListItem from './EntryListItem';

import {getEntries} from '../../services/Entries';

import styles from './styles';

const EntryList = () => {
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
    <Container
      title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View>
            <EntryListItem
              entry={item}
              isFirstItem={index === 0}
              isLastItem={index === entries.length - 1}
            />
          </View>
        )}
      />
    </Container>
  );
};

export default EntryList;
