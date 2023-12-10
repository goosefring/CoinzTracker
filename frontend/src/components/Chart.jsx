import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({coinGraph}) {

    console.log('props', coinGraph);

    return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={coinGraph}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Price" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      );
}





























// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
// }


// let options = {};

// try {
//     for (let i = 0; i < coinGraph.length; i++) {

//         options = {
//             chart: {
//                 type: 'candlestick',
//                 height: 350
//             },
//             series: [{
//                 data: [{
//                     x: coinGraph[i].Date,
//                     y: [coinGraph[i].Open, coinGraph[i].High, coinGraph[i].Low, coinGraph[i].Close]
//                 },
//                 ]
//             }],
//             title: {
//                 text: 'CandleStick Chart',
//                 align: 'left'
//             },
//             xaxis: {
//                 type: 'datetime'
//             },
//             yaxis: {
//                 tooltip: {
//                     enabled: true
//                 }
//             },
//             plotOptions: {
//                 candlestick: {
//                     wick: {
//                         useFillColor: true,
//                     }
//                 }
//             }

//         }
//     }

//     const chart = new ApexCharts(document.querySelector("#chart"), options);

//     //chart.render();

// } catch (err) {
//     console.log('chart error', err);
// }


// class ApexChart extends React.Component {

//     constructor(coinGraph) {
//         super(coinGraph);

//         for (let i = 0; i < coinGraph.length; i++) {

//             this.state = {

//                 series: [{
//                     data: [{
//                         x: coinGraph[i].Date,
//                         y: [coinGraph[i].Open, coinGraph[i].High, coinGraph[i].Low, coinGraph[i].Close]
//                     },
//                     ]
//                 }],
//                 plotOptions: {
//                     candlestick: {
//                         colors: {
//                             upward: '#3C90EB',
//                             downward: '#DF7D46'
//                         }
//                     }
//                 }

//                 // options: {
//                 //     chart: {
//                 //         type: 'candlestick',
//                 //         height: 350
//                 //     },
//                 //     title: {
//                 //         text: 'CandleStick Chart',
//                 //         align: 'left'
//                 //     },
//                 //     xaxis: {
//                 //         type: 'datetime'
//                 //     },
//                 //     yaxis: {
//                 //         tooltip: {
//                 //             enabled: true
//                 //         }
//                 //     }
//                 // },
//             };
//         }

//     }

//     render() {
//         return (
//             <div id="chart">
//                 <ApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
//             </div>
//         );
//     }
// }
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexCharts), domContainer);
// return (
//     <div id="chart">
//         <ApexCharts options={options} series={options.series} type="candlestick" height={350} />
//     </div>
// )