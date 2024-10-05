import React, { useEffect, useState } from 'react'

const RandomColor = () => {

    const [typeofColor, setTypeofColor] = useState('hex')
    const [color, setColor] = useState('#000')

    function Rcolor(length){
      return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHEXColor(){
         const hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
         let hexcolor = "#"
         for(let i=0;i<6;i++){
          hexcolor += hex[Rcolor(hex.length)]
         }
         setColor(hexcolor)
    }

    function handleCreateRandomRGBColor(){
      const r = Rcolor(256)
      const g = Rcolor(256)
      const b = Rcolor(256)

       setColor(`${r},${g},${b}`)
    }

    useEffect(()=>{
      if(typeofColor==="rgb") handleCreateRandomRGBColor()
      else handleCreateRandomHEXColor()
    },[typeofColor])


  return (
    <div
    style={{
        width:'90vw',
        height:'90vh',
        background:color,
        // gap:10
    }}
    >
        <h1>RandomColor</h1>
        
        <button onClick={()=>setTypeofColor('rgb')}>Create RGB color</button>
        <button onClick={()=>setTypeofColor('hex')}>Create HEX color</button>
        <button onClick={ typeofColor ? handleCreateRandomHEXColor : handleCreateRandomRGBColor}>Generete RandomColor color</button>

        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          color:"#fff",
          fontSize:"60px",
          marginTop:'10px',
        }}>
          <h1>{typeofColor === "rgb" ? "RGB color" : "HEX color"}</h1>
          <h1>{color}</h1>
        </div>

        

    </div>
  )
}

export default RandomColor