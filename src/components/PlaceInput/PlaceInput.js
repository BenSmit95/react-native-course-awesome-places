import React from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

class PlaceInput extends React.Component {
    state = {
        placeName: ''
    }

    placeNameChangedHandler = (value) => {
        this.setState({
            placeName: value
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
        this.setState({
            placeName: ''
        });
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={this.placeNameChangedHandler}
                    placeholder="An awesome place"
                    style={styles.placeInput}
                    value={this.state.placeName}
                />
                <Button
                    onPress={this.placeSubmitHandler}
                    style={styles.placeButton}
                    title="Add"
                />
            </View>
        ); 
    }
};

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
});

export default PlaceInput;