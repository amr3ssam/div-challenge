import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'

const chartStyle = {
    position: 'relative',
    height: '290px',
    width: '97%',
    paddingTop: '1%'
}
export default class BarChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }
    render() {
        const options = {
            maintainAspectRatio: false, legend: { display: false }, scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontColor: '#a9afbf',
                    },
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        // Abbreviate the millions
                        callback: function (value, index, values) {
                            return value / 1e6 + 'M';
                        },
                        fontColor: '#a9afbf',
                    }
                }]
            }
        }
        return (
            <div style={chartStyle}>

                <Bar
                    data={this.state.chartData}
                    options={options}
                />

            </div>
        );
    }
}
