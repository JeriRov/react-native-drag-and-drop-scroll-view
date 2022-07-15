import React, { useState } from "react";
import Tile from "./Tile";
import SortableList from "./SortableList";
import { View } from "react-native";
import { mapIndexToData, Item } from "../utils";

const NUM_ITEMS = 10;
const initialData: Item[] = [...Array(NUM_ITEMS)].map(mapIndexToData);

const Chrome = () => {
  const [data] = useState(initialData);

  return (
    <View style={{ flex: 1, backgroundColor: "#fffffe" }}>
      <SortableList
        editing={true}
        onDragEnd={(positions) => {
          console.log(JSON.stringify(positions, null, 2));
        }}
      >
        {data.map((item) => (
          <Tile
            id={item.key}
            key={item.key}
            text={item.text}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </SortableList>
    </View>
  );
};

export default Chrome;
