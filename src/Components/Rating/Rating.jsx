import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import "./Style.css"


const Rating = ({numofstar}) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(i){
        setRating(i)

    } 
    function handleMouseEnter(i){
        setHover(i)

    } 
    function handleMouseLeave(i){
        setHover(rating)

    }

  return (
    <div>
        <h1>Rating</h1>
        <div className='star'>
            {
                [...Array(numofstar)].map((_,index)=>{
                index +=1
                return <FaStar
                key={index}
                className={index <= (hover || rating) ? "active" : "inactive" }
                onClick={()=> handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40}
                />
                })
            }
        </div>
    </div>
  )
}

export default Rating


