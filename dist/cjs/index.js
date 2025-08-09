"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRideDto = exports.RegistrationStatus = exports.EventVisibility = exports.BusinessSubscription = exports.BusinessRole = void 0;
var BusinessRole;
(function (BusinessRole) {
    BusinessRole["RideOperator"] = "ride-operator";
    BusinessRole["EventHost"] = "event-host";
    BusinessRole["InternalSupport"] = "internal-support";
})(BusinessRole || (exports.BusinessRole = BusinessRole = {}));
var BusinessSubscription;
(function (BusinessSubscription) {
    BusinessSubscription["SubscriptionRideOperatorRahs"] = "subscription-ro-rahs";
    BusinessSubscription["SubscriptionRideOperatorRaswa"] = "subscription-ro-raswa";
    BusinessSubscription["SubscriptionRideOperatorIntroductory"] = "subscription-ro-introductory";
})(BusinessSubscription || (exports.BusinessSubscription = BusinessSubscription = {}));
var EventVisibility;
(function (EventVisibility) {
    EventVisibility["Draft"] = "draft";
    EventVisibility["Published"] = "published";
    EventVisibility["Private"] = "private";
    EventVisibility["Unlisted"] = "unlisted"; // Visible to anyone with the link, but not listed publicly
})(EventVisibility || (exports.EventVisibility = EventVisibility = {}));
var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus["idle"] = "idle";
    RegistrationStatus["accepted"] = "accepted";
    RegistrationStatus["rejected"] = "rejected";
    RegistrationStatus["standby"] = "standby";
})(RegistrationStatus || (exports.RegistrationStatus = RegistrationStatus = {}));
class UpdateRideDto {
}
exports.UpdateRideDto = UpdateRideDto;
