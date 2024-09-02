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
                        <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">Privacy Policy</h1>
                        <div className="h-1 w-20 bg-black rounded"></div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                            <p className="text-base">
                                The terms "We," "Us," "Our," and "Company" refer to Cloudshot.io, while "You," "Your," and "Yourself" refer to the users.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Privacy Policy Overview</h2>
                            <p className="text-base">
                                This Privacy Policy is an electronic record under the Information Technology Act, 2000, and the rules made thereunder. It does not require any physical, electronic, or digital signature.
                            </p>
                            <p className="text-base">
                                The Privacy Policy is legally binding between you and the company. By using the Website, you indicate your understanding and consent to this Privacy Policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">User Information</h2>
                            <p className="text-base">
                                To avail certain services on our Websites, users must provide certain information, such as name, email address, age, credit card details, etc. This information enables us to improve our services and provide a better user experience.
                            </p>
                            <p className="text-base">
                                This information will not be considered sensitive if it is publicly available or furnished under the Right to Information Act, 2005, or any other applicable law.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Cookies</h2>
                            <p className="text-base">
                                We may use cookies or similar electronic tools to improve the responsiveness of the sites for our users. Cookies help us understand your interests and preferences. Our advertisers may also assign their own cookies to your browser.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Links to Other Sites</h2>
                            <p className="text-base">
                                Our policy discloses the privacy practices for our website only. We are not responsible for the privacy practices of other websites you may link to from our site.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
                            <p className="text-base">
                                We may share sensitive personal information with third parties in limited circumstances, such as when required by law, or with our group companies for processing personal information on our behalf.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Information Security</h2>
                            <p className="text-base">
                                We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of data. However, no security system is impenetrable, and we cannot guarantee the complete security of our database.
                            </p>
                            <p className="text-base">
                                We may update this Privacy Policy from time to time to reflect changes in our practices and services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Transition>
    );
};

export default page;
