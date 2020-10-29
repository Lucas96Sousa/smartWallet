/* eslint-disable no-unused-expressions */
import React, {useState} from 'react';
import {SafeAreaView, Button, LogBox} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry, deleteEntry} from '../../services/Entries';
import {Container, InputValue, FooterButtons, Input} from './styles';

const NewEntry = ({route}) => {
  const navigation = useNavigation();
  const currencyBalance = 2045.85;

  const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        amount: 0,
        entryAt: new Date(),
      };
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const [amount, setAmount] = useState(`${entry.amount}`);

  const onClose = () => {
    navigation.goBack();
  };

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {amount: parseFloat(amount)};
    console.log('NewEntry:: save', data);
    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  return (
    <>
      <SafeAreaView>
        <Container>
          <BalanceLabel currencyBalance={currencyBalance} />
        </Container>

        <InputValue>
          <Input
            keyboardType="numeric"
            onChangeText={text => setAmount(text)}
            value={amount}
          />
          <Input />
          <Button title="GPS" />
          <Button title="Camera" />
        </InputValue>

        <FooterButtons>
          <Button
            title="Adicionar"
            onPress={() => {
              isValid() && onSave();
            }}
          />
          <Button title="Excluir" onPress={onDelete} />

          <Button title="Cancelar" onPress={onClose} />
        </FooterButtons>
      </SafeAreaView>
    </>
  );
};

export default NewEntry;
