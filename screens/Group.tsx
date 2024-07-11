import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.aliaBhatParent}>
      <Text style={styles.aliaBhat}>Alia Bhat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aliaBhat: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 67,
  },
  aliaBhatParent: {
    flex: 1,
    width: "100%",
    height: 15,
  },
});

export default Group;
