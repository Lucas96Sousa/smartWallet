import React from 'react';
import {View, SafeAreaView} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

const Main = () => {
  return (
    <>
      <SafeAreaView style={{justifyContent: 'center', padding: 10}}>
        <View>
          <BalancePanel />
          <EntrySumary />
          <EntryList />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Main;
