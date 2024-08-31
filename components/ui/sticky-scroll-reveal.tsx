"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[60vh] overflow-y-auto flex justify-between relative rounded-md"
      ref={ref}
    >
      <div className="div relative flex items-start max-w-md justify-start px-4">
        <div>
          {content.map((item, index) => (
            <div key={item.title + index} className="first:mt-44 my-56 max-w-sm flex-wrap border flex items-start flex-col overflow-hidden p-4 hover:bg-gray-50 bg-opacity-12 rounded-lg text-left">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                }}
                className="text-2xl font-medium"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0.2,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                }}
                className="text-kg mt-4"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* <div className="h-40 md:h-80" /> */}
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block max-w-4xl sticky top-0",
          contentClassName
        )}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.6 }}
          className="p-4 border bg-neutral-200 rounded relative"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};
