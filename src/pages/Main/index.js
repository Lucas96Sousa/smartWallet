import React from 'react';
import {View, SafeAreaView} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

const Main = () => {
  const currency = 2064.95;

  return (
    <>
      <SafeAreaView style={{justifyContent: 'center', padding: 10}}>
        <View>
          <BalancePanel currencyBalance={currency} />
          <EntrySumary />
          <EntryList />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Main;
