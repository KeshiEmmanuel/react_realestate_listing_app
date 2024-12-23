import { BayutApiClient } from "../services/api-client";
import { PropertiesQueries } from "../types/FilterTypes";
import { BayutPropertiesTypes } from "../types/PropertiesTypes";
import useData from "./useData";

export const useBayutProperties = (PropertiesQueries?: PropertiesQueries) =>
    useData<BayutPropertiesTypes>(
        "/properties/list",
        BayutApiClient,
        [PropertiesQueries],
        {
            params: {
                purpose: PropertiesQueries?.purpose?.value,
            },
        }
    );
