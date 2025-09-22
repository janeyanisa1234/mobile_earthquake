import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import AppHeader from "../components/AppHeader";
import { Images } from "../config/images";

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>SAFETY</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>1. ตั้งสติอย่าตกใจ</Text>
          <Text style={styles.cardContent}>
            เมื่อเกิดแผ่นดินไหวสิ่งสำคัญอันดับแรกคือการตั้งสติ เพราะความตกใจ
            อาจทำให้ตัดสินใจผิดพลาดและเสี่ยงต่ออันตรายมากขึ้น
            การมีสติจะช่วยให้เรานึกถึงวิธีป้องกันตัวได้อย่างถูกต้อง
            เช่นหาที่กำบังหรืออยู่ห่างจากสิ่งของที่อาจตกหล่น
          </Text>
          <Image source={Images.safety} style={styles.image} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            2. อยู่ให้ห่างจากระเบียง ประตู และกระเบื้องหากอยู่ภายในบ้าน
          </Text>
          <Text style={styles.cardContent}>
            ระหว่างแผ่นดินไหวควรอยู่ให้ห่างจากกระเบียง ประตู และหน้าต่าง
            เพราะโครงสร้างเหล่านี้อาจไม่แข็งแรงพอและมีความเสี่ยงที่จะพังถล่ม
            หรือกระจกแตก หากอยู่ใกล้ระเบียงอาจพลัดตกลงมา
            พื้นที่ปลอดภัยที่สุดคือบริเวณที่มีโครงสร้างแข็งแรง เช่น
            ใต้โต๊ะหรือมุมห้องภายใน
          </Text>
          <Image source={Images.building} style={styles.image} />
        </View>
      </ScrollView>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#b71c1c",
  },
  cardContent: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
    marginTop: 8,
  },
});
