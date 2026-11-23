import React from "react";
import { View } from "react-native";

import ActivityData from "../data/activityData";
import PaidCard from "./paidCard";
import PendingCard from "./pendingCard";
import RefundedCard from "./refundedCard";
import CompletedCard from "./completedCard";

const ActivityList = ({ selectedStatus = "Paid" }) => {

    const filteredActivity = ActivityData.filter(
        item => item.status === selectedStatus
    );

    const renderActivityCard = (item) => {
        switch (item.status) {
            case "Paid":
                return <PaidCard item={item} />;

            case "Pending":
                return <PendingCard item={item} />;

            case "Refunded":
                return <RefundedCard item={item} />;

            case "Completed":
                return <CompletedCard item={item} />;

            default:
                return null;
        }
    };

    return (
        <View>
            {filteredActivity.map(item => (
                <View key={item.id}>
                    {renderActivityCard(item)}
                </View>
            ))}
        </View>
    );
};

export default ActivityList;