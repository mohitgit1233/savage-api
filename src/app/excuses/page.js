
"use client"

import { useEffect, useState } from "react"

export default function page  ()  {

  const [data2, setData] = useState()

  const apiCall = async() => {
    
    const response = await fetch('http://localhost:3000/api')
    const data = await response.json()

    console.log(data)
  
        }

  useEffect(() => {
    
      apiCall()

     
      // setData(response)
  }, [])

  return (
    <div>
        {/* {data2?data2.map((d)=>{
            
            <li>{d.name}</li> }):<>Yolo</>} */}
            yolo
    </div>
  )
}

