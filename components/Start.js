import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Button } from 'native-base';
import { Dimensions } from "react-native";
import { Font } from 'expo';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Start extends Component {
    render() {
        return (
            <Grid style={styles.fs}>
                <Row style={styles.titleRow} size={1.75}>
                    <Text style={styles.titleText}> aux </Text>
                </Row>
                <Row style={styles.titleRow} size={1}>
                    <Grid>
                        <Row style={styles.subRow} size={1}>
                            <Text style={styles.subText}>shared</Text>
                        </Row>
                        <Row style={styles.subRow} size={1}>
                            <Text style={styles.subText}>listening</Text>
                        </Row>
                        <Row style={[styles.subRow, styles.lastRow]} size={1}>
                            <Text style={styles.subText}>experiences</Text>
                        </Row>
                    </Grid>
                </Row>
                <Row style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }} size={1.5}>
                    <Button rounded success block style={styles.greenBtn}>
                        <Text style={styles.greenBtnText}>
                            sign in with spotify
                            </Text>
                    </Button>
                </Row>
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    titleRow: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 50
    },
    titleText: {
        fontFamily: 'Glacial',
        fontSize: 101,
        color: '#24D161',
    },
    subRow: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 35
    },
    subText: {
        fontSize: 40,
        fontFamily: 'Avenir-Light',
        // padding: 80
    },
    fs: {
        width: width,
        height: height
    },
    greenBtnText: {
        fontFamily: 'Avenir-Light',
        color: 'white',
        fontSize: 23,
        padding: 45
    },
    greenBtn: {
        backgroundColor: '#24D161',
        alignItems: 'center'
    }
});