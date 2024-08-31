import Pricing from '@/components/Pricing'
import Transition from '@/components/Transition'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <Transition>
            <Pricing />
        </Transition>
    )
}

export default page