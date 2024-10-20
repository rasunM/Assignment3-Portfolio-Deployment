import React from 'react'
export const runtime = "experimental-edge";
const Badge = ({ title }) => {
    return (
        <span className='py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full'>{title}</span>
    )
}

export default Badge