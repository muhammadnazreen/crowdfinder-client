import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';
import JoinScreen from '../screens/JoinScreen';

const createTwoButtonAlert = ({setJoined}) => {
    Alert.alert(
      "Successfully Joined",
      "You have successfully participated.",
      [
        { text: "OK", onPress: () => setJoined(false) }
      ]
    );
}

const Activity = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.textItems}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemText}>{props.description}</Text>
        <View style={{ flexDirection: "row" }}>
          {props.categories.map((category, id) => (
            <Category key={id} text={category} />
          ))}
        </View>
        <Text style={styles.itemText}>{props.location}</Text>
        <View style={styles.itemBot}>
          <TextInput
            autoCapitalize="none"
            placeholder="0 / 3"
            placeholderTextColor="black"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          const setJoined={props.setJoined};
          <Button
            title="   Join    "
            onPress={
              () => createTwoButtonAlert()
            }
          />
        </View>
      </View>
    </View>
  )
};

const Category = (props) => {
  return (
    <View style={styles.category}>
      <Text style={styles.textCategory}>{props.text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  category: {
    minWidth: 40,
    textAlign: "center",
    height: 24,
    marginVertical: 5,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitle: {
    flexWrap: "wrap",
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 16
  },
  itemText: {
    flexWrap: "wrap",
    alignSelf: "stretch",
    marginVertical: 5,
  },
  textCategory: {
    paddingHorizontal: 15,
  },
  itemBot: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
});

export default Activity;
