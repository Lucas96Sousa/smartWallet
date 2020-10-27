import {Alert} from 'react-native';
import uuid from 'react-native-uuid';

import {getRealm} from './Realm';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  console.log('getEntries :: entries ', JSON.stringify(entries));

  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();

  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || uuid.v4(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false,
      };

      realm.create('Entry', data, true);
    });

    console.log('saveEntry:: data: ', JSON.stringify(data));
  } catch (error) {
    console.error(
      'saveEntry:: error on save object: ',
      JSON.stringify(this.data),
    );
    Alert.alert('Erro ao salvar os dados de lançamento');
  }

  return data;
};

export const deleteEntry = async entry => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    console.error(
      'deleteEntry:: error on delete object: ',
      JSON.stringify(entry),
    );
    Alert.alert('Erro ao deletar os lançamento');
  }
};
