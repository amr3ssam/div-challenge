import React from 'react';
import { ChartHeader, DivTitle } from '../Style'

export default class ChartHeaderComponent extends React.Component {

    render() {
        return (
            <ChartHeader>
                <DivTitle>
                    Aggregated transactions
                </DivTitle>
            </ChartHeader>
        );
    }
}
