import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GraduationCap,
  AlertTriangle,
  ClipboardCheck,
  BookCheck,
  BarChart2,
  CheckSquare,
  TrendingUp,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import Mainmenu from "../components/mainMenu";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.mainMenuWrapper}>
        <Mainmenu />
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <ImageBackground
          source={require("../../assets/school.jpg")}
          style={styles.welcomeCard}
          imageStyle={styles.welcomeCardImage}
        >
          <View style={styles.welcomeOverlay}>
            <Text style={styles.welcomeTitle}>Welcome Back, Sheena!</Text>
            <Text style={styles.welcomeSubtitle}>
              Here's a summary of your academic progress.
            </Text>
          </View>
        </ImageBackground>

        {/* Key Stats */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <GraduationCap size={24} color="#FF6B9D" />
            <Text style={styles.statValue}>3.5</Text>
            <Text style={styles.statLabel}>GPA</Text>
          </View>
          <View style={styles.statCard}>
            <ClipboardCheck size={24} color="#FF6B9D" />
            <Text style={styles.statValue}>85%</Text>
            <Text style={styles.statLabel}>Attendance</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/subject")}
            style={styles.statCard}
          >
            <AlertTriangle size={24} color="#FF6B9D" />
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>At Risk</Text>
          </TouchableOpacity>
          <View style={styles.statCard}>
            <BookCheck size={24} color="#FF6B9D" />
            <Text style={styles.statValue}>70%</Text>
            <Text style={styles.statLabel}>Tasks Done</Text>
          </View>
        </View>

        {/* Performance Overview */}
        <View style={styles.performanceCard}>
          <View style={styles.performanceHeader}>
            <BarChart2 size={24} color="#333" />
            <Text style={styles.performanceTitle}>Performance Overview</Text>
          </View>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>Academic Performance</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: "45%" }]} />
            </View>
            <Text style={styles.progressText}>45%</Text>
          </View>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>Attendance Rate</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: "85%" }]} />
            </View>
            <Text style={styles.progressText}>85%</Text>
          </View>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>Task Completion</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: "70%" }]} />
            </View>
            <Text style={styles.progressText}>70%</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activityCard}>
          <View style={styles.activityHeader}>
            <TrendingUp size={24} color="#333" />
            <Text style={styles.activityTitle}>Recent Activity</Text>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <CheckSquare size={20} color="#4CAF50" />
            </View>
            <View>
              <Text style={styles.activityText}>
                Intervention for{" "}
                <Text style={{ fontWeight: "bold" }}>
                  Statistics and Probability
                </Text>{" "}
                completed.
              </Text>
              <Text style={styles.activityTime}>2 days ago</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <AlertTriangle size={20} color="#FF9800" />
            </View>
            <View>
              <Text style={styles.activityText}>
                New intervention for{" "}
                <Text style={{ fontWeight: "bold" }}>
                  Earth and Life Science.
                </Text>
              </Text>
              <Text style={styles.activityTime}>3 days ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F4F7FC",
  },
  mainMenuWrapper: {
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: "#F4F7FC",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  welcomeCard: {
    borderRadius: 20,
    marginBottom: 24,
    overflow: "hidden",
    height: 180,
    justifyContent: "center",
  },
  welcomeCardImage: {
    borderRadius: 20,
  },
  welcomeOverlay: {
    padding: 24,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  statCard: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 16,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
  performanceCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  performanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  performanceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginLeft: 8,
  },
  performanceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  performanceLabel: {
    flex: 1,
    fontSize: 14,
    color: "#374151",
  },
  progressBar: {
    flex: 2,
    height: 12,
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
    marginHorizontal: 12,
  },
  progress: {
    height: "100%",
    backgroundColor: "#FF6B9D",
    borderRadius: 6,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
  },
  activityCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  activityHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginLeft: 8,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FCE4EC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  activityText: {
    flex: 1,
    fontSize: 14,
    color: "#374151",
  },
  activityTime: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },
});
