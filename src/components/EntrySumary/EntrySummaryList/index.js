import React from 'react';
import {FlatList} from 'react-native';

import {Container, Label, Title} from './styles';

const EntrySummaryList = ({entriesGroup}) => {
  return (
    <>
      <Container>
        <Title>Categorias</Title>
        <FlatList
          data={entriesGroup}
          renderItem={({item}) => (
            <Label>
              - {item.description} - R$ {item.amount}
            </Label>
          )}
        />
      </Container>
    </>
  );
};

export default EntrySummaryList;
