import Image from "next/image";

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 gap-10 h-full">
            <div className="w-full mx-auto group h-full">
                <div className="flex flex-1 w-full h-80 flex-col space-y-2">
                    {/* TODO */}
                    <Image
                        src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Ftyler.jpeg&w=828&q=75"
                        alt="header"
                        width={250}
                        height={150}
                        className="w-full object-center rounded-sm"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};