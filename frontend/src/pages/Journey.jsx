import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
   import 'react-vertical-timeline-component/style.min.css';
import JourneyWay from '../components/JourneyWay';
    const Journey = () => {
 const data = [{
  date : "2018-2019",
  title : "High School",
  desc : "S.J.B. Saraswati Vidya Mandir, Mathura"
 },
 {
  date : "2020-2021",
  title : "Intermediate",
  desc : "S.J.B. Saraswati Vidya Mandir, Mathura"
 },
 {
  date : "2021-2025",
  title : "Graduation",
  desc : "GLA University, Mathura"
 },
 {
  date : "2022",
  title : "GLA-Thon",
  desc : "GLA University, Mathura"
 },
 {
  date : "2023",
  title : "Smart India Hackathon(Internal)",
  desc : "GLA University, Mathura"
 },
 {
  date : "2023",
  title : "New India Vibrant Hackathon",
  desc : "Anant National University, Ahmedabad"
 },
 ];
    return (

   <>
   <VerticalTimeline lineColor={"rgb(88, 250, 0)"}
   style={{color:"rgb(88, 250, 0)" }}>

   {data?.map(data=>{
     return <JourneyWay data = {data}/>
   })}
   </VerticalTimeline></>
  )
}

export default Journey