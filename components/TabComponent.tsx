import React from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"
import { StickScrollAnimation } from './StickScrollAnimation';

const tabData = [
    {
        id: 'feature1',
        title: 'Real-Time Monitoring',
        content: 'Instant insights into cloud performance and health to prevent issues.',
        image: '/real_time_monitoring.png'
    },
    {
        id: 'feature2',
        title: 'Cost Optimization',
        content: "Analyze costs, optimize spending, and reduce expenses efficiently.",
        image: '/cost_comparisons.png'
    },
    {
        id: 'feature3',
        title: 'Simple Cloud Infrastructure Management',
        content: "Visualize and manage your entire cloud ecosystem with ease.",
        image: '/infra_manage.png'
    },
    {
        id: 'feature4',
        title: 'Services Scheduling',
        content: "Schedule cloud services to maximize efficiency and cut costs.",
        image: '/cloud_services_scheduling.png'
    },
    {
        id: 'feature5',
        title: 'Terraform Script Generation',
        content: "Generate Terraform scripts for consistent infrastructure deployment.",
        image: '/terraform_script_generator.png'
    },
    {
        id: 'feature6',
        title: 'Multiple Infra Deployment',
        content: "Deploy and manage multi-cloud resources from a unified interface.",
        image: '/infra_deployment.png'
    },
];

type TabTriggerProps = {
    id: string,
    title: string,
    content: string,
}

type TabImgProps = {
    id: string,
    src: string,
    alt: string,
}

const TabTrigger = ({ id, title, content }: TabTriggerProps) => (
    <TabsTrigger
        value={id}
        className="max-w-lg flex-wrap border flex items-start flex-col overflow-hidden p-4 hover:bg-gray-100 bg-opacity-12 rounded-lg text-left"
    >
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p>{content}</p>
    </TabsTrigger>
);

const TabImage = ({ id, src, alt }: TabImgProps) => (
    <TabsContent value={id}>
        <Image
            className="object-cover object-center"
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            loading="lazy"
        />
    </TabsContent>
);

export function TabComponent() {
    return (
        <section className="text-black body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4">Build your self-serve model</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Your cloud infrastructure platform that respects your standards
                    </p>
                </div>
                <div className="relative">
                    <StickScrollAnimation />
                </div>
            </div>
        </section>
    )
}