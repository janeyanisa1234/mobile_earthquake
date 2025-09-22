import { Text, View, StyleSheet } from "react-native";
import AppHeader from "../components/common/AppHeader";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <Text style={styles.text}>Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MapScreen;
