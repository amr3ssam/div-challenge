import React from 'react';
import { MainSecondaryDiv, TransactionChartDiv } from '../Style'
import TotalsComponent from './TotalsComponent'
import TransactionFooterComponent from './TransactionFooterComponent'
import ChartHeaderComponent from './ChartHeaderComponent'

export default class OverviewMainPage extends React.Component {

    render() {
        return (
            <MainSecondaryDiv >
                <TotalsComponent />
                <TransactionChartDiv >
                    <ChartHeaderComponent />
                </TransactionChartDiv>
                    <TransactionFooterComponent />
            </MainSecondaryDiv>
        );
    }
}
