import React from 'react'
import { BorderBeamImage } from './BorderBeamDemo';

type Client = {
    src: string;
    alt: string;
}

const Clients: React.FC = () => {
    const clients: Client[] = [
        { src: "/gcp.svg", alt: "Google Cloud Platform" },
        { src: "/aws.svg", alt: "Amazon Web Services" },
        { src: "/azure.svg", alt: "Microsoft Azure" },
    ];

    return (
        <section className="text-black body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4">Backed by the best companies</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Every AI is the choice of all the fortune 500 companies.
                    </p>
                </div>
                <div className="flex flex-wrap text-center justify-center gap-20">
                    {clients.map((client, index) => (
                        <div key={index} className="">
                            <BorderBeamImage
                                src={client.src}
                                alt={client.alt}
                                width={100}
                                height={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients