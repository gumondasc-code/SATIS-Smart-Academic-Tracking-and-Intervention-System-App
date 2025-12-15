import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  BookOpen,
  HelpCircle,
  Lightbulb,
  BarChart2,
  Calendar,
  MessageSquare,
  AlertTriangle,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Users,
  GraduationCap,
  PlayCircle,
} from "lucide-react-native";
import { styles } from "@styles/about";
import FeatureCard from "./FeatureCard";
import FAQItem from "./FAQItem";
import TipCard from "./TipCard";
import ContactCard from "./ContactCard";

// Tutorial Components
import TutorialCard from "@components/TutorialCard";
import TutorialOverlay from "@components/TutorialOverlay";
import { getTutorialCards, getTutorialById } from "@components/tutorialData";

const About = (props) => {
  const { faqs, features, studyTips } = props;
  const router = useRouter();
  const [openFAQ, setOpenFAQ] = useState(0);
  const [activeTutorial, setActiveTutorial] = useState(null);
  const [tutorialVisible, setTutorialVisible] = useState(false);

  // Get tutorial cards data
  const tutorialCards = getTutorialCards();

  // Handle tutorial card press
  const handleTutorialPress = (tutorialId) => {
    const tutorial = getTutorialById(tutorialId);
    if (tutorial) {
      setActiveTutorial(tutorial);
      setTutorialVisible(true);
    }
  };

  // Close tutorial overlay
  const handleCloseTutorial = () => {
    setTutorialVisible(false);
    setActiveTutorial(null);
  };

  const handleOpenEmail = () => {
    Linking.openURL("mailto:support@satis.edu");
  };

  const handleOpenPhone = () => {
    Linking.openURL("tel:123456789");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <View style={styles.backIconCircle}>
            <ArrowLeft color="#374151" size={20} />
          </View>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Hero Header */}
        <View style={styles.heroCard}>
          <View style={styles.heroIconBox}>
            <GraduationCap color="#FFF" size={28} />
          </View>
          <Text style={styles.heroTitle}>Learn More</Text>
          <Text style={styles.heroSubtitle}>
            Explore resources to help you succeed in your academic journey. Find
            answers to common questions and discover study tips.
          </Text>
        </View>

        {/* App Tutorials Section - NEW */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View
              style={[styles.sectionIconBox, { backgroundColor: "#FCE7F3" }]}
            >
              <PlayCircle color="#DB2777" size={18} />
            </View>
            <View>
              <Text style={styles.sectionTitle}>App Tutorials</Text>
              <Text style={styles.sectionSubtitle}>
                Step-by-step guides for each feature
              </Text>
            </View>
          </View>

          <View style={styles.tutorialGrid}>
            {tutorialCards.map((card) => (
              <TutorialCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                color={card.color}
                stepCount={card.stepCount}
                onPress={() => handleTutorialPress(card.id)}
              />
            ))}
          </View>
        </View>

        {/* Platform Features Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View
              style={[styles.sectionIconBox, { backgroundColor: "#EEF2FF" }]}
            >
              <BookOpen color="#6366F1" size={18} />
            </View>
            <View>
              <Text style={styles.sectionTitle}>Platform Features</Text>
              <Text style={styles.sectionSubtitle}>
                Explore what SATIS offers
              </Text>
            </View>
          </View>

          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                onPress={() => router.push(feature.route)}
              />
            ))}
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View
              style={[styles.sectionIconBox, { backgroundColor: "#FEF3C7" }]}
            >
              <HelpCircle color="#F59E0B" size={18} />
            </View>
            <View>
              <Text style={styles.sectionTitle}>
                Frequently Asked Questions
              </Text>
              <Text style={styles.sectionSubtitle}>
                Find answers to common questions
              </Text>
            </View>
          </View>

          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openFAQ === index}
              onPress={() => setOpenFAQ(openFAQ === index ? -1 : index)}
            />
          ))}
        </View>

        {/* Study Tips Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View
              style={[styles.sectionIconBox, { backgroundColor: "#FEF3C7" }]}
            >
              <Lightbulb color="#F59E0B" size={18} />
            </View>
            <View>
              <Text style={styles.sectionTitle}>Study Tips</Text>
              <Text style={styles.sectionSubtitle}>
                Improve your learning habits
              </Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tipsScroll}
          >
            {studyTips.map((tip, index) => (
              <TipCard key={index} {...tip} />
            ))}
          </ScrollView>
        </View>

        {/* Understanding Progress Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View
              style={[styles.sectionIconBox, { backgroundColor: "#D1FAE5" }]}
            >
              <BarChart2 color="#10B981" size={18} />
            </View>
            <View>
              <Text style={styles.sectionTitle}>
                Understanding Your Progress
              </Text>
              <Text style={styles.sectionSubtitle}>What the colors mean</Text>
            </View>
          </View>

          <View style={styles.progressCard}>
            <View
              style={[
                styles.progressItem,
                { backgroundColor: "#D1FAE5", borderColor: "#A7F3D0" },
              ]}
            >
              <View style={styles.progressBadge}>
                <Text style={[styles.progressBadgeText, { color: "#059669" }]}>
                  On Track
                </Text>
              </View>
              <Text style={styles.progressTitle}>You're Doing Great!</Text>
              <Text style={styles.progressText}>
                Your grade is 75% or higher. Keep up the excellent work!
              </Text>
            </View>

            <View
              style={[
                styles.progressItem,
                { backgroundColor: "#FEF3C7", borderColor: "#FDE68A" },
              ]}
            >
              <View style={styles.progressBadge}>
                <Text style={[styles.progressBadgeText, { color: "#D97706" }]}>
                  Needs Attention
                </Text>
              </View>
              <Text style={styles.progressTitle}>Room for Improvement</Text>
              <Text style={styles.progressText}>
                Your grade is between 70-75%. Consider dedicating more time to
                this subject.
              </Text>
            </View>

            <View
              style={[
                styles.progressItem,
                { backgroundColor: "#FEE2E2", borderColor: "#FECACA" },
              ]}
            >
              <View style={styles.progressBadge}>
                <Text style={[styles.progressBadgeText, { color: "#DC2626" }]}>
                  At Risk
                </Text>
              </View>
              <Text style={styles.progressTitle}>
                Immediate Attention Required
              </Text>
              <Text style={styles.progressText}>
                Your grade is below 70%. Seek help from your teacher
                immediately.
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View
              style={[styles.sectionIconBox, { backgroundColor: "#DBEAFE" }]}
            >
              <Mail color="#3B82F6" size={18} />
            </View>
            <View>
              <Text style={styles.sectionTitle}>Contact & Resources</Text>
              <Text style={styles.sectionSubtitle}>
                Get help when you need it
              </Text>
            </View>
          </View>

          <View style={styles.contactGrid}>
            <ContactCard
              icon={Mail}
              title="Email Support"
              subtitle="support@satis.edu"
              bgColor="#F59E0B"
              onPress={handleOpenEmail}
            />
            <ContactCard
              icon={Phone}
              title="Call Us"
              subtitle="(123) 456-789"
              bgColor="#10B981"
              onPress={handleOpenPhone}
            />
            <ContactCard
              icon={MessageCircle}
              title="Send Message"
              subtitle="Contact Admin"
              bgColor="#8B5CF6"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Still Need Help Banner */}
        <View style={styles.helpBanner}>
          <View style={styles.helpIconCircle}>
            <Users color="#FFF" size={28} />
          </View>
          <Text style={styles.helpTitle}>Still Need Help?</Text>
          <Text style={styles.helpText}>
            Our support team is ready to assist you with any questions or
            concerns about your academic journey.
          </Text>
          <TouchableOpacity style={styles.helpButton} activeOpacity={0.8}>
            <Text style={styles.helpButtonText}>Contact Support Team</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Tutorial Overlay */}
      {activeTutorial && (
        <TutorialOverlay
          visible={tutorialVisible}
          onClose={handleCloseTutorial}
          steps={activeTutorial.steps}
          title={activeTutorial.title}
          accentColor={activeTutorial.color}
        />
      )}
    </SafeAreaView>
  );
};

export default About;
