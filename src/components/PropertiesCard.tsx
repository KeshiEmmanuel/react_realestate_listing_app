import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { BayutPropertiesTypes } from "../types/PropertiesTypes";
import { MdOutlineBedroomChild } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { useState } from "react";
import Tag from "./Tag";

interface Props {
    property: BayutPropertiesTypes;
}

const PropertyCard = ({ property }: Props) => {
    const [seeFullDescription, setSeeFullDescription] = useState(false);
    let title = property.title;
    if (title.length > 50) {
        if (!seeFullDescription) {
            title = title.substring(0, 50) + "...";
        }
    } else {
        title;
    }

    return (
        <Card>
            <CardHeader>
                <Image
                    src={property.coverPhoto.url}
                    width={500}
                    height={200}
                    className="object-cover"
                />
            </CardHeader>
            <CardBody className="py-3 px-5">
                <div className="flex items-center gap-1">
                    {property.product === "superhot" && (
                        <Tag>
                            🔥 <p>Hot Sale</p>
                        </Tag>
                    )}
                    {property.isVerified && (
                        <Tag>
                            ✅ <p>Verified</p>
                        </Tag>
                    )}
                    {property.furnishingStatus === "furnished" && (
                        <Tag>
                            ✨ <p>Furnished</p>
                        </Tag>
                    )}
                    <Tag>
                        <MdOutlineBedroomChild /> {property.rooms}
                    </Tag>
                    <Tag>
                        <PiBathtub /> {property.baths}
                    </Tag>
                </div>
                <h1
                    className="font-semibold pt-2 text-xl"
                    onClick={() => setSeeFullDescription((prev) => !prev)}
                >
                    {title}
                </h1>
                <h2 className="py-2">
                    <span className="text-xl">
                        {" "}
                        ${property.price.toLocaleString()}
                    </span>
                    <span className="font-semibold">
                        {property.purpose === "for-rent" ? "/monthly" : null}
                    </span>
                </h2>
            </CardBody>
        </Card>
    );
};

export default PropertyCard;
