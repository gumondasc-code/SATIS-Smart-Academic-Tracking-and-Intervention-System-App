import React from "react";
import { View, Text } from "react-native";
import { styles } from "@styles/about";

const TipCard = (props) => {
  const { number, title, description, bgColor } = props;
  return (
    <View style={[styles.tipCard, { backgroundColor: bgColor }]}>
      <View style={styles.tipBadge}>
        <Text style={styles.tipBadgeText}>Tip #{number}</Text>
      </View>
      <Text style={styles.tipTitle}>{title}</Text>
      <Text style={styles.tipDescription}>{description}</Text>
    </View>
  );
};

export default TipCard;
