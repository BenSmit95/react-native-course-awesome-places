import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
    const listItems = props.places.map((place, index) => (
        <ListItem 
            key={index} 
            placeName={place} 
            onItemPressed={() => props.onItemDeleted(index)}
        />
    ))
    return (
        <View style={styles.listContainer}>
            {listItems}
        </View>
    )
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default PlaceList;