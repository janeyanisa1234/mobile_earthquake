import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../pages/MapScreen";
import InfoScreen from "../pages/InfoScreen";
import DashboardScreen from "../pages/DashBoardScreen";
import QrCodeScreen from "../pages/QrCodeScreen";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Map") {
            icon = focused ? "map" : "map-outline";
          } else if (route.name === "Info") {
            icon = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Dashboard") {
            icon = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "Qr") {
            icon = focused ? "qr-code" : "qr-code-outline";
          }
          return <Ionicons name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#7b0a1fff",
          paddingTop: 10,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Qr" component={QrCodeScreen} />
    </Tab.Navigator>
  );
};
