import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@styles/about";

const FeatureCard = (props) => {
  const { title, description, icon: Icon, gradientColors, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.featureCard, { backgroundColor: gradientColors[0] }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.featureIconBox}>
        <Icon color="#FFF" size={24} />
      </View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
      {onPress && (
        <View style={styles.featureArrow}>
          <Text style={styles.featureArrowText}>View →</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FeatureCard;
