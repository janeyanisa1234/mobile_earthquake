import { Colors } from "./colors";

export const chartConfig = {
  backgroundColor: Colors.background,
  backgroundGradientFrom: Colors.background,
  backgroundGradientTo: Colors.background,
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(183, 28, 28, ${opacity})`, // ใช้แดงเข้มเป็น default
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.6,
};
