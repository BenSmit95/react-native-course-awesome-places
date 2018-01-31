import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
    
    return (
        <FlatList 
            style={styles.listContainer}

            // Should be array
            data={props.places}

            // What to do with the data? Give it a function man!
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default PlaceList;