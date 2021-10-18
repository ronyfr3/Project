import React from 'react'
import { ResponsiveContainer,CartesianGrid,LineChart,Line,XAxis, YAxis, Tooltip } from 'recharts';
import { useSelector } from "react-redux"

const Charts=()=>{
  const {stats} = useSelector(state => state.stats)

  let options = []
  for(let i=0;i<5;i++){
    options.push({
      home_team_score: stats?.data?.find((x)=>x.game.home_team_score)?.game?.home_team_id,
      visitor_team_score: stats?.data?.find((x)=>x.game.visitor_team_score)?.game?.visitor_team_id+Math.random(500),
    })
  }

  return(
    <div className="charts-wrapper">
      <ResponsiveContainer aspect={1} className="chart-container">
        <LineChart data={options}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="home_team_score" interval={"preserveStartEnd"}/>
          <YAxis dataKey="visitor_team_score" interval={"preserveStartEnd"}/>
          <Tooltip contentStyle={{backgroundColor:"black",borderRadius:"15px",color:"white"}} itemStyle={{color:"white"}}/>
         <Line dataKey="visitor_team_score" stroke="black" type="monotone" activeDot={{r:6}}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts

