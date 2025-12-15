import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import { styles } from "@styles/about";

const FAQItem = (props) => {
  const { question, answer, icon: Icon, iconColor, isOpen, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.faqCard, isOpen && styles.faqCardOpen]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.faqHeader}>
        <View
          style={[
            styles.faqIconBox,
            { backgroundColor: isOpen ? "#EEF2FF" : "#F3F4F6" },
          ]}
        >
          <Icon color={isOpen ? "#6366F1" : "#6B7280"} size={18} />
        </View>
        <Text style={styles.faqQuestion}>{question}</Text>
        {isOpen ? (
          <ChevronUp color="#6B7280" size={20} />
        ) : (
          <ChevronDown color="#6B7280" size={20} />
        )}
      </View>
      {isOpen && (
        <View style={styles.faqAnswer}>
          <Text style={styles.faqAnswerText}>{answer}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FAQItem;
