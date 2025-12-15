import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFF7FB" },
  container: { flex: 1 },
  scrollContent: { padding: 16 },

  // Back Button
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  backText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },

  // Hero Card
  heroCard: {
    backgroundColor: "#DB2777",
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    alignItems: "center",
  },
  heroIconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#FBCFE8",
    textAlign: "center",
    lineHeight: 20,
  },

  // Section
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#6B7280",
  },

  // Feature Cards
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  // Tutorial Grid
  tutorialGrid: {
    gap: 12,
  },

  featureCard: {
    width: "48%",
    borderRadius: 16,
    padding: 16,
    minHeight: 140,
  },
  featureIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 6,
  },
  featureDescription: {
    fontSize: 12,
    color: "rgba(255,255,255,0.85)",
    lineHeight: 16,
  },
  featureArrow: {
    marginTop: 10,
  },
  featureArrowText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFF",
  },

  // FAQ Cards
  faqCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  faqCardOpen: {
    borderColor: "#C7D2FE",
    shadowColor: "#6366F1",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  faqHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  faqIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  faqQuestion: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  faqAnswer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  faqAnswerText: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },

  // Tip Cards
  tipsScroll: {
    paddingRight: 16,
  },
  tipCard: {
    width: 180,
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
  },
  tipBadge: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  tipBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#FFF",
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 6,
  },
  tipDescription: {
    fontSize: 12,
    color: "rgba(255,255,255,0.85)",
    lineHeight: 16,
  },

  // Progress Cards
  progressCard: {
    gap: 10,
  },
  progressItem: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
  },
  progressBadge: {
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  progressBadgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  progressText: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 18,
  },

  // Contact Cards
  contactGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  contactCard: {
    flex: 1,
    minWidth: "30%",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  contactIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  contactTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 2,
    textAlign: "center",
  },
  contactSubtitle: {
    fontSize: 11,
    color: "#6B7280",
    textAlign: "center",
  },

  // Help Banner
  helpBanner: {
    backgroundColor: "#6366F1",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginTop: 8,
  },
  helpIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  helpTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 8,
  },
  helpText: {
    fontSize: 14,
    color: "#C7D2FE",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 16,
  },
  helpButton: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  helpButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6366F1",
  },
});
