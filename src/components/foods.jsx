"use client"
import { useState } from "react"
import FoodItems from "./foodItems"

const Foods = ({data}) => {
  const [Fooddata, setFooddata] = useState(data)    
  console.log(Fooddata);
  return (
    <div>
        {Fooddata.map((item , i) => {
          return(
            <FoodItems {...item} key={i}/>
          )
        })}
    </div>
  )
}

export default Foods