import React from 'react'
import { ResetIcon } from "@radix-ui/react-icons"


export default function Reset({ reset }) {
    const handleClick = () => {
        reset(0)
        console.log("Reset button clicked")
    }
    return (
        <button className="reset-btn" onClick={handleClick }>
            <ResetIcon className="reset-btn-icon" />
        </button >
    )
}