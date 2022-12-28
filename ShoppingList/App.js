import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Header from "./components/Header"

const App = () => {

  const [items, setItem] = useState([
    {id: 1, text: "Milk"},
    {id: 12, text: "Eggs"},
    {id: 123, text: "Bread"},
    {id: 11, text: "Juice"}
  ])
   return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={({item}) => <Text>{item.text}</Text>}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;