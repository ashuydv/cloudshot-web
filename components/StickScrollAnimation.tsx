import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const tabData = [
    {
        title: 'Real-Time Monitoring',
        description: 'Instant insights into cloud performance and health to prevent issues.',
        content: (
            <div className="h-full w-full flex items-center justify-center text-white rounded overflow-hidden border-black">
                <Image
                    src="/real_time_monitoring.png"
                    width={2400}
                    height={2400}
                    className="object-cover object-center"
                    alt="Real-Time Monitoring"
                />
            </div>
        ),
    },
    {
        title: 'Cost Optimization',
        description: "Analyze costs, optimize spending, and reduce expenses efficiently.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white rounded overflow-hidden border-black">
                <Image
                    src="/cost_comparisons.png"
                    width={2400}
                    height={2400}
                    className="object-cover object-center"
                    alt="Cost Optimization"
                />
            </div>
        ),
    },
    {
        title: 'Simple Cloud Infrastructure Management',
        description: "Visualize and manage your entire cloud ecosystem with ease.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white rounded overflow-hidden border-black">
                <Image
                    src="/infra_manage.png"
                    width={2400}
                    height={2400}
                    className="object-cover object-center"
                    alt="Cloud Infrastructure Management"
                />
            </div>
        ),
    },
    {
        title: 'Services Scheduling',
        description: "Schedule cloud services to maximize efficiency and cut costs.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white rounded overflow-hidden border-black">
                <Image
                    src="/cloud_services_scheduling.png"
                    width={2400}
                    height={2400}
                    className="object-cover object-center"
                    alt="Services Scheduling"
                />
            </div>
        ),
    },
    {
        title: 'Terraform Script Generation',
        description: "Generate Terraform scripts for consistent infrastructure deployment.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white rounded overflow-hidden border-black">
                <Image
                    src="/terraform_script_generator.png"
                    width={2400}
                    height={2400}
                    className="object-cover object-center"
                    alt="Terraform Script Generation"
                />
            </div>
        ),
    },
    {
        title: 'Multiple Infra Deployment',
        description: "Deploy and manage multi-cloud resources from a unified interface.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white rounded overflow-hidden border-black">
                <Image
                    src="/infra_deployment.png"
                    width={2400}
                    height={2400}
                    className="object-cover object-center"
                    alt="Multiple Infrastructure Deployment"
                />
            </div>
        ),
    },
];

export function StickScrollAnimation() {
    return (
        <div>
            <StickyScroll content={tabData} />
        </div>
    );
}