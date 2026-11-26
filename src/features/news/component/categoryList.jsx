
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import categories from "../data/category";
import CategoryCard from "./categoryCard";

const CategoryList = () => {
    const [selected, setSelected] = useState(1);

    return (
        <View>
            <FlatList
                horizontal
                data={categories}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CategoryCard
                        item={item}
                        isSelected={selected === item.id}
                        onPress={() => setSelected(item.id)}
                    />
                )}
            />
        </View>
    );
};

export default CategoryList;
