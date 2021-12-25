import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BlogContext from "./Context/BlogContext";

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
