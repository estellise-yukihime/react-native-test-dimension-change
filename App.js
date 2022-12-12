/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Slider } from '@miblanchard/react-native-slider';

const App = () => {
  const [second, setSecond] = useState(50);

  return (
    <View style={styles.container}>
      <View style={styles.directionRow}>
        <View style={{ ...styles.boxRow, ...styles.boxRow1, width: Number(second).toFixed(1) + '%' }}>
        </View>
        <View style={{ ...styles.boxRow, ...styles.boxRow2 }}>
        </View>
      </View>
      <View style={styles.directionColumn}>
        <View style={{ ...styles.boxColumn, ...styles.boxColumn1, height: Number(second).toFixed(1) + '%' }}>
        </View>
        <View style={{ ...styles.boxColumn, ...styles.boxColumn2 }}>
        </View>
      </View>
      <View style={styles.boxSlider}>
        <View style={styles.slider}>
          <Text>{'Value of change: ' + Number(second).toFixed(1)}</Text>
          <Slider
            value={second}
            minimumValue={0}
            maximumValue={100}
            animateTransitions
            maximumTrackTintColor="#d3d3d3"
            minimumTrackTintColor="#1fb28a"
            thumbTintColor="#1a9274"
            onValueChange={setSecond}>
          </Slider>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  directionRow: {
    flexDirection: 'row',
    flex: 2
  },
  boxRow: {
    height: '100%',
    width: '100%'
  },
  boxRow1: {
    backgroundColor: 'skyblue',
    width: '50%'
  },
  boxRow2: {
    backgroundColor: 'springgreen',
    flex: 1
  },
  directionColumn: {
    flexDirection: 'column',
    flex: 2
  },
  boxColumn: {
    width: '100%',
    height: '100%'
  },
  boxColumn1: {
    backgroundColor: 'tomato',
    height: '70%'
  },
  boxColumn2: {
    backgroundColor: 'wheat',
    flex: 1
  },
  boxSlider: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'slateblue'
  },
  slider: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

export default App;
