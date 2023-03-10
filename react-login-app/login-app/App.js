import React, {useState} from "react"
import { StyleSheet, Image, View, TextInput, Button } from 'react-native';
import { users } from "./db";

export default function App() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const handleClick = () => {
    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
     alert('Login successful')
    } else {
     alert('Login failed')
    }
   }
  return (
    <View style={styles.container}>
   <Image source={require('./assets/Header.jpg')} style={styles.image}/>
   <TextInput
    placeholder='Username'
    onChangeText={text => setUsername(text)}
    value={username}
    style={styles.input}
   />
   <TextInput
    placeholder='Password'
    onChangeText={text => setPassword(text)}
    value={password}
    style={styles.input}
    secureTextEntry={true}
   />
   <Button
    title="Login"
    onPress={handleClick}
 />
  </View>
  
 );
}

const styles = StyleSheet.create({
 container: {
  justifyContent:"center",
  alignItems:"center",
  marginTop:50
 },
 image:{
  width: 200,
  height: 200,
  resizeMode: 'contain'
 },
 input:{
  width: 300,
  margin: 12,
  paddingBottom:3, 
  borderBottomWidth: 1,
 }
});