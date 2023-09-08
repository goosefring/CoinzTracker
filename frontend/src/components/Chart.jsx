import { React, ReactApexChart } from 'react'
import { ReactDOM } from 'react';

const Chart = (coinGraph) => {

    console.log('chart props', coinGraph);


    // class ApexChart extends React.Component {

    //     constructor(coinGraph) {
    //         super(coinGraph);
    
    //         this.state = {
    
    //             series: [{
    //                 data: [{
    //                     x: coinGraph[0],
    //                     y: coinGraph[1]
    //                 },
    //                 ]
    //             }],
    //             options: {
    //                 chart: {
    //                     type: 'candlestick',
    //                     height: 350
    //                 },
    //                 title: {
    //                     text: 'CandleStick Chart',
    //                     align: 'left'
    //                 },
    //                 xaxis: {
    //                     type: 'datetime'
    //                 },
    //                 yaxis: {
    //                     tooltip: {
    //                         enabled: true
    //                     }
    //                 }
    //             },
    //         };
    //     }
    
    //     render() {
    //         return (
    //             <div id="chart">
    //                 <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
    //             </div>
    //         );
    //     }
    // }
    // const domContainer = document.querySelector('#app');
    // ReactDOM.render(React.createElement(ApexChart), domContainer);
}

export default Chart;