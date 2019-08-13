import React, {Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather";

export default class App extends Component{
  state = {
    isLoaded: false,
    loadingError:null,
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          // isLoaded: true,
          loadingError:"something went wrong"
        });
      },
      error => {
        this.setState({
          loadingError:error
        });
      }
    );
  }

  render() {
    const { isLoaded, loadingError } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting Weather Now</Text>
            { loadingError ? 
              <Text style={styles.errorText}>{loadingError}</Text>
              :null
            }
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorText:{
    color:"red",
    backgroundColor:"transparent",
    marginBottom:40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading:{
    flex:1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 93,
  }
});
