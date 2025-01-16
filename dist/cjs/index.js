"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationStatus = exports.BusinessSubscription = exports.BusinessRole = void 0;
var BusinessRole;
(function (BusinessRole) {
    BusinessRole["RideOperator"] = "ride-operator";
    BusinessRole["EventHost"] = "event-host";
    BusinessRole["InternalSupport"] = "internal-support";
})(BusinessRole || (exports.BusinessRole = BusinessRole = {}));
var BusinessSubscription;
(function (BusinessSubscription) {
    BusinessSubscription["SubscriptionRideOperatorRahs"] = "subscription-ro-rahs";
    BusinessSubscription["SubscriptionRideOperatorIntroductory"] = "subscription-ro-introductory";
})(BusinessSubscription || (exports.BusinessSubscription = BusinessSubscription = {}));
var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus["idle"] = "idle";
    RegistrationStatus["accepted"] = "accepted";
    RegistrationStatus["rejected"] = "rejected";
    RegistrationStatus["standby"] = "standby";
})(RegistrationStatus || (exports.RegistrationStatus = RegistrationStatus = {}));
