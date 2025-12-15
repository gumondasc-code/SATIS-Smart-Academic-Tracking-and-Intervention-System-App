import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    backgroundColor: "#ffffff",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: "#007AFF",
    width: 28,
    borderRadius: 5,
  },
  dotInactive: {
    backgroundColor: "#D1D5DB",
  },

  // ─────────────────────────────────────────────────────────────
  // Screen shared styles
  // ─────────────────────────────────────────────────────────────
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    backgroundColor: "#ffffff",
  },
  iconWrapper: {
    marginBottom: 32,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    gap: 20,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  iconCircleBlue: {
    backgroundColor: "#EBF4FF",
    shadowColor: "#007AFF",
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  iconCircleGreen: {
    backgroundColor: "#ECFDF5",
    shadowColor: "#10B981",
  },
  iconCircleRed: {
    backgroundColor: "#FEF2F2",
    shadowColor: "#EF4444",
  },
  iconCircleYellow: {
    backgroundColor: "#FFFBEB",
    shadowColor: "#F59E0B",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#1a1a2e",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  description: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 26,
    maxWidth: width * 0.85,
    marginBottom: 48,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
    minWidth: 160,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
    marginRight: 8,
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10B981",
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 16,
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
    minWidth: 200,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 10,
  },
});
