import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 28,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  panel: {
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default styles;
