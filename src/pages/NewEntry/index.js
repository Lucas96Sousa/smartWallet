import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry} from '../../services/Entries';
import {Container, InputValue, FooterButtons, Input} from './styles';

const NewEntry = () => {
  const navigation = useNavigation();
  const currencyBalance = 2045.85;
  const [amount, setAmount] = useState('0.00');

  const save = () => {
    const value = {amount: parseFloat(amount)};
    console.log('NewEntry:: save', value);
    saveEntry(value);
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
          <Button title="Adicionar" onPress={save} />
          <Button title="Cancelar" onPress={() => navigation.goBack(``)} />
        </FooterButtons>
      </SafeAreaView>
    </>
  );
};

export default NewEntry;
