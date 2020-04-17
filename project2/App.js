import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Top from './Top.js';

import Swiper from 'react-native-swiper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Welcome!",
      translate: 0,
      value: "",
      arrayBox: []
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText = (e) => {
    const textValue = e;
    this.setState({
      value: textValue
    });
  };
  boxValue = () => {
    this.setState({
      value: ""
    });
  };
  boxMake = () => {
    if(this.state.value != "")
    {
    const item = this.state.arrayBox;
    item.push(<Text style={styles.text}>{this.state.value}</Text>);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Top />

        <Swiper showsButtons={false} showsPagination={false} onIndexChanged={this.index} bounces={true}>

          <ScrollView contentContainerStyle={{
            transform: [{ translateX: this.state.translate }]
          }}>

            <View style={styles.createBox}>
              <View style={styles.insideBox}>
              <TextInput
                style={styles.input}
                placeholder="Write something..."
                value={this.state.value}
                onChangeText={  text => this.onChangeText(text) }
              />
              <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => {
                    this.boxValue();
                    this.boxMake();
                  }}>
                <Text style={styles.text3}>New post</Text>
              </TouchableOpacity>
              </View>
            </View>
            {/* input from array */}
             {this.state.arrayBox.map((item, index) => {
               return <View style={styles.content} key={index}>{item}</View>
              })}
          </ScrollView>
        
          <ScrollView contentContainerStyle={{
            transform: [{ translateX: this.state.translate }]
          }}>
            <View style={styles.content}>
              <Text style={styles.text}>xyzs</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>xyzs</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>xyzs</Text>
            </View>
          </ScrollView>

          <ScrollView contentContainerStyle={{
            transform: [{ translateX: this.state.translate }]
          }}>
            <View style={styles.content}>
              <Text style={styles.text}>xyzd</Text>
            </View>
          </ScrollView>

          </Swiper>


      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    position: 'relative'
  },
  content: {
    width: '100%',
    height: 500,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  bottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0477ae',
    height: 60,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: '0'
  },
  textInput: {
    height: '60px',
    width: '250px',
    borderColor: 'rgba(0, 0, 0, 0.226)',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: "20px",
    paddingRight: "20px",
    textAlign: "center",
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
    marginTop: 10
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  text3: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  button: {
    width: '250px',
    marginTop: 50,
    alignItems: "center",
    backgroundColor: '#0477ae',
    padding: 20,
    borderRadius: 50
  },
  createBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'white'
  },
  insideBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    height: '100%',
  },
  touchable: { 
    backgroundColor: '#0477ae', 
    borderRadius: 50, 
    paddingLeft: 20, 
    paddingRight: 20, 
    paddingTop: 15, 
    paddingBottom: 15 
  },
  input: { 
    borderColor: 'grey', 
    borderWidth: 1, 
    borderRadius: 50, 
    width: 200, 
    paddingLeft: 20, 
    paddingRight: 20, 
  }
});

export default App;

