import React from 'react'
import ReactDOM from 'react';
import ApexCharts from 'apexcharts'

const Chart = (coinGraph) => {

    console.log('chart props', coinGraph);

    let options = {};

    try {
        for (let i = 0; i < coinGraph.length; i++) {

            options = {
                chart: {
                    type: 'candlestick',
                    height: 350
                },
                series: [{
                    data: [{
                        x: coinGraph[i].Date,
                        y: [coinGraph[i].Open, coinGraph[i].High, coinGraph[i].Low, coinGraph[i].Close]
                    },
                    ]
                }],
                title: {
                    text: 'CandleStick Chart',
                    align: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                },
                plotOptions: {
                    candlestick: {
                        wick: {
                            useFillColor: true,
                        }
                    }
                }

            }
        }

        const chart = new ApexCharts(document.querySelector("#chart"), options);

        //chart.render();

    } catch (err) {
        console.log('chart error', err);
    }


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
        return (
            <div id="chart">
                <ApexCharts options={options} series={options.series} type="candlestick" height={350} />
            </div>
        )
}

export default Chart;