import React from 'react'
import {Bubble} from 'react-chartjs-2'

function BubbleChart() {

    const data = {
        labels: ['7','2','3','4','5'],
        datasets: [
            {
                label: 'Title',
                data:[{
                    x:0,
                    y:1,
                    r:10
                 },{
                     x:4,
                     y:5,
                     r:15
                 },{
                     x:23,
                     y:7,
                     r:7
                },{
                    x:5,
                    y:2,
                    r:9
                },
                {
                    
                }
                ]
            
            }
        ]
    }
    return (
        <Bubble data={data} />
        
    )
}

export default BubbleChart
