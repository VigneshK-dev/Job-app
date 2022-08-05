import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip,BarChart, XAxis, YAxis, Bar } from 'recharts'
import Wrapper from '../assets/wrappers/ChartsContainer'

function ChartContainer() {


    const [changechart, setchangechart] = useState(false)

    const data = useSelector(state => state.State.Statsdata.graphdata)
    
 
    return (
        <div>

            <Wrapper>

                <h4>Monthly Applications</h4>
                <button onClick={() => setchangechart(!changechart)}> {changechart ? "Bar Chart" : "Area Chart"}</button>

{changechart   ?  (<ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data} margin={{top:50}} >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey='date' />
                          <YAxis allowDecimals={false} />
                          <Tooltip />
                          <Area type="monotone" dataKey="count"  stroke='#4085f3' fill='#4085f3'/>
                    </AreaChart>
             </ResponsiveContainer>):

             (<ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{top:50}} >
                          <CartesianGrid strokeDasharray="10 10" />
                          <XAxis dataKey='date' />
                          <YAxis allowDecimals={false} />
                          <Tooltip />
                          <Bar dataKey="count" fill='#4085f3' barSize={75}/>
                    </BarChart>
             </ResponsiveContainer>)}
                     

            </Wrapper>

        </div>
    )
}

export default ChartContainer
