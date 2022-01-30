import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View, TextInput, Easing } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getActivities } from '../utils/activity';
import { id } from '../utils/realm';

const SearchBar = ({value, updateSearch, style}) => {
    // const [ filterData, setFilterData ] = useState([]);
    // const [ masterData, setMasterData ] = useState([]);
    // // rnce

    // const fetchPosts = () => {
    //     const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    //     fetch(apiURL)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         setFilterData(responseJson);
    //         setMasterData(responseJson);
    //     }).catch((error) => {
    //         console.error(error);
    //     })
    // }
    const [ query, setQuery ] = useState();
    const [ isScaled, setScaled ] = useState(false);
    // const [ error, setError ] = useState(false);

    // const searchActivity = async () => {
    //     Query: {
    //         activities ()
    //     }
    // }

    // const scaleX = useRef(new Animated.Value(0)).current;
    // const interpolateBar = scaleX.interpolate({ inputRange: [0, 1], outputRange: [40, 60] });
    // const animatedTransition = Animated.timing(scaleX, {toValue: 100, duration: 2000, easing: Easing.linear, useNativeDriver: true});
    // const closedTransition = Animated.timing(scaleX, {toValue: 1, duration: 2000, easing: Easing.linear, useNativeDriver: true});

    return (
        <View style={styles.searchContainer}>
            <Ionicons 
                name={'search'} 
                color={'#EBEAED'} 
                size={20}
                // onPress={() => animatedTransition.start(() => setScaled(true))}
            />

            <TextInput 
                style={styles.textitem}
                value={query}
                placeholder='Search Activity ...'
                placeholderTextColor='lightgray'
                onChangeText={(text) => {
                    setQuery(text)
                }}
                onSubmitEditing={()=>alert('hello')}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        height: 40,
        right: 0,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    textitem: {
        paddingLeft: 5,
        color: 'lightgray'
    }
});

export default SearchBar;