/* @flow */

import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

@withNavigation
export default class SettingsButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        onPress={this._handlePress}
        style={styles.buttonContainer}>
        <Ionicons name="md-settings" size={28} color={'black'} />
      </TouchableOpacity>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate('UserSettings');
  };
}

const styles = StyleSheet.create({
  buttonContainer: {},
});
