import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@styles/about";

const ContactCard = (props) => {
  const { icon: Icon, title, subtitle, bgColor, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.contactCard}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.contactIconBox, { backgroundColor: bgColor }]}>
        <Icon color="#FFF" size={22} />
      </View>
      <Text style={styles.contactTitle}>{title}</Text>
      <Text style={styles.contactSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default ContactCard;
