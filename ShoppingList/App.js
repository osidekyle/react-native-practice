import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from "./components/Header"
import ListItem from "./components/ListItem"
import AddItem from "./components/AddItem"

const App = () => {

  const [items, setItems] = useState([
    {id: 1, text: "Milk"},
    {id: 12, text: "Eggs"},
    {id: 123, text: "Bread"},
    {id: 11, text: "Juice"}
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert("Error", "Please enter an item", [{text: "OK"}])
    }
    else{
    setItems(prevItems => {
      return [{id: Math.random(), text}, ...prevItems]
    })
  }
  }

   return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;