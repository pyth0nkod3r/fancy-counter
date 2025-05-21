import React from 'react'
import Title from './title'
import Reset from './reset-button'
import Counter from './counter'
import ButtonContainer from './button-container'
import { useState } from 'react'


export default function Card() {
    const [count, setCount] = useState(0)
    return (
        <div className="card" >
            <Title />
            <Counter count={count} />
            <Reset reset={setCount} />
            <ButtonContainer buttons={setCount} />
        </div>
    )
}