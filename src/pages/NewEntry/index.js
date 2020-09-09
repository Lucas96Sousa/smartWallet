import React from 'react';
import {SafeAreaView} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import {Container} from './styles';

const NewEntry = () => {
  return (
    <>
      <SafeAreaView>
        <Container>
          <BalanceLabel />
        </Container>
      </SafeAreaView>
    </>
  );
};

export default NewEntry;
