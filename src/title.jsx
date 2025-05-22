import React from 'react'

export default function Title({ locked }) {
    return (
        <h1 className="title">{locked ? <span>Buy <b>Pro </b> to unlock &gt; 5</span> :
            "Fancy Counter "}</h1>
    )
}