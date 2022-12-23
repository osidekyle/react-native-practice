import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, Alert, View, SafeAreaView, TouchableNativeFeedback, Button } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me" 
        onPress={() => console.log("Button pressed") }/>
    </SafeAreaView>
  );
}


const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
