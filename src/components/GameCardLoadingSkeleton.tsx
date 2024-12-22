import { Skeleton, Card } from "@nextui-org/react";
const GameCardLoadingSkeleton = () => {
    return (
        <Card radius="lg" className="p-3">
            <Skeleton className="rounded-lg">
                <div className="h-56 rounded-lg bg-default-300" />
            </Skeleton>
            <div className="flex gap-2">
                <Skeleton className="flex mt-2 w-20 rounded-lg">
                    <div className="h-4 bg-default-300" />
                </Skeleton>
                <Skeleton className="flex mt-2 w-14 rounded-lg">
                    <div className="h-4 bg-default-300" />
                </Skeleton>
                <Skeleton className="flex mt-2 w-10 rounded-lg">
                    <div className="h-4 bg-default-300" />
                </Skeleton>
                <Skeleton className="flex mt-2 w-10 rounded-lg">
                    <div className="h-4 bg-default-300" />
                </Skeleton>
            </div>
            <Skeleton className="flex mt-3 rounded-lg">
                <div className="h-4 bg-default-300" />
            </Skeleton>
            <Skeleton className="flex mt-3 w-3/5 rounded-lg">
                <div className="h-4 bg-default-300" />
            </Skeleton>
            <Skeleton className="flex mt-3 w-3/5 rounded-lg">
                <div className="h-6 bg-default-300" />
            </Skeleton>
        </Card>
    );
};

export default GameCardLoadingSkeleton;
