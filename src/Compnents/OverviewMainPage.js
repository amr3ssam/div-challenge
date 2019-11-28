import React from 'react';
import { MainSecondaryDiv } from '../Style'
import TotalsComponent from './TotalsComponent'
import TransactionFooterComponent from './TransactionFooterComponent'
import TransactionChartComponent from './TransactionChartComponent'

export default class OverviewMainPage extends React.Component {

    render() {
        return (
            <MainSecondaryDiv >
                <TotalsComponent />
                {/*
                  
                <BarChartComponent />
                */ }
                <TransactionChartComponent />
                <TransactionFooterComponent />
            </MainSecondaryDiv>
        );
    }
}
