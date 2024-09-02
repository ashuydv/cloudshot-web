import React from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

interface BorderBeamImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export function BorderBeamImage({ src, alt, width = 75, height = 75 }: BorderBeamImageProps) {
    return (
        <div className="relative flex flex-col items-center min-w-[150px] min-h-[150px] justify-center overflow-hidden rounded-lg border bg-background p-4">
            <div className="relative">
                <Image
                    width={(src.includes("segment") || src.includes("algolia")) ? 120 : width}
                    height={height}
                    className='rounded-lg overflow-hidden'
                    src={src}
                    alt={alt}
                />
                <div className="absolute inset-0 rounded-lg border-2 border-white/10"></div>
            </div>
            <BorderBeam size={Math.max(width, height) + 32} duration={5} delay={1} />
        </div>
    );
}