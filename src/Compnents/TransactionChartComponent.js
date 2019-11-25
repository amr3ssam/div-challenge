import React from 'react';
import styled from 'styled-components'
import ChartHeader from './ChartHeaderComponent'

const ChartMainComponent = styled.div`
 width: 1060px;
  height: 464px;
  border-radius: 2px;
  box-shadow: 0 6px 16px 0 rgba(194, 199, 215, 0.3);
  border: solid 1px #d9dfe7;
  background-color: #ffffff;
    flex-flow : column nowrap; 
   display:flex;
`;
const ChartHeaderComponent = styled.div`
  width: 1058px;
  height: 64px;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 rgba(194, 199, 215, 0.3);
  background-color: #ffffff;
`;
export default class TransactionChartComponent extends React.Component {

    render() {
        return (
            <ChartMainComponent >
                <ChartHeaderComponent>
                    <ChartHeader />
                </ChartHeaderComponent>
            </ChartMainComponent>
        );
    }
}
