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
                        <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">Terms & Conditions</h1>
                        <div className="h-1 w-20 bg-black rounded"></div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                            <p className="text-base">
                                This Privacy Policy is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000 and the rules made thereunder and the amended provisions pertaining to electronic documents/records in various statutes as amended by the Information Technology Act, 2000. This Privacy Policy does not require any physical, electronic or digital signature.
                            </p>
                            <p className="text-base">
                                These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Inetellectual Property Rights</h2>
                            <p className="text-base">
                                Other than the content you own, under these Terms, Cloudshot.io and/or its licensors own all the intellectual property rights and materials contained in this Website.
                            </p>
                            <p className="text-base">
                                You are granted limited license only for purposes of viewing the material contained on this Website.
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
                            <h2 className="text-xl font-semibold mb-4">Restrictions</h2>
                            <p className="text-base">
                                You are specifically restricted from all of the following:
                            </p>
                            <ul className=' list-disc pl-4 my-3'>
                                <li>
                                    Publishing any Website material in any other media;
                                </li>
                                <li>
                                    Selling, sublicensing and/or otherwise commercializing any Website material;
                                </li>
                                <li>
                                    Publicly performing and/or showing any Website material;
                                </li>
                                <li>
                                    Using this Website in any way that is or may be damaging to this Website;
                                </li>
                                <li>
                                    Using this Website in any way that impacts user access to this Website;
                                </li>
                                <li>
                                    Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
                                </li>
                                <li>
                                    Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
                                </li>
                                <li>
                                    Using this Website to engage in any advertising or marketing.
                                </li>
                            </ul>
                            <p>
                                Certain areas of this Website are restricted from being access by you and Cloudshot.io may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
                            <p className="text-base">
                                In no event shall Cloudshot.io, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Cloudshot.io, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Variation of Terms</h2>
                            <p className="text-base">
                                Cloudshot.io is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Assignment</h2>
                            <p className="text-base">
                                The Cloudshot.io is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Entire Agreement</h2>
                            <p className="text-base">
                                These Terms constitute the entire agreement between Cloudshot.io and you in relation to your use of this Website, and supersede all prior agreements and understandings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Transition>
    );
};

export default page;
