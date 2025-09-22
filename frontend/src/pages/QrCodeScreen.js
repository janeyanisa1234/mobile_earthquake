import { Text, View, StyleSheet, Image } from "react-native";
import AppHeader from "../components/AppHeader";
import { Images } from "../config/images";

const QrCodeScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />

      <View style={styles.content}>
        <Text style={styles.title}>QR CODE</Text>

        <Image source={Images.QR} style={styles.image} />

        <Text style={styles.subtitle}>
          Scan to Receive {"\n"} Notifications via Telegram
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
  },
  image: {
    width: 350,
    height: 350,
    marginVertical: 20,
    resizeMode: "contain",
  },
  subtitle: {
    fontSize: 20,
    color: "#222",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default QrCodeScreen;
