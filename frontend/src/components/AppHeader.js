import { StyleSheet, Text, View } from "react-native";

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EARTHQUAKE RISK</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7b0a1fff",
    paddingTop: 50,
    paddingVertical: 20,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});
