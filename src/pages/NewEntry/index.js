import React from 'react';
import {SafeAreaView, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import {Container, InputValue, FooterButtons, Input} from './styles';

const NewEntry = () => {
  return (
    <>
      <SafeAreaView>
        <Container>
          <BalanceLabel />
        </Container>

        <InputValue>
          <Input />
          <Input />
          <Button title="GPS" />
          <Button title="Camera" />
        </InputValue>

        <FooterButtons>
          <Button title="Adicionar" />
          <Button title="Cancelar" />
        </FooterButtons>
      </SafeAreaView>
    </>
  );
};

export default NewEntry;
