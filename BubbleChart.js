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
                    r:10,
                    name: "point1",
                },{

                     x:4,
                     y:5,
                     r:15,
                     name:"point2",
                },{
                     x:23,
                     y:7,
                     r:7,
                     name: "point3",
                },{
                    x:5,
                    y:2,
                    r:9,
                    name: "point4",
                }],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2

            }]
            

    }
    return (
        <Bubble data={data} />
        
    )
    }

export default BubbleChart
