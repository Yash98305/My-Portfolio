import { Avatar, Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useRef } from 'react'
import img1 from '../assets/linkedin.png'
import img2 from '../assets/instagram.png'
import img3 from '../assets/leetcode.png'
import img4 from '../assets/github.png'
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
  zoom: 1.5
    })
    return () => {if(Effect) Effect.destroy()}
  })
  return (<>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"5.2em"}}>
    <div style={{border:"2px solid rgb(123 192 44 / 40%)",height:"85vh",width:"95vw",borderRadius:15,overflow:'hidden',display:"flex",justifyContent:"space-around"}} ref={backgroundRef} >
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
    <p style={{marginTop:20}}>I'm a MERN stack developer with a passion for crafting dynamic web applications and seamless user experiences. Leveraging MongoDB, Express.js, React, and Node.js, I build robust, scalable solutions that transform ideas into innovative digital experiences. Let's bring your vision to life with cutting-edge technology and thoughtful design.</p>
  <Button href="https://drive.google.com/file/d/1_8YU9axtpOjxLydTrD-_K82tDgFMouhg/view?usp=sharing" target='_blank' style={{
    marginTop:10,border : "2px solid rgba(88,250,0)",width:"250px",borderRadius:"50px",color : "white"
  }}>View My Resume</Button>
  <div style={{
    display:"flex",marginTop:"4px"
  }}>
    <a target='_blank' href="https://www.linkedin.com/in/yashpatel98305/"><img src={img1} alt=""  style={{
      height:"67px",marginTop:"-4px"
    }}/></a>
    <a target='_blank' href="https://www.instagram.com/yash98305/"><img src={img2} alt="" style={{
      height:"60px"
    }} /></a>
    <a target='_blank' href="https://leetcode.com/u/yashpatel98305/"><img src={img3} alt="" style={{
      height:"51px",
      marginTop:"4px",marginLeft:"8px"
    }}  /></a>
    <a target='_blank' href="https://github.com/Yash98305"><img src={img4} alt="" style={{
      height:"54px",
      marginTop:"4px",marginLeft:"10px"
    }} /></a>
  </div>
  
  </div>
</div>
<div style={{width:"40vw",display:"flex",alignItems:"center"}}>
<span style={{border : "6px solid rgb(88, 250, 0)",borderRadius:"50%",padding:5}}>
<Avatar
  alt="Y"
  src={require("../assets/logo.png")}
  sx={{ width: 400, height: 400}}
/></span>
</div>
    </div>
    </div>
  </>
  )
}

export default Home