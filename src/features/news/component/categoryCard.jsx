import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import theme from "../../../theme/theme";

const CategoryCard = ({onPress, item, isSelected}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                {
                    backgroundColor: isSelected ? theme.colors.primary100 : theme.colors.white,  
                    fontSize: theme.fontSizes.xs,
                    alignSelf: "flex-start",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    marginRight: 6,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: theme.colors.primary20,
                }
            }
        >
            <Text style={{
                color: isSelected ? theme.colors.white : theme.colors.black,
                fontFamily: theme.fontFamily.medium,
                fontSize: 14,
            }}>
                {item.title}
            </Text>
        </TouchableOpacity>
            
    );
}

export default CategoryCard;