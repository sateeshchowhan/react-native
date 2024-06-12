import React, {useState} from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, TextInput, Button } from 'react-native-web';

export default function AddTodo({submitHandler}){
    const [text, setText]=useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    
    return (
        <View>
            <TextInput 
             style={styles.input}
             placeholder='new todo...'
             onChangeText={changeHandler}
            />
            <Button onPress={()=>submitHandler(text)} title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
       
       marginBotton:10,
       paddingHorizontal:8,
       paddingVertical: 8,
       borderBottomWidth:1,
       borderBottomColor:'#ddd'
    }
})