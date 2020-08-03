import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
    return (
        <View>
            <View style={styles.statusBar}>
            </View>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.press} style={[{marginRight: 20}]}>
                    <FontAwesomeIcon icon={faBars} color="white" size={ 30 } />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        width: "100%",
        height: 30,
        backgroundColor: '#0059b3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: "100%",
        height: 60,
        backgroundColor: '#0066cc',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});
