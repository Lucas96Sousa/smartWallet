import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Container = ({
  title,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
  children,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      {children}

      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}

          {actionButtonText && (
            <TouchableOpacity
              onPress={onPressActionButton}
              style={styles.actionButton}>
              <Icon name="insert-chart" style={styles.actionButtonIcon} />
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Container;