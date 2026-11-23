import React, { startTransition } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../../../theme/theme";
import Lucide from "@react-native-vector-icons/lucide";

const PaidCard = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.card}
        >  
            <View style={styles.content}>
                <View style={{flexDirection: "row"}}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />

                    <View style={styles.contentInfo}>
                        <Text style={styles.status}> {item.status}</Text>
                        <Text style={styles.eventName}>{item.eventName}</Text>
                            <View style={{flexDirection: "row"}}>
                                <Text style={styles.eventDate}>{item.eventDate} • </Text>
                                <Text style={styles.ticketName}>{item.ticketName}</Text>
                            </View>
                    </View>
                </View>

                <View style={styles.ticketContainer}> 
                    <View style={styles.ticketInfo}>
                        <Lucide 
                            name="ticket"
                            size={theme.fontSizes.md}
                            style={styles.ticketIcon}
                        />
                        <Text style={styles.ticketOrderInfo}>{item.orderId}</Text>
                    </View>
                    
                    <Text style={styles.price}> Rp {item.price.toLocaleString("id-ID")}</Text>    

                </View>
            </View>

            <View style={styles.separator}/>

            <View style={styles.subContentInfo}>
                <Text style={styles.paymentMethod}>{item.paymentMethod}</Text>
                <TouchableOpacity style={styles.ticketButton}>
                    <Lucide 
                        name="eye" 
                        size={20}
                        color={theme.colors.primary100}
                    />
                    <Text style={styles.ticketTextButton}>View Ticket</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 12,
        paddingVertical: 12,
        marginTop: 12,
        borderWidth: 0.5,
        borderColor: theme.colors.primary80,
        gap: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 6,
    },
    content: {
        flexDirection: "column",
        paddingHorizontal: 12,
        gap: 12,
    },
    contentInfo: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    status: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.primary100,
        backgroundColor: theme.colors.primary40,
        fontSize: theme.fontSizes.xs,
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        borderRadius: 50,
    },
    eventName: {
        marginTop: 4,
        fontFamily: theme.fontFamily.bold,
        fontSize: theme.fontSizes.body,
    },
    ticketContainer: {
        padding: 6,
        backgroundColor: theme.colors.white,
        borderWidth: 0.5,
        borderColor: theme.colors.primary80,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ticketIcon: {
        color: theme.colors.primary100
    },
    ticketInfo: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
    },  
    ticketOrderInfo: {
        fontFamily: theme.fontFamily.semibold,
        color: theme.colors.primary100,
        fontSize: theme.fontSizes.body,
        alignItems: "center",
        justifyContent: "center"
    },
    eventDate:{
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.neutral60
    },
    ticketName:{
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.neutral60
    },
    separator: {
        borderWidth: 0.3,
        borderColor: theme.colors.primary60,
    },
    subContentInfo: {
        flexDirection: "row", 
        justifyContent:"space-between",
        paddingHorizontal: 12,
        alignItems: "center",
    },
    ticketButton: {
        flexDirection: 'row',
        gap: 4,
        alignSelf:  "flex-start",
        backgroundColor: theme.colors.primary40,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
    },
    ticketTextButton: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.primary100
    },
    paymentMethod: {
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.neutral80
    },
    price: {
        fontFamily: theme.fontFamily.bold,
        fontSize: theme.fontSizes.body,
        color: theme.colors.primary100
    }
});

export default PaidCard;