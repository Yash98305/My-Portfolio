import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
   import 'react-vertical-timeline-component/style.min.css';
   import AllOutIcon from '@mui/icons-material/AllOut';
    const Journey = () => {
 const a = [1,2,3,4,5,6,7,1,2,3,4,5,6,7];
    return (

   <>
   <VerticalTimeline lineColor={"rgb(88, 250, 0)"}
   style={{color:"rgb(88, 250, 0)" }}>
     {console.log(a)}
    {a.length>0 && a.map((obj)=>{

    return<VerticalTimelineElement
      className="vertical-timeline-element--work"
       contentStyle={{  background: "#94929214",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)"}}
       contentArrowStyle={{ borderRight: '7px solid  #fff' }}
       date="2011 - present"
       iconStyle={{ background: '#000'}}
       icon={<AllOutIcon sx={{  scale: '2' }} />} 
       >
       <h3 className="vertical-timeline-element-title" style={{color:"rgb(88, 250, 0)"}}>Art Director</h3>
       <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
       <p>
         Creative Direction, User Experience, Visual Design, SEO, Online Marketing
       </p>
     </VerticalTimelineElement>     
    })}
     
   </VerticalTimeline></>
  )
}

export default Journey