import * as React from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

export default function App() {
  return (
    <View style={styles.container}>
      <FastImage
        style={{ height: 100, width: 100 }}
        source={{ uri: "https://dummyimage.com/600x400/000/fff" }}
      />
      {/* uncomment for crash */}
      {/* <FastImage
        style={{ height: 100, width: 100 }}
        source={{ uri: "https://loremflickr.com/320/240" }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
