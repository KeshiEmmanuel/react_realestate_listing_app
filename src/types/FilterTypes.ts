export interface rentFrequencyTypes {
    value: string;
    label: string;
}

export interface PropertyPurposeTypes {
    value: string;
    label: string;
}

export interface sortOrderTypes {
    value: string;
    label: string;
}
export interface catergoryOrderTypes {
    value: string;
    label: string;
}
export interface FurinshedStatusTypes {
    value: string;
    label: string;
}

export interface PropertiesQueries {
    rentFrequency: rentFrequencyTypes | null;
    sort: sortOrderTypes | null;
    purpose: PropertyPurposeTypes | null;
    categoryExternalID: catergoryOrderTypes | null;
    furnishingStatus: FurinshedStatusTypes;
}
