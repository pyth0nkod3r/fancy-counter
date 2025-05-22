import React from 'react'
import CountButton from './count-button'

export default function ButtonContainer({locked, buttons }) {
    return (
        <div className="button-container">
            <CountButton type="minus" countButton={buttons} locked={locked }/>
            <CountButton type="plus" countButton={buttons} locked ={locked}/>
        </div>
    )
}