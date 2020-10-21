import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';

import {Container, InputValue, FooterButtons, Input} from './styles';

const NewEntry = () => {
  const navigation = useNavigation();
  const currencyBalance = 2045.85;
  return (
    <>
      <SafeAreaView>
        <Container>
          <BalanceLabel currencyBalance={currencyBalance} />
        </Container>

        <InputValue>
          <Input />
          <Input />
          <Button title="GPS" />
          <Button title="Camera" />
        </InputValue>

        <FooterButtons>
          <Button title="Adicionar" />
          <Button title="Cancelar" onPress={() => navigation.goBack(``)} />
        </FooterButtons>
      </SafeAreaView>
    </>
  );
};

export default NewEntry;
