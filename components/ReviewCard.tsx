import Image from 'next/image';
import { cn } from "@/lib/utils";

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
    priority?: boolean;
}) => {
    return (
        <figure
            className={cn(
                "relative w-full md:w-[320px] cursor-pointer overflow-hidden rounded-xl border p-4",
                "h-auto min-h-[160px] md:h-40", // Responsive height
                "my-2 md:mx-4 md:my-6", // Add some margin for spacing
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transition-all duration-300 ease-in-out" // Smooth transition for hover effect
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt={`Avatar of ${name}`}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm line-clamp-4 md:line-clamp-none">
                {body}
            </blockquote>
        </figure>
    );
};

export default ReviewCard;