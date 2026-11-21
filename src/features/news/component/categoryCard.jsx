import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import theme from "../../../theme/theme";

const CategoryCard = ({item, isSelected, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                {
                    backgroundColor: isSelected ? theme.colors.primary100 : theme.colors.white,  
                    fontSize: theme.fontSizes.xs,
                    alignSelf: "flex-start",
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    marginRight: 6,
                    gap: 14,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: theme.colors.primary20,
                }
            }
        >
            <Text style={{
                color: isSelected ? theme.colors.white : theme.colors.black,
                fontWeight: "600",
                fontFamily: theme.fontFamily.semibold
            }}>
                {item.title}
            </Text>
        </TouchableOpacity>
            
    );
}

export default CategoryCard;