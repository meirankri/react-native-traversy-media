import React from 'react'
import { Text, StyleSheet, TouchableOpacity,View} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, deleteItem})=>{
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>
              {item.text}
          </Text>
          <Icon name="remove" s
          ize={20} 
          color="firebrick"  
          onPress={ ()=> deleteItem(item.id)}/>
      </View> 
    </TouchableOpacity>
  )
}



const styles= StyleSheet.create({
 
  listItem:{
    padding:5,
    backgroundColor:'lightblue',
    borderBottomWidth:1,
    borderColor:'#eee',
  },
  listItemView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  listItemText:{
    fontSize:18,
  }

  

})



export default ListItem