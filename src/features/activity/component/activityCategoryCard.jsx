import React from "react";
import { TouchableOpacity, View, Text} from "react-native";
import theme from "../../../theme/theme";

const ActivityCategoryCard = ({onPress, isSelectedCategory, item}) => {
    return(
       <TouchableOpacity
            onPress={onPress}
            style={
                {
                    backgroundColor: isSelectedCategory? theme.colors.primary100 : theme.colors.white,
                    alignSelf: "flex-start",
                    borderWidth: 0.5,
                    borderRadius: 50,
                    borderColor: theme.colors.primary80,
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    marginTop: 12,
                    marginHorizontal: 2
                }
            }
       >

        <Text
            style={{
                fontFamily: theme.fontFamily.medium,
                color: isSelectedCategory? theme.colors.white : theme.colors.black,
                fontSize: 14
            }}
        >{item.status}</Text>
       </TouchableOpacity>
    );
}

export default ActivityCategoryCard;