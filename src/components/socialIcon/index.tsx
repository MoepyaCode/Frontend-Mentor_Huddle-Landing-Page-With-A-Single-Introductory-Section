import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    icon: IconDefinition,
    className?: string,
}

export default function SocialIcon(props: Props) {
    const [hover, setHover] = React.useState(false)

    function onHover() {
        setHover(true)
    }

    function onMouseLeave() {
        setHover(false)
    }

    return (
        <div onMouseOver={onHover} onMouseLeave={onMouseLeave} className={`w-[2.5rem] aspect-square rounded-full border ${hover ? 'border-[#FF52C1]' : 'border-white'} grid place-items-center cursor-pointer`}>
            <FontAwesomeIcon className={`${hover ? 'text-[#FF52C1]' : 'text-white'} w-full`} icon={props.icon} />
        </div>
    )
}