import React from 'react';
import {SafeAreaView} from 'react-native';

import {Picker} from '@react-native-community/picker';
import EntryLabel from '../../components/BalanceLabel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

import {Container, PickerView, FooterButtons, Button} from './styles';

const Report = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <Container>
          <EntryLabel />
          <PickerView>
            <Picker>
              <Picker.Item label="Todas as categorias" />
            </Picker>
            <Picker>
              <Picker.Item label="Ùltimos 7 dias" />
            </Picker>
          </PickerView>
          <EntrySumary />
          <EntryList />

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
