import React from "react";
import { Image, Linking, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import WebView from "react-native-webview";

const WebViewScreen = () => {
  handleBackButton = () => {
    this.WEBVIEW_REF.current.goBack();
    return true;
  };
  return (
    <>
      <WebView source={{ uri: "https://www.hostinger.co.uk/" }} />
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:support@example.com")}
        >
          <Image source={require("../assets/email.png")} style={styles.image} />
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
  view: {
    position: "absolute",
    bottom: "7%",
    right: "5%",
  },
});
export default WebViewScreen;
