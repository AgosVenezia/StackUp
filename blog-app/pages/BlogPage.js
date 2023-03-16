import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput, Alert, StatusBar } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BlogPage = ({ route, navigation }) => {
    const { blog } = route.params || {};
    const [title, setTitle] = useState(blog ? blog.title : '');
    const [content, setContent] = useState(blog ? blog.content : '');
    const [pageState, setPageState] = useState(blog ? 'edit' : 'new');
    const [blogData, setBlogData] = useState(blog ? blog : {});

    const newBlog = async () => {
 
        if (!title || !content) {
          Alert.alert("Error", "Please fill all the fields", [
            {
              text: "OK"
            }
          ])
          return;
        }
     
        let blogs = await AsyncStorage.getItem('blogs');
        blogs = JSON.parse(blogs) || [];
        let blogTempData = {
          title: title,
          content: content,
          id: new Date().getTime().toString()
        }
        blogs.push(blogTempData);
        await AsyncStorage.setItem('blogs', JSON.stringify(blogs));
        Alert.alert("Blog Saved", "Your blog has been saved successfully", [
          {
            text: "OK",
            onPress: () => navigation.navigate('Index')
          }
        ])
      }
     
      const editBlog = async () => {   
        let blogs = await AsyncStorage.getItem('blogs');
        blogs = JSON.parse(blogs);
        let blogTempData = {
          ...blogData,
          title: title,
          content: content,
        }
     
        let blogIndex = blogs.findIndex((blog) => blog.id === blogData.id);
        blogs[blogIndex] = blogTempData;
        await AsyncStorage.setItem('blogs', JSON.stringify(blogs));
        Alert.alert("Blog Saved", "Your blog has been saved successfully", [
          {
            text: "OK",
            onPress: () => navigation.navigate('Index')
          }
        ])
      }
     
      const deleteBlog = async () => {
        let blogs = await AsyncStorage.getItem('blogs');
        blogs = JSON.parse(blogs);
        let blogIndex = blogs.findIndex((blog) => blog.id === blogData.id);
        blogs.splice(blogIndex, 1);
        await AsyncStorage.setItem('blogs', JSON.stringify(blogs));
        Alert.alert("Blog Deleted", "Your blog has been deleted successfully", [
          {
            text: "OK",
            onPress: () => navigation.navigate('Index')
          }
        ])
      }
    
      return (
        <View>
          <View style={{ backgroundColor: "#191B31", padding: 10, marginTop: StatusBar.currentHeight }}>
            <SafeAreaView>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={()=>{
                    if (pageState === "new") {
                      newBlog()
                    }else{
                      editBlog()
                    }
                  }}
                >
                  <FontAwesome5 name="check" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', textAlign: "center" }}>{pageState === "new" ? (title ? title : "New Blog") : "Edit Blog"}</Text>
                {pageState === "edit" ? <TouchableOpacity
                  onPress={() => {
                    deleteBlog()
                  }}
                >
                  <FontAwesome5 name="trash" size={24} color="white" />
                </TouchableOpacity> : <View></View>}
              </View>
            </SafeAreaView>
          </View>
          <View style={styles.container}>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                placeholder="write something interesting..."
                placeholderTextColor={'#777'}
                onChangeText={text => setTitle(text)}
                value={title}
              />
              <TextInput
                style={{ ...styles.input, fontSize: 16, marginTop: 20 }}
                placeholder="explain your thoughts..."
                placeholderTextColor={'#777'}
                onChangeText={text => setContent(text)}
                value={content}
                multiline={true}
              />
            </SafeAreaView>
          </View>
        </View>
      );
  }

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#031031',
      padding: 10,
    },
    input: {
      color: '#fff',
      fontSize: 20,
    },
  });
   
  export default BlogPage;