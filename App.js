import  {React, useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, TextInput,TouchableOpacity } from 'react-native-web';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  // const clickHandler = ()=>{
  //   setName('sateesh ch');
  //   setPerson({name:'the weekend', age:45})
  //}

//  const [people, setPeople]=useState([
//   {name:'sateesh', id:'1'},
//   {name:'vk', id:'2'},
//   {name:'abd', id:'3'},
//   {name:'dk', id:'4'},
//   {name:'hp', id:'5'},
//   {name:'msd', id:'6'},
//   {name:'rcb', id:'7'},
//  ]);
  const [todos, setTodos]=useState([
    {text: 't20wc2024', key:'1'},
    {text: 'create an app', key:'2'},
    {text: 'play on the switch', key:'3'}
  ])
 
  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  } 
  
  const submitHandler = (text)=>{
    setTodos((prevTodos)=>{
      return[
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.container}>
      {/* <Text>Enter name:</Text>
      <TextInput
       multiline
       style={styles.input}
       placeholder='e.g. sateesh'
       onChangeText={(val) => setName(val)}/>

      <Text>Enter age:</Text>
       <TextInput
       keyboardType='numeric'
       style={styles.input}
       placeholder='e.g.18'
       onChangeText={(val) => setAge(val)}/>

      <Text>name:{name}, age:{age}</Text> */}

      
      {/* <ScrollView>
        {people.map(item =>(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}


      {/* <FlatList
       numColumns={2}
       keyEtractor={(item)=>item.id}
       data={people}
       renderItem={({item}) =>(
        <TouchableOpacity onPress={()=> pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>  
      )}/> */}

      {/**header */}
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
           data={todos}
           renderItem={({item}) => (
            <TodoItem item={item} pressHandler={pressHandler}/>
           )}
           />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40,
  },
  list:{
    marginTop:20,
  }
});
