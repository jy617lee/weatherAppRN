import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons} from "@expo/vector-icons";

export default class Weather extends Component{
    render(){
        return(
            <LinearGradient 
                colors={['transparent', 'blue']}
                style = {styles.container}
            >
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy"/>
                    <Text style={styles.temp}>35º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    upper:{
        flex:1, 
        alignItems:"center",
        justifyContent:"center"
    },
    temp:{
        fontSize: 48,
        backgroundColor:"transparent",
        color:"white",
        marginBottom: 24,
        marginTop: 10
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor:"transparent",
        color:"white",
        marginBottom: 10,
        fontWeight:"300"
    },
    subtitle:{
        fontSize: 24,
        backgroundColor:"transparent",
        color:"white",
        marginBottom: 24
    }
});