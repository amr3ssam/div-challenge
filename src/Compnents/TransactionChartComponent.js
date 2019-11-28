import React from 'react';
import ChartHeader from './ChartHeaderComponent'
import BarChartComponent from './BarChartComponent'
import { TransactionChartDiv } from '../Style'

export default class TransactionChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charData: {}
        };
    }
    componentWillMount() {
        this.getBarChartComponentData()
    }
    // This funcation will be used to Fill Data dynamecly
    getBarChartComponentData = () => {
        this.setState({
            chartData: {
                labels: ['SUN', 'MON', 'TUE', 'WED', 'WED', 'FRI', 'FRI'],
                datasets: [
                    {
                        label: 'Transactions',
                        backgroundColor: "#24bd86",
                        data: [6175940, 1810450, 1530600, 1065190, 1051620, 950720, 2549870]
                    }
                    ,
                    {
                        label: "other Transactions",
                        backgroundColor: "#ff2850",
                        data: [2036540, 5241360, 4026510, 7854130, 8563240, 7418520, 1472580]
                    }

                ]
            }
        })
    }

    render() {
        return (
            <TransactionChartDiv >

                <ChartHeader />
                <BarChartComponent chartData={this.state.chartData}/>
            </TransactionChartDiv>
        );
    }
}
