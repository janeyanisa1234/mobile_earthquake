import { Text, View, StyleSheet } from "react-native";
import AppHeader from "../../src/components/common/AppHeader";
import { useRef, useState } from "react";
import { mapData } from "../mock/mapData";
import MapView, { Marker } from "react-native-maps";
import BottomCard from "../components/common/BottomCard";

const getColorByMagnitude = (mag) => {
  if (mag < 4) return "#FFFF00";
  if (mag < 5.5) return "#FFA500";
  if (mag < 6.5) return "#FF0000";
  return "#000000";
};

const MapScreen = () => {
  const [showList, setShowList] = useState(true);
  const mapRef = useRef(null);

  return (
    <View style={styles.container}>
      <AppHeader />
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 13.736,
          longitude: 100.523,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {mapData.map((item) => (
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

      <BottomCard
        showList={showList}
        setShowList={setShowList}
        mapRef={mapRef}
      />
    </View>
  );
};

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
});

export default MapScreen;
