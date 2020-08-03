import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import Header from './components/Header';

export default function App() {

  let valueTransformation = new Animated.Value(-400);
  let openSideMenu = true;

  alertFunc = () => {
    if (openSideMenu) {
      Animated.timing(
        valueTransformation,
        {
          toValue: 0,
          friction: 1,
          useNativeDriver: true,
        }
      ).start();
      openSideMenu = false;
    } else {
      Animated.timing(
        valueTransformation,
        {
          toValue: -400,
          friction: 1,
          useNativeDriver: true,
        }
      ).start();
      openSideMenu = true;
    }
  }

  return (
    <View style={styles.container}>
      <Header press={() => alertFunc()} />
      <Animated.View style={[styles.leftSideMenu, {
        transform: [{ translateX: valueTransformation }]
      }]}>
        <View style={styles.userIcon}>

        </View>
        <TouchableOpacity style={[{ marginBottom: 20 }]}>
          <Text style={styles.textStyle}>
            Option 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{ marginBottom: 20 }]}>
          <Text style={styles.textStyle}>
            Option 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{ marginBottom: 20 }]}>
          <Text style={styles.textStyle}>
            Option 3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{ marginBottom: 20 }]}>
          <Text style={styles.textStyle}>
            Option 4
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <View style={styles.content}>
        <Text>APP</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  leftSideMenu: {
    width: "90%",
    height: '87%',
    backgroundColor: '#0059b3',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    top: 90,
    zIndex: 1,
  },
  content: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 22
  },
  userIcon: {
    width: 80,
    height: 80,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginBottom: 30
  }
});
