import { useBayutProperties } from "../hooks/useBayutProperties";
import { PropertiesQueries } from "../types/FilterTypes";
import GameCardLoadingSkeleton from "./GameCardLoadingSkeleton";
import PropertyCard from "./PropertiesCard";
import { PiWarning } from "react-icons/pi";

interface Props {
    PropertiesQueries: PropertiesQueries;
}

const PropertiesGrid = ({ PropertiesQueries }: Props) => {
    const {
        data: properties,
        isLoading,
        error,
    } = useBayutProperties(PropertiesQueries);

    const loadingSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (error)
        return (
            <p className="flex items-center justify-center gap-2 py-3 text-xl">
                <PiWarning className="text-[30px] text-yellow-500" />
                {error} | Please check your connection
            </p>
        );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {isLoading &&
                loadingSkeleton.map((skeleton) => (
                    <GameCardLoadingSkeleton key={skeleton} />
                ))}
            {properties.slice(2).map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertiesGrid;
