import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Top extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      left: 7,
    };
    this.onPress0 = this.onPress0.bind(this);
    this.onPress1 = this.onPress1.bind(this);
    this.onPress2 = this.onPress2.bind(this);
    this.onPress3 = this.onPress3.bind(this);
    this.onPress4 = this.onPress4.bind(this);
  }

  onPress0 = () => {
    const value = 7;
    this.setState({
      left: value
    });
  };

  onPress1 = () => {
    const value = 92;
    this.setState({
      left: value
    });
  };

  onPress2 = () => {
    const value = 178;
    this.setState({ 
      left: value 
    });
  };
  onPress3 = () => {
    const value = 263;
    this.setState({
      left: value
    });
  };
  onPress4 = () => {
    const value = 347;
    this.setState({
      left: value
    });
  };

  render() {
    return (
      <View style={stylesTop.top}>
        <View style={stylesTop.topContainer}>
          <Text style={stylesTop.textLogo}>facebook</Text>
          <View style={stylesTop.topRight}>
            <View style={stylesTop.tinyLogoBack}>
                <Image
                style={stylesTop.tinyLogo}
                source={require('./images/search-solid.png')}
                />
            </View>
            <View style={stylesTop.tinyLogoBack}>
                <Image 
                style={stylesTop.tinyLogo}
                source={require('./images/facebook-messenger-brands.png')}
                />
            </View>
          </View>
        </View>

        <View style={stylesTop.topContainer1}>
          <TouchableOpacity 
          style={stylesTop.box}
          onPress={this.onPress0}
          >
            <Image
              style={stylesTop.tinyImage}
              source={require('./images/home-solid.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity 
          style={stylesTop.box}
          onPress={this.onPress1}
          >
          <Image
            style={stylesTop.tinyImage}
            source={require('./images/user-friends-solid.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity 
          style={stylesTop.box}
          onPress={this.onPress2}
          >
          <Image
            style={stylesTop.tinyImage}
            source={require('./images/tv-solid.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity 
          style={stylesTop.box}
          onPress={this.onPress3}
          >
          <Image
            style={stylesTop.tinyImage}
            source={require('./images/bell-regular.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity 
          style={stylesTop.box}
          onPress={this.onPress4}
          >
            <Image
              style={stylesTop.tinyImage}
              source={require('./images/bars-solid.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[stylesTop.bottomLine, {left: this.state.left}]}></View>
      </View>
    );
  }
};

const stylesTop = StyleSheet.create({
  tinyLogo: {
    width: 22,
    height: 22,
  },
  tinyImage: {
    width: 25,
    height: 22,
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: 50,
  },
  tinyLogoBack: {
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0,
    borderRadius: 100,
    padding: 10,
    backgroundColor: 'lightgrey'
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '20%',
    width: '100%',
    borderBottomWidth: .6,
    borderBottomColor: 'rgba(0, 0, 0, 0.6)',
    position: 'relative'
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'grey',
    height: '60%',
    width: '95%'
  },
  topContainer1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    height: '40%',
    width: '95%'
  },
  topRight: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '25%',
    height: '100%'
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0477ae'
  },
  textLogo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0477ae'
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#0477ae',
    width: 56,
    height: 2.5,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  }
});

