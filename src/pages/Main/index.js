import React from 'react';
import {View, SafeAreaView} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

import {Container} from './styles';

const Main = ({navigation}) => {
  const currency = 2064.95;

  const entriesGroup = [
    {key: '1', description: 'Alimentação', amount: 201},
    {key: '2', description: 'Combustível', amount: 50},
    {key: '3', description: 'Alguel', amount: 800},
    {key: '4', description: 'Lazer', amount: 80},
    {key: '5', description: 'Outros', amount: 1000},
  ];

  return (
    <>
      <Container>
        <BalancePanel currencyBalance={currency} />
        <EntrySumary entriesGroup={entriesGroup} />
        <EntryList navigation={navigation} />
        {/* onEntryPress={entry} => {
            const entryToJson = JSON.parse(JSON.stringfy(entry));
            navigation.navigate('NewEntry, {
              entry: entryToJson
            )}
          }} */}
      </Container>
    </>
  );
};

export default Main;
