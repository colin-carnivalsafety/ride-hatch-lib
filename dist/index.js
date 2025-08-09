export var BusinessRole;
(function (BusinessRole) {
    BusinessRole["RideOperator"] = "ride-operator";
    BusinessRole["EventHost"] = "event-host";
    BusinessRole["InternalSupport"] = "internal-support";
})(BusinessRole || (BusinessRole = {}));
export var BusinessSubscription;
(function (BusinessSubscription) {
    BusinessSubscription["SubscriptionRideOperatorRahs"] = "subscription-ro-rahs";
    BusinessSubscription["SubscriptionRideOperatorRaswa"] = "subscription-ro-raswa";
    BusinessSubscription["SubscriptionRideOperatorIntroductory"] = "subscription-ro-introductory";
})(BusinessSubscription || (BusinessSubscription = {}));
export var EventVisibility;
(function (EventVisibility) {
    EventVisibility["Draft"] = "draft";
    EventVisibility["Published"] = "published";
    EventVisibility["Private"] = "private";
    EventVisibility["Unlisted"] = "unlisted"; // Visible to anyone with the link, but not listed publicly
})(EventVisibility || (EventVisibility = {}));
export var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus["idle"] = "idle";
    RegistrationStatus["accepted"] = "accepted";
    RegistrationStatus["rejected"] = "rejected";
    RegistrationStatus["standby"] = "standby";
})(RegistrationStatus || (RegistrationStatus = {}));
export class UpdateRideDto {
}
