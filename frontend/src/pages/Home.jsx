import React, { useEffect } from 'react'
import { useRef } from 'react'

const Home = () => {
  const backgroundRef = useRef(null);
  useEffect(()=>{
    const Effect = window.VANTA.WAVES({
      el: backgroundRef.current,
     mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xe04,
  shininess: 26.00,
  waveHeight: 16.50,
  waveSpeed: 1.05,
  zoom: 1.23
    })
    return () => {if(Effect) Effect.destroy()}
  })
  return (<>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div style={{border:"2px solid rgb(123 192 44 / 40%)",height:"80vh",width:"90vw",borderRadius:15,overflow:'hidden',display:"flex",justifyContent:"space-around"}} ref={backgroundRef} >
<div style={{width:"60vw", display:"flex",alignItems:"center",justifyContent:"center"}}>
  <div style={{
    //  background: "rgba(0,0,0,0.08)",
    //     backdropFilter: "blur(8px)",
    //     WebkitBackdropFilter: "blur(8px)" ,
       
borderRadius: "10px",
width: "70%",
height : "55vh",
 display:"flex",flexDirection:"column",justifyContent:"center",
color:"rgb(255,255,255,0.5)"
  }}>
    <h1 className='home_h1'>👋 Hey, I'm Yash</h1>
    <h1 className='home_h1'>Full-Stack Developer</h1>
    <p style={{width:"60%",marginTop:20}}>This Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dicta nihil distinctio voluptate. Expedita. is a simple portfolio website built using React and Vanta.js</p>
  </div>
</div>
<div style={{width:"40vw"}}></div>
    </div>
    </div>
  </>
  )
}

export default Home