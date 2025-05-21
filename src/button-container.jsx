import React from 'react'
import CountButton from './count-button'

export default function ButtonContainer({ buttons }) {
    return (
        <div className="button-container">
            <CountButton type="minus" countButton={buttons} />
            <CountButton type="plus" countButton={buttons} />
        </div>
    )
}