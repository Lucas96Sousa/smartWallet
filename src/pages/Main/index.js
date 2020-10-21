import React from 'react';
import {View, SafeAreaView} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

const Main = () => {
  const currency = 2064.95;

  const entriesGroup = [
    {key: '1', description: 'Alimentação', amount: 201},
    {key: '2', description: 'Combustível', amount: 50},
    {key: '3', description: 'Alguel', amount: 800},
    {key: '4', description: 'Lazer', amount: 80},
    {key: '5', description: 'Outros', amount: 1000},
  ];

  const entries = [
    {key: '1', description: 'Padaraia Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 190},
  ];

  return (
    <>
      <SafeAreaView style={{justifyContent: 'center', padding: 10}}>
        <View>
          <BalancePanel currencyBalance={currency} />
          <EntrySumary entriesGroup={entriesGroup} />
          <EntryList entries={entries} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Main;
