interface Props {
    children: React.ReactNode;
}
function Tag({ children }: Props) {
    return (
        <div className="flex items-center whitespace-nowrap cursor-pointer text-[0.55rem] font-bold text-gray-600 bg-gray-300 p-2 rounded-full ">
            {children}
        </div>
    );
}

export default Tag;
