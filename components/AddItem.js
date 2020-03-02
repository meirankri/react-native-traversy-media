import React , {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const AddItem = ({addItem})=>{

    const [text, setText] = useState('')

    const onChange = (value) =>{
        setText(value)
    }
  return (
    <View>
        <TextInput 
        onChangeText={onChange}
        placeholder="add items"
        style={styles.input}
        />
        <TouchableOpacity style={styles.btn}
        onPress={() =>addItem(text)} >
            <Text style={styles.btnText}>
            <Icon name="plus" size={20} />
                add item</Text>
        </TouchableOpacity>
 </View>
  )
}


const styles= StyleSheet.create({
 input:{
     height:60,
     padding:8,
     fontSize:15
 },
 btn:{
     backgroundColor: '#c2bad8',
     padding:9,
     margin:5
 },
 btnText:{
     color:'darkslateblue',
     fontSize:20,
     textAlign:'center'
 }
  

})

export default AddItem