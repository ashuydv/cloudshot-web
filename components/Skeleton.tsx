import Image from "next/image";

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 gap-10 h-full">
            <div className="w-full group h-full">
                <div className="flex flex-1 w-full md:h-80 lg:h-80 flex-col space-y-2">
                    {/* TODO */}
                    <Image
                        src="/pricing_graph.png"
                        alt="pricing graph"
                        width={1000}
                        height={1000}
                        className="w-full object-center rounded-md shadow-[0px_0px_3px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-20 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};