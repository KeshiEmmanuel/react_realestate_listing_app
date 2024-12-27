import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useBayutProperties } from "../hooks/useBayutProperties";
const FeaturedPropertiesCard = () => {
    const { data, isLoading, error } = useBayutProperties();
    return (
        <div className="max-w-[980px] mx-auto py-4 overflow-hidden">
            <h1 className="text-3xl pb-2 font-bold">Featured Properties</h1>
            <div className="flex flex-col md:flex-row px-3 md:px-0 items-center py-4 gap-3">
                {data.slice(0, 2).map((property) => (
                    <Card
                        key={property.id}
                        isFooterBlurred
                        className="border-none"
                        radius="lg"
                    >
                        <Image
                            alt={property.title}
                            className="object-cover brightness-50"
                            height={300}
                            src={property.coverPhoto.url}
                            width={700}
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-lg text-white/80 py-3 flex flex-col">
                                {property.title}
                                <small className="self-end text-sm">
                                    ${property.price.toLocaleString()}
                                </small>
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default FeaturedPropertiesCard;
