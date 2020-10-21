import React from 'react';
import {SafeAreaView} from 'react-native';

import {Picker} from '@react-native-community/picker';
import EntryLabel from '../../components/BalanceLabel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

import {Container, PickerView, FooterButtons, Button} from './styles';

const Report = () => {
  const currencyBalance = 2045.85;

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
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <Container>
          <EntryLabel currencyBalance={currencyBalance} />
          <PickerView>
            <Picker>
              <Picker.Item label="Todas as categorias" />
            </Picker>
            <Picker>
              <Picker.Item label="Ùltimos 7 dias" />
            </Picker>
          </PickerView>
          <EntrySumary entriesGroup={entriesGroup} />
          <EntryList entries={entries} />

          <FooterButtons>
            <Button title="Salvar" />
            <Button title="Fechar" />
          </FooterButtons>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default Report;
