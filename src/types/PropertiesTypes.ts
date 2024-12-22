export type BayutPropertiesTypes = {
    title: string;
    price: number;
    id: number;
    product: string;
    state: string;
    furnishingStatus: "furnished" | "unfurnished";
    isVerified: boolean;
    rooms: number;
    baths: number;
    coverPhoto: {
        url: string;
    };
};
