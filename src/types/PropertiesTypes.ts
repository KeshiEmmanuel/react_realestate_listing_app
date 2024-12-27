export type BayutPropertiesTypes = {
    title: string;
    price: number;
    id: number;
    product: string;
    state: string;
    furnishingStatus: "furnished" | "unfurnished";
    rentFrequency: string;
    isVerified: boolean;
    rooms: number;
    purpose: string;
    baths: number;
    coverPhoto: {
        url: string;
    };
};
