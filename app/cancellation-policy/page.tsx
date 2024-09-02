/* eslint-disable react/no-unescaped-entities */
import Transition from '@/components/Transition';
import React from 'react';

type Props = {};

const page = (props: Props) => {
    return (
        <Transition>
            <section className="text-black body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="mb-12">
                        <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">Cancellation Policy</h1>
                        <div className="h-1 w-20 bg-black rounded"></div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Cloudshot's Customer Satisfaction Policy</h4>
                            <p>
                                At Cloudshot, we strive to create quality software that you enjoy using for your business or professional life. You have a number of choices, and we appreciate you giving us your business. Thank you. We have created this policy to detail what we will do should we fail to meet your expectations.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-2">Monthly Subscriptions</h4>
                            <p>
                                If at any time during your first month using our service you are dissatisfied, please contact us. We will do our best to address your issue, provide a workaround, or give a timeline for a solution that meets your needs. If you are not satisfied, we will gladly offer you a <b>FULL REFUND</b> for your purchase and downgrade your account to the free plan for that service.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-2">Annual Subscription</h4>
                            <p>
                                Cloudshot doesn't force you into an annual subscription as a condition to use our services. We prefer to give you the flexibility to choose. In exchange for signing up for an annual up-front commitment, we offer you a significant discount over the already-low monthly subscription cost. If at any time during your first <b>30 days</b> using our service you are dissatisfied, please contact us. We will do our best to address your issue, provide a workaround, or give a timeline for a solution that meets your needs. If you are not satisfied, we will gladly offer you a <b>FULL REFUND</b> for your purchase and downgrade your account to the free plan.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-2">Partial Downgrade of Monthly Subscription</h4>
                            <p>
                                There may be situations where you wish to partially downgrade your monthly subscription. In such cases, you will be provided credits in the form of an extension of your subscription for the active licenses. The discounts that were applied will be excluded when calculating the quantum of credits.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-2">Auto-Renewal</h4>
                            <p>
                                For your convenience, your monthly and yearly subscriptions will auto-renew until you cancel the service. Before each renewal, we will send an email specifying the amount that will be charged to your credit card. You can cancel your subscription even up to five business days after your renewal date, and we will still process your cancellation and give you a <b>FULL REFUND</b>.
                            </p>
                            <p>
                                For questions, please email <a href="mailto:doreply@bereej.com" className="text-blue-600 underline">doreply@bereej.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Transition>
    );
};

export default page;
