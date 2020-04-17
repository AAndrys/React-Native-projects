import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import Head from './header.js';
////////////////////////////
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
////////////////////////////

function HomeScreen({navigation}) {
  const open = () => {
    navigation.openDrawer();
  };

  return (
      <Head title="Notatnik" open={open}/>
  );
}

function NotificationsScreen({navigation}) {
  const open = () => {
    navigation.openDrawer();
  };
  return (
    <Head title="Kosz" open={open} />
  );
}

const Drawer = createDrawerNavigator();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      title: "Notatnik"
    };
  }

  render() {
    const MyTheme = {
      dark: false,
      colors: {
        primary: 'rgb(25, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
      },
    };
    return (
      <View style={styles.container}>
        
        <NavigationContainer theme={ MyTheme } >
          <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Wszystkie notatki" component={HomeScreen} />
            <Drawer.Screen name="Kosz" component={NotificationsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  container1: {
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
  }
});

export default App;
