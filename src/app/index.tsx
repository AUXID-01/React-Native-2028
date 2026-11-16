
import React from 'react';
import {
  View,
  Text as RNText,
  StyleSheet,
  Image, TextInput, Button, Alert, Pressable
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <RNText style={styles.heading}>Box 1</RNText>

      </View>

      <View style={styles.box2}>
        <RNText>Box 2</RNText>
      </View>

      <View style={styles.box3}>
        <RNText>Box 3</RNText>
      </View>

    

      <TextInput placeholder="Enter your name" />

      <Button
        title="Click Me"
        color="#2563EB"
        onPress={() => {
          Alert.alert('Hello!', 'You pressed the button!');
        }}
      />

      <Pressable onPress={() => Alert.alert('Pressed!')}>
      <Image
        source={{
          uri: 'https://picsum.photos/id/237/300/300',
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  box1: {
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  box2: {
    height: 100,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  box3: {
    height: 100,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },


  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 16,
  },
});
