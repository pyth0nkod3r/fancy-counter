import React from 'react'
import { ResetIcon } from "@radix-ui/react-icons"


export default function Reset({ reset }) {
    const handleClick = (event) => {
        reset(0)
        event.currentTarget.blur()
    }
    return (
        <button className="reset-btn" onClick={handleClick}>
            <ResetIcon className="reset-btn-icon" />
        </button >
    )
}