import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import AppHeader from "../components/common/AppHeader";

const data = [
  {
    id: "1",
    location: "เขตคลองเตย กรุงเทพฯ",
    lat: 13.722,
    lon: 100.562,
    mag: 3.5,
  },
  {
    id: "2",
    location: "เขตคลองตัน กรุงเทพฯ",
    lat: 13.735,
    lon: 100.585,
    mag: 5.2,
  },
  {
    id: "3",
    location: "เขตวัฒนา กรุงเทพฯ",
    lat: 13.744,
    lon: 100.576,
    mag: 6.8,
  },
];

const getColorByMagnitude = (mag) => {
  if (mag < 4) return "#FFFF00";
  if (mag < 5.5) return "#FFA500";
  if (mag < 6.5) return "#FF0000";
  return "#000000";
};

const DashBoardScreen = () => {
  const [showList, setShowList] = useState(true);

  return (
    <View style={styles.container}>
      {/* Map */}
      <AppHeader />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.736,
          longitude: 100.523,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {data.map((item) => (
          <Marker
            key={item.id}
            coordinate={{ latitude: item.lat, longitude: item.lon }}
          >
            <View
              style={[
                styles.circle,
                { backgroundColor: getColorByMagnitude(item.mag) },
              ]}
            />
          </Marker>
        ))}
      </MapView>

      {/* Bottom Sheet */}
      <Animated.View
        style={[styles.bottomSheet, { height: showList ? 300 : 40 }]}
      >
        {/* Toggle Button  */}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShowList(!showList)}
        >
          <Text style={styles.arrow}>{showList ? "▼" : "▲"}</Text>
        </TouchableOpacity>

        {/* List */}
        {showList && (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.location}</Text>
                <Text style={styles.cardSubtitle}>
                  แผ่นดินไหวที่ผ่านมา • ละติจูด {item.lat} • ลองจิจูด {item.lon}
                  • ความรุนแรง M{item.mag}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </Animated.View>
    </View>
  );
};
export default DashBoardScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },

  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 5,
    overflow: "hidden",
  },
  toggleButton: {
    alignItems: "center",
    padding: 5,
    backgroundColor: "#eee",
  },
  arrow: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  card: {
    backgroundColor: "white",
    padding: 12,
    margin: 5,
    borderRadius: 8,
    elevation: 2,
  },
  cardTitle: { fontWeight: "bold", fontSize: 16 },
  cardSubtitle: { fontSize: 12, color: "gray" },
});
