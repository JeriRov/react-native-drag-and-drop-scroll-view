import React from "react";
import { StyleSheet, View, Text} from "react-native";

import { HEIGHT, WIDTH } from "./Config";

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
  },
  rowItem: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  }
});
interface TileProps {
  id: string;
  text: string;
  backgroundColor: string
}

const Tile = ({ text, backgroundColor }: TileProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <View style={[styles.rowItem, {backgroundColor: backgroundColor}]}>
        <Text style={styles.text}>{text}</Text>
        </View>
    </View>
  );
};

export default Tile;
