import React from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

interface BorderBeamImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export function BorderBeamImage({ src, alt, width = 100, height = 100 }: BorderBeamImageProps) {
    return (
        <div className="relative flex flex-col items-center min-w-[200px] min-h-[200px] justify-center overflow-hidden rounded-lg border bg-background p-4">
            <div className="relative">
                <Image
                    width={width}
                    height={height}
                    className='rounded-lg overflow-hidden'
                    src={src}
                    alt={alt}
                />
                <div className="absolute inset-0 rounded-lg border-2 border-white/10"></div>
            </div>
            <BorderBeam size={Math.max(width, height) + 32} duration={12} delay={9} />
        </div>
    );
}