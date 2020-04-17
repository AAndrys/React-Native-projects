import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


export default class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Notatnik'
        };
    }

    render() {
        return (
            <View style={styles.headcontainer}>
                <View style={styles.content}>
                    <Text style={styles.textStyle}>{this.props.title}</Text>
                </View>
                <View style={styles.contentMenu}>
                <TouchableOpacity onPress={this.props.open}>
                    <Image
                        style={styles.tinyImage, { width: 20, height: 30,}}
                        source={require('./images/bars-solid.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.tinyImage}
                        source={require('./images/ellipsis-v-solid.png')}
                    />
                </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    headcontainer: {
        width: '100%',
        height: 250,
    },
    content: {
        width: '100%',
        height: "80%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentMenu: {
        width: '100%',
        height: "20%",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    textStyle: {
        fontSize: 40,
    },
    tinyImage: {
        width: 12,
        height: 30,
        transform: [{scale: 1}],
        resizeMode: 'stretch',
    },
});
