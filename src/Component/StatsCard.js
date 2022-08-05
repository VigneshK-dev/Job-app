import React from 'react'
import Wrapper from '../assets/wrappers/StatItem'

function StatsCard({icon,title,bg,color,count}) {


    return (

        <div>
            <Wrapper color={color} bcg={bg}>
                <header>
                    <span className='count'>{count}</span>
                    <span className='icon'>{icon}</span>
                </header>
                <h5 className='title'>{title}</h5>
            </Wrapper>
        </div>


    )
}

export default StatsCard