import {View, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import ProgressIcons from './components/ProgressIcons';

const App = () => {
  const activeIconIndex = 1;

  return (
    <View style={styles.container}>
      <ProgressIcons
        activeIcon={activeIconIndex}
        library="FeatherIcon"
        name="coffee"
        size={50}
        color="blue"
        completedIconColor="light_gray">
        <></>
        <></>
        <></>
        <></>
      </ProgressIcons>
      <ProgressIcons
        activeIcon={activeIconIndex}
        library="FontAwesome5"
        name="heart"
        size={50}
        color="red">
        <></>
        <></>
        <></>
      </ProgressIcons>
      <ProgressIcons
        activeIcon={activeIconIndex}
        library="MaterialCommunityIcons"
        name="alarm-light-outline"
        size={50}
        color="green"
        nonActiveIconColor="orange">
        <></>
        <></>
        <></>
        <></>
        <></>
      </ProgressIcons>
    </View>
  );
};

export default App;

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
