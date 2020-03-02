import React, {useState} from 'react'
import {View,SafeAreaView,Text,FlatList,  StyleSheet, Image,Alert} from 'react-native'
import {uuid} from 'uuidv4'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = ()=>{

  const [items, setItems] = useState([
    {id: uuid(), text:"milk"},
    {id: uuid(), text:"egg"},
    {id: uuid(), text:"kippa"},
    {id: uuid(), text:"mouchoir"}
  ])

  const deleteItem = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(item=>item.id != id)
    })
  }
  const addItem = (text) =>{
    if(!text){
      Alert.alert('Error', 'veuillez entre un items',
      [{text: 'OK', onPress: () => console.log('Yes Pressed')}]
      )
    }else{
      setItems(prevItems => {
        return [  {id: uuid(), text}, ...prevItems, ]
      })
    }
    
  }
  
  return (
    <SafeAreaView>
      <Header title={"truc muche"}/>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
       
      />
            
     
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1, 
    paddingTop:60
    
  },
  // img:{
  //   width:100,
  //   height:100,
  //   //pour les pourcentages on peut diviser
  //   borderRadius:100/2

  // }

})

export default App