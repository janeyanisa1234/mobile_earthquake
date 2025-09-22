import { Text, View, StyleSheet } from "react-native";
import AppHeader from "../../src/components/common/AppHeader";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <Text style={styles.text}>Dashboard</Text>
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

export default DashboardScreen;
