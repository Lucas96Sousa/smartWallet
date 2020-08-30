import React from 'react';
import {FlatList} from 'react-native';

import {Container, Label} from './styles';

const EntrySummaryList = () => {
  return (
    <>
      <Container>
        <Label>Categorias</Label>
        <FlatList
          data={[
            {key: 'Alimentação: R$ 201'},
            {key: 'Combustível: R$ 50'},
            {key: 'Alguel: R$800'},
            {key: 'Lazer: R$120'},
            {key: 'Outros: R$1000'},
          ]}
          renderItem={({item}) => <Label> -{item.key} </Label>}
        />
      </Container>
    </>
  );
};

export default EntrySummaryList;
