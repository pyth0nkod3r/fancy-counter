import React from 'react'
import Title from './title'
import Reset from './reset-button'
import Counter from './counter'
import ButtonContainer from './button-container'
import { useEffect, useState } from 'react'
import CountButton from './count-button'


export default function Card() {
    const [count, setCount] = useState(0)
    const locked = count === 5 ? true : false
    useEffect(() => {
        const handleKeydown = (event) => {
         if(event.code === "Space"){
             const newCount = count+1
             if(newCount > 5){
             setCount(5)
             return 
             }
             setCount(newCount)
         }
     }
        window.addEventListener('keydown', handleKeydown)
        return (event)=>{
            window.removeEventListener('keydown ', handleKeydown)
        }
    }, [count])

    return (
        <div className={`card ${locked ? "card--limit" : ''}`} >
            <Title locked={locked} />
            <Counter count={count} />
            <Reset reset={setCount} />
            <ButtonContainer>
                <CountButton type="minus" countButton={setCount} locked={locked }/>
                <CountButton type="plus" countButton={setCount } locked ={locked}/>
            </ButtonContainer>
        </div>
    )
}