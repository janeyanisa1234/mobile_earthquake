import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { mapData } from "../mock/mapData";

const BottomCard = ({ showList, setShowList, mapRef }) => {
  const handleFocusLocation = (item) => {
    if (mapRef?.current) {
      mapRef.current.animateToRegion(
        {
          latitude: item.lat,
          longitude: item.lon,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        1000
      );
    }
  };
  const handleToggle = () => {
    setShowList(!showList);
  };

  return (
    <Animated.View style={[styles.bottomCard, { height: showList ? 300 : 40 }]}>
      {/* Toggle Button */}
      <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
        {showList ? (
          <Ionicons name="chevron-down" size={24} color="gray" />
        ) : (
          <Ionicons name="chevron-up" size={24} color="gray" />
        )}
      </TouchableOpacity>

      {/* List */}
      {showList && (
        <FlatList
          data={mapData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleFocusLocation(item)}
            >
              <Text style={styles.cardTitle}>{item.location}</Text>
              <Text style={styles.cardSubtitle}>
                แผ่นดินไหวที่ผ่านมา • ละติจูด {item.lat} • ลองจิจูด {item.lon} •
                ความรุนแรง M{item.mag}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </Animated.View>
  );
};

export default BottomCard;

const styles = StyleSheet.create({
  bottomCard: {
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
  card: {
    backgroundColor: "white",
    padding: 12,
    margin: 5,
    borderRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "gray",
  },
});
