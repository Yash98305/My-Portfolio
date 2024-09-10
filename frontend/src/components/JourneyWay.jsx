import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import AllOutIcon from '@mui/icons-material/AllOut';

const JourneyWay = ({data}) => {
    console.log(1,data)
  return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
     contentStyle={{  background: "#94929214",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"}}
     contentArrowStyle={{ borderRight: '7px solid  #fff' }}
     date={data.date}
     iconStyle={{ background: '#000'}}
     icon={<AllOutIcon sx={{  scale: '2' }} />} 
     >
     <h3 className="vertical-timeline-element-title" style={{color:"rgb(88, 250, 0)"}}>{data.title}</h3>
     <h4 className="vertical-timeline-element-subtitle">{data.desc}</h4>
     
   </VerticalTimelineElement>
  )
}

export default JourneyWay