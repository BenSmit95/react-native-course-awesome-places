import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends React.Component {
  state = {
    places: []
  };

  

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => ({
      places: prevState.places.concat(placeName)
    }));
  }

  placeDeletedHandler = (index) => {
    this.setState((prevState) => ({
        places: prevState.places.filter((place, i) => index !== i)
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          onPlaceAdded={this.placeAddedHandler}
        />
        <PlaceList 
          places={this.state.places} 
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
