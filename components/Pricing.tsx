import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';

type PricingTier = {
    name: string;
    price: string;
    features: string[];
    buttonText: string;
    highlighted?: boolean;
};

const pricingTiers: PricingTier[] = [
    {
        name: 'Professional',
        price: '',
        features: [
            'Forward Engineering',
            'Cost Comparator',
            'Real Time Monitoring',
            'Reverse Engineering',
            'Terraform Script',
        ],
        buttonText: 'Buy Now',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: '',
        features: [
            'Unlimited Root Accounts',
            'Unlimited IAM Accounts',
            'Unlimited Hyperscaler',
            'Unlimited Services',
            'Forward Engineering',
            'Cost Comparator',
            'Real Time Monitoring',
            'Reverse Engineering',
            'Optimization Advisor',
            'Inter Cloud Transfer',
            'Terraform Script',
        ],
        buttonText: 'Buy Now',
    },
];

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className="h-6 w-5 flex-none"
        aria-hidden="true"
    >
        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </svg>
);

const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => (
    <div
        className={`${tier.highlighted
            ? 'bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] text-white shadow-2xl'
            : 'bg-white text-black border-2'
            } rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 min-h-[600px] min-w-[350px] h-full flex flex-col justify-between`}
    >
        <div>
            <h3 className={`${tier.highlighted ? 'text-white' : 'text-black dark:text-muted-dark'} text-base font-semibold leading-7`}>
                {tier.name}
            </h3>
            {tier.price &&
                <p className="mt-4">
                    <span className={`text-4xl font-bold tracking-tight inline-block ${tier.highlighted ? 'text-white' : 'text-neutral-900 dark:text-neutral-200'}`}>
                        {tier.price}
                    </span>
                </p>
            }
            <ul role="list" className={`${tier.highlighted ? 'text-neutral-300' : 'text-neutral-800'} mt-8 space-y-3 text-sm leading-6`}>
                {tier.features.map((feature, index) => (
                    <li key={index} className="flex gap-x-3">
                        <CheckIcon />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <Link href='https://appsumo.com/products/cloudshot?utm_source=partner-link&utm_medium=referral&utm_campaign=partner-217895' target='_blank'>
                <Button
                    className={`${tier.highlighted
                        ? 'bg-white text-black hover:bg-white/90'
                        : 'bg-neutral-900 text-white hover:bg-black/90'
                        } relative z-10 border border-transparent md:text-sm transition duration-200 items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] mt-8 rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full`}
                    aria-describedby={`tier-${tier.name.toLowerCase()}`}
                >
                    {tier.buttonText}
                </Button>
            </Link>
        </div>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <div className="relative overflow-hidden py-4 md:py-0">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between pb-20">
                <div className="relative">
                    <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                        {pricingTiers.map((tier) => (
                            <PricingCard key={tier.name} tier={tier} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;