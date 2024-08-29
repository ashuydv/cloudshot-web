/* eslint-disable react/display-name */
"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

export function BgAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);
    const div8Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-2"
            ref={containerRef}
        >
            <div className="flex h-full w-full items-stretch justify-between gap-10">
                <div className="flex flex-col min-h-[200px] justify-between">
                    <Circle ref={div1Ref}>
                    </Circle>
                    <Circle ref={div2Ref}>
                    </Circle>
                </div>
                <div className="flex flex-col min-h-[200px] justify-between">
                    <Circle ref={div3Ref}>
                    </Circle>
                    <Circle ref={div4Ref}>
                    </Circle>
                </div>
                <div className="flex flex-col min-h-[200px] justify-between">
                    <Circle ref={div5Ref}>
                    </Circle>
                    <Circle ref={div6Ref}>
                    </Circle>
                </div>
                <div className="flex flex-col min-h-[200px] justify-between">
                    <Circle ref={div7Ref}>
                    </Circle>
                    <Circle ref={div8Ref}>
                    </Circle>
                </div>
            </div>

            {/* vertical lines */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div8Ref}
            />

            {/* horizontal lines */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div3Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div5Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div7Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div8Ref}
            />
        </div>
    );
}
