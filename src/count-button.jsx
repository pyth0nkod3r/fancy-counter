import React from 'react'
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons"

export default function CountButton({ type,
    countButton }) {
    const handleClick = () => {
        countButton(prev => {
            if (type === 'minus') {
                const newCount = prev - 1
                if (newCount < 0){
                    return 0
                } else{
                    return newCount
                }
            } else {
                return prev + 1
            }
        }
        )
    }
    return (
        <button className="count-btn" onClick={handleClick}>
            {
                type === "minus" ? <MinusIcon className="count-btn-icon" /> :
                    <PlusIcon className="count-btn-icon" />
            }
        </button >
    )
}