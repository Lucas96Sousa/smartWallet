import React from 'react';
// import {View} from 'react-native';

import {Picker} from '@react-native-community/picker';
import EntryLabel from '../../components/BalanceLabel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

import {Container, PickerView} from './styles';

const Report = () => {
  return (
    <>
      <Container>
        <EntryLabel />
        <PickerView>
          <Picker.Item label="Todas as categoraias" />
        </PickerView>
        <EntrySumary />
        <EntryList />
      </Container>
    </>
  );
};

export default Report;
