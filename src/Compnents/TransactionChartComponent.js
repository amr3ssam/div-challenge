import React from 'react';
import styled from 'styled-components'
import ChartHeader from './ChartHeaderComponent'
import {  ChartHeaderComponent, TransactionChartDiv } from '../Style'

export default class TransactionChartComponent extends React.Component {

    render() {
        return (
            <TransactionChartDiv >
                <ChartHeaderComponent>
                    <ChartHeader />
                </ChartHeaderComponent>
            </TransactionChartDiv>
        );
    }
}
