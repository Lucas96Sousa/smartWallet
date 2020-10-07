import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Label, Value} from './styles';

const BalancePanelLabel = ({currencyBalance}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Label>Saldo Atual</Label>
      <Value>{currencyBalance}</Value>
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
    </Container>
  );
};

export default BalancePanelLabel;
