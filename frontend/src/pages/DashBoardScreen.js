import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import AppHeader from "../components/AppHeader";
import { pieData } from "../mock/pieData";
import { barData } from "../mock/barData";
import { Colors } from "../config/colors";
import { chartConfig } from "../config/chartConfig";

const screenWidth = Dimensions.get("window").width;

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>DASHBOARD</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>TOTAL DEPTH</Text>
          <BarChart
            data={barData}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            style={styles.chart}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>TOP 3</Text>
          <PieChart
            data={pieData.map((item, index) => ({
              ...item,
              color: [Colors.primary, Colors.secondary, Colors.warning][index],
              legendFontColor: "#333",
              legendFontSize: 14,
            }))}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            accessor={"times"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 0]}
            absolute
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 12,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#b71c1c",
    alignSelf: "flex-start",
  },
  chart: {
    borderRadius: 12,
  },
});
