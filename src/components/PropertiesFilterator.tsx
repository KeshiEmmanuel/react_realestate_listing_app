import { Select, SelectItem } from "@nextui-org/react";
import {
    catergoryOrder,
    FurinshedStatus,
    PropertyPurpose,
    rentFrequency,
    sortOrder,
} from "../data";
import {
    catergoryOrderTypes,
    FurinshedStatusTypes,
    PropertiesQueries,
    PropertyPurposeTypes,
    rentFrequencyTypes,
    sortOrderTypes,
} from "../types/FilterTypes";

interface Props {
    propertiesQueries: PropertiesQueries;
    setPropertiesQueries: React.Dispatch<
        React.SetStateAction<PropertiesQueries>
    >;
}

export default function PropertiesFilterator({
    propertiesQueries,
    setPropertiesQueries,
}: Props) {
    const selectPurpose = (purpose: PropertyPurposeTypes) =>
        setPropertiesQueries({ ...propertiesQueries, purpose });
    const selectRentFrequency = (rentFrequency: rentFrequencyTypes) =>
        setPropertiesQueries({ ...propertiesQueries, rentFrequency });
    const selectOrder = (sort: sortOrderTypes) =>
        setPropertiesQueries({ ...propertiesQueries, sort });
    const selectCategory = (categoryExternalID: catergoryOrderTypes) => {
        setPropertiesQueries({ ...propertiesQueries, categoryExternalID });
    };
    const selectFurnshiedStatus = (furnishingStatus: FurinshedStatusTypes) =>
        setPropertiesQueries({ ...propertiesQueries, furnishingStatus });

    console.log(propertiesQueries);
    return (
        <div className="flex max-w-[980px] py-3 items-center gap-2 mx-auto">
            <Select label="Select rent frequency..">
                {rentFrequency.map((frequency) => (
                    <SelectItem
                        onPress={() => selectRentFrequency(frequency)}
                        key={frequency.value}
                        value={frequency.value}
                    >
                        {frequency.label}
                    </SelectItem>
                ))}
            </Select>
            <Select label="Select Property type...">
                {PropertyPurpose.map((purpose) => (
                    <SelectItem
                        onPress={() => selectPurpose(purpose)}
                        key={purpose.value}
                        value={purpose.value}
                    >
                        {purpose.label}
                    </SelectItem>
                ))}
            </Select>
            <Select label="Select sort order...">
                {sortOrder.map((order) => (
                    <SelectItem
                        onPress={() => selectOrder(order)}
                        key={order.value}
                        value={order.value}
                    >
                        {order.label}
                    </SelectItem>
                ))}
            </Select>
            <Select label="select property category...">
                {catergoryOrder.map((catergory) => (
                    <SelectItem
                        onPress={() => selectCategory(catergory)}
                        key={catergory.value}
                        value={catergory.value}
                    >
                        {catergory.label}
                    </SelectItem>
                ))}
            </Select>
            <Select label="select furinshed status...">
                {FurinshedStatus.map((furinshed) => (
                    <SelectItem
                        onPress={() => selectFurnshiedStatus(furinshed)}
                        key={furinshed.value}
                        value={furinshed.value}
                    >
                        {furinshed.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}
