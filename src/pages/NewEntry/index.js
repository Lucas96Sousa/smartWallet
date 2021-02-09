import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput';

import {saveEntry, deleteEntry} from '../../services/Entries';

import styles from './styles';

const NewEntry = ({route}) => {
  const navigation = useNavigation();

  const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        amount: 0,
        entryAt: new Date(),
      };

  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
    };

    console.log('NewEntry :: save ', data);
    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <NewEntryInput value={amount} onChangeValue={setAmount} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </View>
  );
};

export default NewEntry;
