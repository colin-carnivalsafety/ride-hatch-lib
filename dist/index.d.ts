export declare enum BusinessRole {
    RideOperator = "ride-operator",
    EventHost = "event-host",
    InternalSupport = "internal-support"
}
export declare enum BusinessSubscription {
    SubscriptionRideOperatorRahs = "subscription-ro-rahs",
    SubscriptionRideOperatorRaswa = "subscription-ro-raswa",
    SubscriptionRideOperatorIntroductory = "subscription-ro-introductory"
}
export interface AbnLookupResponse {
    Abn: string;
    AbnStatus: string;
    AbnStatusEffectiveFrom: string;
    Acn?: string;
    AddressDate?: string | null;
    AddressPostcode?: string;
    AddressState?: string;
    BusinessName?: string[];
    EntityName: string;
    EntityTypeCode: string;
    EntityTypeName: string;
    Gst?: string | null;
    Message?: string;
}
export type BusinessCommon = {
    business_name: string;
    abn: string;
    contact_name: string;
    contact_number: string;
    contact_email: string;
    business_role: BusinessRole;
    subscription: BusinessSubscription;
    abn_lookup?: AbnLookupResponse | null;
};
export interface BusinessDocument extends BusinessCommon {
    uid: string;
    owner_uid: string;
    deleted_at_ms: number | null;
    created_at_ms: number;
}
export type DocumentRequirementLevel = 'required' | 'optional';
export type RequiredDocuments = {
    file_plant_registration: DocumentRequirementLevel;
    file_design_registration: DocumentRequirementLevel;
    file_annual_inspection_certificate: DocumentRequirementLevel;
    file_electrical_inspection_certificate: DocumentRequirementLevel;
    file_public_liability_insurance: DocumentRequirementLevel;
    file_emergency_procedures: DocumentRequirementLevel;
    file_inspection_report: DocumentRequirementLevel;
    file_staff_uniforms: DocumentRequirementLevel;
    file_promotional_materials: DocumentRequirementLevel;
    file_site_layout_plan: DocumentRequirementLevel;
    file_device_plan: DocumentRequirementLevel;
    file_workers_compensation: DocumentRequirementLevel;
};
export interface EventDocument {
    uid: string;
    name: string;
    description: string;
    location: string;
    timezone: string;
    start_at: string;
    end_at: string;
    eoi_open_at: string;
    eoi_close_at: string;
    bump_in_at: string;
    bump_out_at: string;
    images: string[];
    required_documents: RequiredDocuments;
    owner_business_name: string;
    owner_business_uid: string;
    owner_uid: string;
    updated_by_uid: string;
    updated_at_ms: number;
    deleted_at_ms: number | null;
    published_at_ms: number;
    visibility: EventVisibility;
}
export declare enum EventVisibility {
    Draft = "draft",// Not visible to anyone except the owner
    Published = "published",// Visible to the public
    Private = "private",// Visible to the owner and invited businesses only
    Unlisted = "unlisted"
}
export interface CreateEventDto {
    uid: string;
    name: string;
    description: string;
    location: string;
    timezone: string;
    start_at: string;
    end_at: string;
    eoi_open_at: string;
    eoi_close_at: string;
    bump_in_at: string;
    bump_out_at: string;
    images: string[];
    required_documents: RequiredDocuments;
    visibility: 'draft' | 'private' | 'published';
}
export type UpdateEventDto = {
    name?: string;
    description?: string;
    location?: string;
    timezone?: string;
    start_at?: string;
    end_at?: string;
    eoi_open_at?: string;
    eoi_close_at?: string;
    bump_in_at?: string;
    bump_out_at?: string;
    images?: string[];
    required_documents?: RequiredDocuments;
    visibility?: 'draft' | 'private' | 'published';
};
export declare enum RegistrationStatus {
    idle = "idle",
    accepted = "accepted",
    rejected = "rejected",
    standby = "standby"
}
export interface EventWithRegistrationStatus extends EventDocument {
    registration_statuses: {
        idle: number;
        accepted: number;
        rejected: number;
        standby: number;
    };
}
export type DeviceRegistrationDocument = {
    uid: string;
    event_uid: string;
    event: EventDocument;
    event_business: BusinessDocument;
    ride_operator_business_uid: string;
    ride_uid: string;
    ride: RideDocument;
    ride_operator_business: BusinessDocument;
    _additional_comments: string;
    file_gs_url: string;
    updated_by_uid: string;
    updated_at_ms: number;
    registration_status: RegistrationStatus;
    deleted_at_ms: number | null;
};
export type CreateDeviceRegistrationDto = {
    event_uid: string;
    ride_operator_business_uid: string;
    ride_uid: string;
    _additional_comments: string;
    file_gs_url: string;
    registration_status: RegistrationStatus;
};
export type UpdateDeviceRegistrationDto = {
    _additional_comments?: string;
    file_gs_url?: string;
    registration_status?: RegistrationStatus;
};
export type RideCommon = {
    uid: string;
    name: string;
    description: string;
    status: string;
    resource_type: string;
    _country_of_origin: string;
    _year_of_manufacture: string;
    _manufacturer_name: string;
    _model: string;
    _min_rider_age: string;
    _min_rider_height_cm: string;
    _max_rider_height_cm: string;
    _min_max_height_requiring_adult_cm: string;
    _other_restrictions: string;
    _max_num_of_riders: string;
    _max_loading_cycles_per_hour: string;
    _site_dimensions_width_m: string;
    _site_dimensions_depth_m: string;
    _site_dimensions_height_m: string;
    _device_dimension_frontage_m: string;
    _device_dimension_depth_m: string;
    _device_dimension_height_m: string;
    _ride_envelope_overhand_required: string;
    _classification: string;
    _device_type: string;
    _power_supply: string;
    _products_range: string;
    _total_site_dimensions: string;
    _device_dimensions: string;
    _plant_rego_state_issued: string;
    _plant_rego_number: string;
    _plant_rego_expiry_date: string;
    _design_rego_number: string;
    _engineering_cert_inspected_date: string;
    _engineering_cert_engineer_name: string;
    _public_liability_policy_number: string;
    _public_liability_expiry_date: string;
    _public_liability_coverage_amount: string;
};
export interface RideDocument extends RideCommon {
    uid: string;
    name: string;
    owner_business_uid: string;
    owner_uid: string;
    updated_by_uid: string;
    updated_at_ms: number;
    deleted_at_ms: number | null;
}
export type UserProfile = {
    uid: string;
    name: string;
    email: string;
    timezone: string;
    /** @deprecated */
    owns: string[];
    updated_uid: string;
    updated_at: string;
    account_status: "active" | "inactive";
};
export type UserSettingsDocument = {
    uid: string;
    selected_business_uid: string | null;
    owner_uid: string;
    deleted_at_ms: number | null;
};
export type BusinessUserDocument = {
    uid: string;
    email: string;
    user_uid: string | null;
    role: "manager" | "owner";
    business_uid: string;
    status: "invited" | "active";
    updated_uid: string;
    updated_at: string;
    deleted_at: string | null;
};
export type EventRegistrationDocument = {
    uid: string;
    event_uid: string;
    business_uid: string;
    updated_by_uid: string;
    updated_at_ms: number;
    owner_uid: string;
    file_gs_url: string | null;
    _additional_comments: string;
};
export type BusinessUser = {
    uid: string;
    email: string;
    user_uid: string | null;
    role: "manager" | "owner";
    business_uid: string;
    status: "invited" | "active";
    updated_uid: string;
    updated_at: string;
    deleted_at: string | null;
};
export type CreateBusinessUserDto = {
    email: string;
    user_uid: string | null;
    role: "manager" | "owner";
    business_uid: string;
    status: "invited" | "active";
};
export type UpdateBusinessUserDto = {
    email?: string;
    user_uid?: string | null;
    role?: "manager" | "owner";
    business_uid?: string;
    status?: "invited" | "active";
};
