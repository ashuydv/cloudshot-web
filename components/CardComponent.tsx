import React from 'react'
import Image from 'next/image'  // Make sure to import Image from next/image

type Props = {
    icon: string,  // Change this to string if you're using an image URL
    title: string,
    desc: string,
}

const CardComponent = ({ icon, title, desc }: Props) => {
    return (
        <div className="flex items-start justify-start gap-4">
            <div className='border p-2 rounded-full'>
                {icon.includes("png") || icon.includes("jpg") || icon.includes("webp") || icon.includes("svg") ? (
                    <Image
                        width={20}
                        height={20}
                        src={icon}
                        alt={title}  // It's better to use a meaningful alt text
                        className="object-cover object-center"
                    />
                ) : (<span className='w-20 h-20 border-2' dangerouslySetInnerHTML={{ __html: icon }} />)}
            </div>
            <div className="flex items-start flex-col gap-2">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    )
}

export default CardComponent